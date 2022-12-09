// MainBox.js
const React = require('react');
const { useState, useEffect } = React;
const { Box, Newline, useInput, useApp, useFocus, Text } = require('ink');
const TextInput = require('ink-text-input').default;
const API = require('../SpotifyAPI/API');
const Gradient = require('ink-gradient');
const BigText = require('ink-big-text');
const importJsx = require('import-jsx');
const PlaylistPage = importJsx('./PlaylistPage');
const MainView = importJsx('./MainView');
const MusicPlayer = importJsx('./MusicPlayer');
const Unknown = importJsx('./Unknown');

const MainBox = (props) => {
  const {exit} = useApp();

  useInput(async (input, key) => {
	  if (input === 'q') {
		  exit()
    }
	});

  return (
    
    <Box borderColor={'green'} borderStyle='single' height={58} flexDirection="column">
      <Gradient name="summer">
        <BigText
          text={props.title} 
          align='center' 
          font='tiny'
        />
      </Gradient>
      <Box height={"100%"} padding={1} flexDirection='row' justifyContent='center' alignItems='center'>
        <Box height={"100%"} width={"15%"} flexDirection="column">
          <Box borderStyle='single' borderColor={'green'} height={"70%"} width={"100%"}>
            <PlaylistPage />
          </Box>
          <Box borderStyle='single' borderColor={'green'} height={"30%"} width={"100%"}>
            <MusicPlayer />
          </Box>
        </Box>
        <Box height={"100%"} width={"85%"} flexDirection="column">
          <Box borderStyle='single' borderColor={'green'} height={"70%"} width={"100%"}>
            <MainView userInformation={props.userInformation}/>
          </Box>
          <Box borderStyle='single' borderColor={'green'} height={"30%"} width={"100%"}>
            <Unknown />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

module.exports = MainBox;