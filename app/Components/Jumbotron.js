import React from 'react';
import ReactDOM from 'react-dom';

class Jumbotron extends React.Component{

	render() {
		return (
			<div className="jumbotron">
			  {this.props.children}
			</div>
		);
	}
	
};

module.exports = Jumbotron;