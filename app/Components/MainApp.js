import React from 'react';
import ReactDOM from 'react-dom';
import Jumbotron from './Jumbotron';
import Heading from './Heading';
import Form from './Form';

class App extends React.Component{
	render() {
		return (
			<Jumbotron>
				<Heading text="Pokedex"></Heading>
				<Form></Form>
			</Jumbotron>
		);
	}
};

module.exports = App;