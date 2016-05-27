var React = require('react');
var ReactDOM = require('react-dom');
var CONST = require('../Consts/Constants');
var PokemonInfo = require('./PokemonInfo');

var Form = React.createClass({

	getInitialState: function() {
	    return {
	    	name: '',
	    	info: ''
	    };
	},

	handleChange: function(event) {
    	this.setState({
    		name: event.target.value
    	});
	},

	search: function () {
		var link = CONST.link + 'pokemon/' + this.state.name
		fetch(link).then(function (data) {
			this.setState({info: data.status});
		}.bind(this));
	},

	render: function () {
		return (
			<div className="form-group">
			  <input 
				  className="form-control" 
				  type="text" 
				  placeholder="Enter Pokemon Name" 
				  value={this.state.name} 
				  onChange={this.handleChange}
			  />
			  <button className="btn btn-primary" onClick={this.search}>Search</button>
			  <div className="info">
			  	<PokemonInfo info={this.state.info}></PokemonInfo>
			  </div>
			</div>
		);
	}
	
});

module.exports = Form;