import React from 'react';
import Cardlist from '../components/Cardlist.js';
import Searchbox from '../components/Searchbox.js';
import './App.css';
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary.js'

class App extends React.Component {
	constructor(){
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(users=>this.setState({robots:users}));
	}
	OnSearchChange = (event) => {
		this.setState({searchfield:event.target.value})
	}
	render(){
		const {robots, searchfield} = this.state;
		const filteredrobots = robots.filter(robots =>
								robots.name.toLowerCase().includes(searchfield.toLowerCase()))
		return !robots.length ?
			<h1>Loading</h1>:
			(
			<div className="tc">
				<h1 className="f1"> Robo Friends </h1>
				<Searchbox searchChange={this.OnSearchChange}/>
				<Scroll>
					<ErrorBoundary>
	      				<Cardlist robots={filteredrobots}/>
	      			</ErrorBoundary>
	      		</Scroll>
	  		</div>
		);
	}
}

export default App;