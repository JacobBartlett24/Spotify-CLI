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
        <Box height={"100%"} width={"100%"} borderStyle='single' flexDirection='column' alignItems='center' justifyContent='center' padding={2}>
            <BigText
              text= {playlist ? playlist.data.name : 'Playlist Name'}
              font='tiny'
            />
            <Tracks id={playlist ? props.playlistId : ''}/>

        </Box>
    )
}

const Tracks = (props) =>{
    const [tracks,setTracks] = useState([])
    
    useEffect(async () => {
        
        if(props.id !== ''){
            
            const temp = await axios.get(`/playlists/${props.id}/tracks`)
            setTracks(temp.data.items.map((item,i) =>
                <Text key={item.track.name}>{item.track.name}</Text>
            ))
            console.log(tracks)
        }
    },[props.id])

    return(
        <Box height={"30%"} width={"100%"} borderStyle='single'>{props.id ? tracks : <Text>no tracks</Text>}</Box>
    )
}

module.exports = MainView;

