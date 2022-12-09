// MainBox.js
const React = require('react');
const { useState, useEffect } = React;
const { Box, Newline, useInput, useApp, useFocus, Text } = require('ink');
const TextInput = require('ink-text-input').default;
const API = require('../SpotifyAPI/API');
const Gradient = require('ink-gradient');
const BigText = require('ink-big-text');
const importJsx = require('import-jsx');
const { default: FocusContext } = require('ink/build/components/FocusContext');
const PlaylistPage = importJsx('./PlaylistPage');
const MainView = importJsx('./MainView');
const MusicPlayer = importJsx('./MusicPlayer');
const Unknown = importJsx('./Unknown');

const MainBox = (props) => {
  const {exit} = useApp();
  const [playlistId, setPlaylistId] = useState('')

  useInput((input, key) => {
	  if (input === 'q') {
		  exit()
    }
	});

  const populateMainView = (playlistId) =>{
    setPlaylistId(playlistId)
  }

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
          <InnerBox boxWidth={"100%"} boxHeight={"70%"} boxComponent={<PlaylistPage populate={populateMainView}/>}/>
          <InnerBox boxWidth={"100%"} boxHeight={"30%"} boxComponent={<MusicPlayer />}/>
        </Box>
        <Box height={"100%"} width={"85%"} flexDirection="column">
          <InnerBox boxWidth={"100%"} boxHeight={"70%"} boxComponent={<MainView playlistId={playlistId} userInformation={props.userInformation}/>}/>
          <InnerBox boxWidth={"100%"} boxHeight={"30%"} boxComponent={<Unknown />}/>
        </Box>
      </Box>
    </Box>
  )
}

const InnerBox = (props) =>{

  return(
    <Box width={props.boxWidth} height={props.boxHeight} borderStyle='single' borderColor={'green'}>
      {props.boxComponent}
    </Box>
  )
}

module.exports = MainBox;