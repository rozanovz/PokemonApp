var React = require('react');
var ReactDOM = require('react-dom');

var Heading = React.createClass({

	render: function () {
		return (
			<h1>{this.props.text}</h1>
		);
	}
	
});

module.exports = Heading;