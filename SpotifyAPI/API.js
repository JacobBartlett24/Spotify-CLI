const express = require('express')
const open = require('open');
const { useState } = require('react');
const clientID = "c5f6e12045d44f5bb46e0382bcff9060"
const clientSecret = "28c70e35b7464a0d8965ee82034ee87b"
const redirectURI = "http://localhost:5500/index.html"
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))

app.listen('8080', ()=>{
  console.log('node process')
})

const API = async () =>{
  let scope = 'user-read-private user-read-email';

  open(`https://accounts.spotify.com/authorize?response_type=${'code'}&client_id=${clientID}&scope=${scope}&redirect_uri=${redirectURI}`);
}

app.post('/post', (req,res)=>{
  res.send(`code = ${req.body.code}`);
});

module.exports = API