const React = require('react');
const { useState, useEffect } = React;
const { Box, Text, Newline } = require('ink');
const BigText = require('ink-big-text');
const Gradient = require('ink-gradient')
const axios = require('axios')


// Spotify client required parameters

const MainView = (props) =>{

    const [data,setData] = useState('')
    const [playlist,setPlaylist] = useState(null)

    useEffect(async () => {
        const temp = await axios.get('/me')
        setData(temp.data.display_name)
    },[])

    useEffect(async () => {
        if(props.playlistId !== ''){
            const playlistInfo = await axios.get(`/playlists/${props.playlistId}`)
            setPlaylist(playlistInfo)
        }
    },[props.playlistId])

    return(
        <Box height={"100%"} width={"100%"} flexDirection='column' alignItems='center' justifyContent='center' padding={2}>
            <Gradient name="summer">
                <BigText
                  text={playlist ? playlist.data.name : ''} 
                  align='center' 
                  font='tiny'
                />
            </Gradient>
        </Box>
    )
}

const Track = () =>{

}

module.exports = MainView;

