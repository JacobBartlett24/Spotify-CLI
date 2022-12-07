const React = require('react');
const { useState, useEffect } = React;
const { Box, Text, Newline } = require('ink');
const BigText = require('ink-big-text');
const axios = require('axios')


// Spotify client required parameters

const MainView = (props) =>{

    const [data,setData] = useState({})

    useEffect(() => {
        setData(axios.get('/me'))
    },[])

    return(
        <Box height={"100%"} width={"100%"} alignItems='center' justifyContent='center'>
            <Text backgroundColor={'green'}> Connect Spotify </Text>
            <Text>{data}</Text>
        </Box>
    )
}

module.exports = MainView;

