const React = require('react');
const { useApp, useInput } = require("ink");

const UserInput = () =>{

  const {exit} = useApp();
  
  useInput((input, key) => {
		if (input === 'q') {
			exit()
		}
	});

  return(
  <>
  </>
  )

}

module.exports = UserInput;