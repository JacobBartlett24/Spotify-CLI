const express = require('express')
const open = require('open');

const bodyParser = require('body-parser');
const axios = require('axios')
const importJsx = require('import-jsx');
const fs = require('fs')
const MainBox = importJsx('../components/MainBox');

const clientID = "c5f6e12045d44f5bb46e0382bcff9060"
const clientSecret = "28c70e35b7464a0d8965ee82034ee87b"
const redirectURI = "http://localhost:5500/index.html"

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.listen('8080', ()=>{
  console.log('node process')
})

let userInformation = {}

const API = async () =>{
  let scope = 'user-read-private user-read-email';

  open(`https://accounts.spotify.com/authorize?response_type=${'code'}&client_id=${clientID}&scope=${scope}&redirect_uri=${redirectURI}`);

  const token_url = 'https://accounts.spotify.com/api/token';

  app.get('/post', async (req,res)=>{
    try{
      
      const data = {
        "grant_type": "authorization_code",
        "code": req.query.code,
        "redirect_uri": redirectURI,
        "client_id": clientID,
        "client_secret": clientSecret,
      }

      const response = await axios.post(token_url, data, {
        headers: { 
          'Authorization': 'Basic ' + (new Buffer.from(clientID + ':' + clientSecret).toString('base64')),
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })

      userInformation = response.data;

      axios.defaults.baseURL = 'https://api.spotify.com/v1';
      axios.defaults.headers.common['Authorization'] = `Bearer ${userInformation.access_token}`;
      axios.defaults.headers.common['Content-Type'] = 'application/json';

      res.send(userInformation)

      let userName = axios.get('/me');

      fs.writeFile('./SpotifyAPI/data.json', JSON.stringify(userInformation),'utf-8',(err) =>{
        console.log(`err = ${err}`)
      })

      }catch(err){
        console.log(err)
      }

  });
}

module.exports = API