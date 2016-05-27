var React = require('react');
var ReactDOM = require('react-dom');
var Jumbotron = require('./Jumbotron');
var Heading = require('./Heading');
var Form = require('./Form');

var App = React.createClass({
	render: function () {
		return (
			<Jumbotron>
				<Heading text="Pokedex"></Heading>
				<Form></Form>
			</Jumbotron>
		);
	}
});

module.exports = App;