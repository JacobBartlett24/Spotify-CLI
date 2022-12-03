const React = require('react');
const Gradient = require('ink-gradient');
const BigText = require('ink-big-text');
const importJsx = require('import-jsx');
const MainBox = importJsx('./components/MainBox')

const App = () => (
	<>
		<MainBox title="Spotify" />
	</>
);

module.exports = App;