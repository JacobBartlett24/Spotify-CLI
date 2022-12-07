const React = require('react');
const Gradient = require('ink-gradient');
const BigText = require('ink-big-text');
const importJsx = require('import-jsx');
const APIui = importJsx('./components/APIui')

const App = () => (
	<>
		<APIui />
	</>	
);

module.exports = App;