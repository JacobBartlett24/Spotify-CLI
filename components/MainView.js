const React = require('react');
const { useState, useEffect } = React;
const { Box, Text, Newline } = require('ink');
const BigText = require('ink-big-text');
const axios = require('axios')


// Spotify client required parameters

const MainView = (props) =>{

    const getUserProfile = async () =>{
        const data = await axios.get('/me')
        console.log(data)
    }

    getUserProfile();

    return(
        <Box height={"100%"} width={"100%"} alignItems='center' justifyContent='center'>
            <Text backgroundColor={'green'}> Connect Spotify </Text>
            <Text>{props.userInformation}</Text>
        </Box>
    )
}

module.exports = MainView;

