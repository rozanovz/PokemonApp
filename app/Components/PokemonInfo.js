import React from 'react';
import ReactDOM from 'react-dom';

class PokemonInfo extends React.Component{

	render() {
		let b = [];
		if(this.props.info){
			let a = this.props.info.sprites;
			for (let i in a) {
				if (a[i]) b.push(<img src={a[i]} alt="" />)
			}
		}
		return !this.props.info ? 
			null: 
				(<div>
					{b}
				</div>);
	}
};

module.exports = PokemonInfo;