import React from 'react';
import ReactDOM from 'react-dom';
import CONST from '../Consts/Constants';
import PokemonInfo from './PokemonInfo';
import axios from 'axios';

class Form extends React.Component{

	constructor(props) {
	    super(props);
	    this.state = {
	    	name: '',
	    	info: ''
	    };
	    this.handleChange = this.handleChange.bind(this);
	    this.search = this.search.bind(this);
	}

	handleChange(event) {
    	this.setState({
    		name: event.target.value
    	});
	}

	search(e) {
		if (e.keyCode == 13 || e.type == "click") {
			let name = this.state.name.toLowerCase();
			let link = CONST.link + 'pokemon/' + name + "/";
			let that = this;
			axios.get(link).then((data) => {
				console.log(data);
				that.setState({
					info: data.data,
				});
			});
		};
	}

	render() {
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
	
};

module.exports = Form;