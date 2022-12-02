// MainBox.js

const React = require('react');
const { useState, useEffect } = React;
const { Box, Text, Newline } = require('ink');
const importJsx = require('import-jsx');
const PlaylistPage = importJsx('./PlaylistPage')
const MainView = importJsx('./MainView')
const MusicPlayer = importJsx('./MusicPlayer')
const Unknown = importJsx('./Unknown')


const MainBox = () => {

  const [data, setData] = useState([]);
  return (
    <Box borderStyle='single' height={50} padding={1} flexDirection='row' justifyContent='center' alignItems='center'>
      <Box height={"100%"} width={"30%"} flexDirection="column">
        <Box borderStyle='single' borderColor={'green'} height={"70%"} width={"100%"}>
          <PlaylistPage />
        </Box>
        <Box borderStyle='single' borderColor={'green'} height={"30%"} width={"100%"}>
          <MusicPlayer />
        </Box>
      </Box>
      <Box height={"100%"} width={"70%"} flexDirection="column">
        <Box borderStyle='single' borderColor={'green'} height={"70%"} width={"100%"}>
          <MainView />
        </Box>
        <Box borderStyle='single' borderColor={'green'} height={"30%"} width={"100%"}>
          <Unknown />
        </Box>
      </Box>
    </Box>
  )
}

module.exports = MainBox;