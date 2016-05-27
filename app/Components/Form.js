var React = require('react');
var ReactDOM = require('react-dom');
var CONST = require('../Consts/Constants');
var PokemonInfo = require('./PokemonInfo');
var axios = require('axios');

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

	search: function (e) {
		if (e.keyCode == 13 || e.type == "click") {
			var name = this.state.name.toLowerCase();
			var link = CONST.link + 'pokemon/' + name + "/";
			axios.get(link).then(function (data) {
				console.log(data);
				this.setState({
					info: data.data,
				});
			}.bind(this));
		};
	},

	render: function () {
		return (
			<div className="row">
			  <div className="col-xs-6">
			  	<div className="input-group">
			  		<input 
					  className="form-control" 
					  type="text" 
					  placeholder="Enter Pokemon Name" 
					  value={this.state.name} 
					  onChange={this.handleChange}
					  onKeyDown={this.search}
					/>
					<span className="input-group-btn">
				        <button className="btn btn-primary" onClick={this.search} >Search</button>
				    </span>
			  	</div>
			  </div>
			  
			  <div className="info col-xs-6">
			  	<PokemonInfo info={this.state.info}></PokemonInfo>
			  </div>
			</div>
		);
	}
	
});

module.exports = Form;