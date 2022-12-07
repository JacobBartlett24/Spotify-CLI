const React = require('react');
const { useState, useEffect } = React;
const { useApp, useInput, Text } = require("ink");
const { render } = require('ink-testing-library');
const API = require('../SpotifyAPI/API')
const fs = require('fs')
const data = require('../SpotifyAPI/data.json');
const importJsx = require('import-jsx');
const MainBox = importJsx('./MainBox')

const APIui = () =>{
  
  const [result, setResult] = useState('')
  const {exit} = useApp();

  useEffect(() =>{
    render(<MainBox title='Spotify'/>)
  },[result])

  fs.watch('./SpotifyAPI/data.json', () => {
    setResult(fs.readFileSync('./SpotifyAPI/data.json').toString());
  })

  useInput(async (input, key) => {
	  if (input === 'q') {
		  exit()
    }else if(input === 'a'){
      API()
    }
	});

  return(
    <>
      <Text>Hit "a" to connect to UI</Text>
    </>
  )
  
}

module.exports = APIui;