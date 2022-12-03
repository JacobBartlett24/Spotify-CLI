const React = require('react');
const { useState, useEffect } = React;
const { Box, Text, Newline } = require('ink');
const BigText = require('ink-big-text');

// Spotify client required parameters
const CLIENT_ID = "2925bd9799f14dc494db1806a83a4ab8"
const REDIRECT_URI = "http://127.0.0.1:5500/HTML/index.html"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"

//<a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>


const MainView = () =>{
    return(
        <Box height={"100%"} width={"100%"} alignItems='center' justifyContent='center'>
            <Text backgroundColor={'green'}> Connect Spotify </Text>
        </Box>
    )
}

module.exports = MainView;

