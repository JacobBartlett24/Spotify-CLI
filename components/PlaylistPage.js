const React = require('react');
const { useState, useEffect } = React;
const { Box, Text, Newline } = require('ink');
const BigText = require('ink-big-text');
const axios = require('axios');


const PlaylistPage = (props) =>{

    const [playlistData,setPlaylistData] = useState([])

    useEffect(async () => {
        const temp = await axios.get('/me/playlists')

        setPlaylistData(temp.data.items.map(playlist =>
            <Box key={playlist.id}>
                <Text bold>{playlist.name}</Text>
                <Newline />
            </Box>
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

module.exports = PlaylistPage;

