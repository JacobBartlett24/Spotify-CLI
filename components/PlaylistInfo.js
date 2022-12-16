const React = require('react');
const { useState, useEffect } = React;
const { Box, Text, Newline, useFocus } = require('ink');
const BigText = require('ink-big-text');
const Gradient = require('ink-gradient')
const axios = require('axios')


// Spotify client required parameters

const PlaylistInfo = (props) =>{

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
        <Box height={"100%"} width={"100%"} borderStyle='single' flexDirection='column' alignItems='center' justifyContent='center' padding={2}>
            <BigText
                height={"20%"}
              text= {playlist ? playlist.data.name : 'Playlist Name'}
              font='tiny'
            />
            <Tracks id={playlist ? props.playlistId : ''}/>

        </Box>
    )
}

const Tracks = (props) =>{
    const [tracks,setTracks] = useState([])
    const {isFocused} = useFocus()

    useEffect(async () => {
        if(props.id !== ''){
            const temp = await axios.get(`/playlists/${props.id}/tracks`)
            setTracks(temp.data.items.map((item,i) =>
                <Box key={i}>
                    <Text color={isFocused ? 'green' : 'white'}>{item.track.name}</Text>
                    <Newline />
                </Box>
            ))
        }
    },[props.id])


    return(
        <Box key={props.id}flexDirection='column' height={"80%"} width={"100%"}>{props.id ? tracks : <Text>no tracks</Text>}</Box>
    )
}

module.exports = PlaylistInfo;

