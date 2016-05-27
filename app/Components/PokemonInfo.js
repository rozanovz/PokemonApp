var React = require('react');
var ReactDOM = require('react-dom');

var PokemonInfo = React.createClass({

	render: function () {
		if(this.props.info){
			var a = this.props.info.sprites;
			var b = [];
			for (var i in a) {
				if (a[i]) b.push(<img src={a[i]} alt="" />)
			}
		}
		return !this.props.info ? 
			null: 
				(<div>
					{b}
				</div>);
	}
});

module.exports = PokemonInfo;