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
const MainView = importJsx('./MainView');
const MusicPlayer = importJsx('./MusicPlayer');
const Unknown = importJsx('./Unknown');

const MainBox = (props) => {
  const {exit} = useApp();
  const [playlistId, setPlaylistId] = useState('')
  const {focus} = useFocusManager();

  useInput((input, key) => {
    if(input === key.rightArrow){
      focus("1")
      console.err('here')
    }else if(input === key.leftArrow){
      focus("2")
    }else if(input === key.upArrow){
      focus("3")
    }else if(input === key.downArrow){
      focus("4")
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
          <InnerBox id="1" boxWidth={"100%"} boxHeight={"70%"} boxComponent={<PlaylistPage populate={populateMainView}/>}/>
          <InnerBox id="2" boxWidth={"100%"} boxHeight={"30%"} boxComponent={<MusicPlayer />}/>
        </Box>
        <Box height={"100%"} width={"85%"} flexDirection="column">
          <InnerBox id="3" boxWidth={"100%"} boxHeight={"70%"} boxComponent={<MainView playlistId={playlistId} userInformation={props.userInformation}/>}/>
          <InnerBox id="4" boxWidth={"100%"} boxHeight={"30%"} boxComponent={<Unknown />}/>
        </Box>
      </Box>
    </Box>
  )
}

const InnerBox = (props) =>{
  const {isFocused} = useFocus(props.id)

  return(
    <Box width={props.boxWidth} height={props.boxHeight} borderStyle='single' borderColor={isFocused ? 'black' : 'green'}>
      {props.boxComponent}
    </Box>
  )
}

module.exports = MainBox;