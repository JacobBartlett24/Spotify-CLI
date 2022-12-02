// MainBox.js

const React = require('react');

const { useState, useEffect } = React;

const { Box, Text, Newline } = require('ink');

const MainBox = () => {

  const [data, setData] = useState([]);
  return (
    <Box borderStyle='single' height={50} padding={2} flexDirection='row' justifyContent='center' alignItems='center'>
      <Box height={"100%"} width={"20%"} flexDirection="column">
        <Box borderStyle='single' borderColor={'green'} height={"70%"} width={"100%"}>

        </Box>
        <Box borderStyle='single' borderColor={'green'} height={"30%"} width={"100%"}>

        </Box>
      </Box>
      <Box height={"100%"} width={"80%"} flexDirection="column">
        <Box borderStyle='single' borderColor={'green'} height={"70%"} width={"100%"}>

        </Box>
        <Box borderStyle='single' borderColor={'green'} height={"30%"} width={"100%"}>
          
        </Box>
      </Box>
    </Box>
  )
}

module.exports = MainBox;