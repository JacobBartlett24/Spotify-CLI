const React = require('react');
const Gradient = require('ink-gradient');
const BigText = require('ink-big-text');
const importJsx = require('import-jsx');
const MainBox = importJsx('./components/MainBox')
const UserInput = importJsx('./components/UserInput');

const App = () => (
	<>
		<UserInput />
		<MainBox title="Spotify" />
	</>
);

module.exports = App;