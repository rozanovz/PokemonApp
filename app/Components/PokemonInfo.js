var React = require('react');
var ReactDOM = require('react-dom');

var PokemonInfo = React.createClass({

	render: function () {
		return !this.props.info ? 
			null: 
				(<div>
					<img src={this.props.info.sprites.front_default} alt="" width="200px" height="200px"/>
				</div>);
	}
});

module.exports = PokemonInfo;