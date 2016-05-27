var React = require('react');
var ReactDOM = require('react-dom');

var Jumbotron = React.createClass({

	render: function () {
		return (
			<div className="jumbotron">
			  {this.props.children}
			</div>
		);
	}
	
});

module.exports = Jumbotron;