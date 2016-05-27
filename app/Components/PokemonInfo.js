var React = require('react');
var ReactDOM = require('react-dom');

var PokemonInfo = React.createClass({

	render: function () {
		return (
			this.props.info ? (<div>
				<pre>
					{this.props.info}
				</pre>
			</div>) : null
		);
	}
});

module.exports = PokemonInfo;