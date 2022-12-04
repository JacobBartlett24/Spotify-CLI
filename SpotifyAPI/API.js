const express = require('express')
const open = require('open');
const { useState } = require('react');
const clientID = "c5f6e12045d44f5bb46e0382bcff9060"
const clientSecret = "28c70e35b7464a0d8965ee82034ee87b"
const redirectURI = "http://localhost:5500/index.html"


const API = async () =>{
  
  let app = express(); 
  var scope = 'user-read-private user-read-email';

  app.get('/index.html'), (req,res) =>{
    var code = req.query.code || null;
    var state = req.query.state || null;

    console.log(code)
  }
  
  open(`https://accounts.spotify.com/authorize?response_type=${'code'}&client_id=${clientID}&scope=${scope}&redirect_uri=${redirectURI}`)

}

module.exports = API