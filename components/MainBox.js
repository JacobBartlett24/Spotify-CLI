// MainBox.js
const React = require('react');
const { useState, useEffect } = React;
const { Box, Newline, useInput, useApp, useFocus, Text, useFocusManager } = require('ink');
const TextInput = require('ink-text-input').default;
const API = require('../SpotifyAPI/API');
const Gradient = require('ink-gradient');
const BigText = require('ink-big-text');
const importJsx = require('import-jsx');
const { default: FocusContext } = require('ink/build/components/FocusContext');

const PlaylistPage = importJsx('./PlaylistPage');
const PlaylistInfo = importJsx('./PlaylistInfo');
const MusicPlayer = importJsx('./MusicPlayer');
const Unknown = importJsx('./Unknown');

const MainBox = (props) => {
  const [playlistId, setPlaylistId] = useState('')
  const {focus} = useFocusManager();

  useInput((input, key) => {
    if(key.rightArrow){
      focus("1")
    }else if(key.leftArrow){
      focus("2")
    }else if(key.upArrow){
      focus("3")
    console.log(input)
    }else if(key.downArrow){
      focus("4")
    }
    
	});

  const populatePlaylistInfo = (playlistId) =>{
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
          <InnerBox id="1" boxWidth={"100%"} boxHeight={"70%"} boxComponent={<PlaylistPage populate={populatePlaylistInfo}/>}/>
          <InnerBox id="2" boxWidth={"100%"} boxHeight={"30%"} boxComponent={<MusicPlayer />}/>
        </Box>
        <Box height={"100%"} width={"85%"} flexDirection="column">
          <InnerBox id="3" boxWidth={"100%"} boxHeight={"70%"} boxComponent={<PlaylistInfo playlistId={playlistId} userInformation={props.userInformation}/>}/>
          <InnerBox id="4" boxWidth={"100%"} boxHeight={"30%"} boxComponent={<Unknown />}/>
        </Box>
      </Box>
    </Box>
  )
}

const InnerBox = (props) =>{
  const {isFocused} = useFocus(props.id)

  return(
    <Box width={props.boxWidth} height={props.boxHeight} borderStyle='single' borderColor={'green'}>
      {props.boxComponent} {isFocused ? 'black' : 'green'}
    </Box>
  )
}

module.exports = MainBox;