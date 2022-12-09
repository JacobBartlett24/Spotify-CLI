const React = require('react');
const { useState, useEffect } = React;
const { Box, Text, Newline, useFocus } = require('ink');
const BigText = require('ink-big-text');
const axios = require('axios');
const { useRef } = require('react');

const PlaylistPage = (props) =>{

    const [playlistData,setPlaylistData] = useState([]);
    

    useEffect(async () => {
        const playlists = await axios.get('/me/playlists')

        setPlaylistData(playlists.data.items.map((playlist, i) =>
            
            <Playlist key={playlist.id} playlistId={playlist.id} playlistName={playlist.name} populate={props.populate}/>
        ));
    },[])
    
    return(
        <Box flexDirection='column'>
            <Text>Playlist Page</Text>
            <Newline />
            {playlistData}
        </Box>
    )
}

const Playlist = (props) =>{
    const {isFocused} = useFocus();

    return(
        <Box>
            <Text color={isFocused ? 'green' : 'white'} bold>{isFocused ? props.populate(props.playlistId) : ''}{props.playlistName}</Text>
            <Newline />
        </Box>
    )
}

module.exports = PlaylistPage;

