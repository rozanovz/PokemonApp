import React from 'react';
import ReactDOM from 'react-dom';

class Heading extends React.Component{

	render() {
		return (
			<h1>{this.props.text}</h1>
		);
	}
	
};

module.exports = Heading;