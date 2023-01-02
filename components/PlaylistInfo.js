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
    const [tracks,setTracks] = useState([])
    const {isFocused} = useFocus()

    useEffect(async () => {
        if(playlist !== '' && props.playlistId != ''){
            const temp = await axios.get(`/playlists/${props.playlistId}/tracks`)
            setTracks(temp.data.items.map((item,i) =>
                <Track id={i} key={i} trackName={item.track.name} />
            ))
        }
    },[playlist])

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
            {tracks}
        </Box>
    )
}

const Track = (props) =>{
    const {isFocused} = useFocus();

    return(
        <Box key={props.id}>
            <Text color={isFocused ? 'green' : 'black'}>{props.trackName}</Text>
            <Newline />
        </Box>
    )
}

module.exports = PlaylistInfo;

