import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import  { setSearchField } from '../actions';

const mapStateToProps = state => {
	return {
		searchField: state.searchField
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value))
	}
}

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: []
		}
	}

	async componentDidMount() {
		try {
			const response = await fetch('https://jsonplaceholder.typicode.com/users');
			const results = await response.json();
			this.setState({robots: results});
		} catch(err) {
			alert("Something went wrong, please try again \n" + err)
		}
	}

	render(){
		const { robots } = this.state;
		const { searchField, onSearchChange } = this.props;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});
		return robots.length === 0 ? <h1 className="f2">Loading</h1> : (
			<div className="tc">
				<h1 className="f2">RoboFriends</h1>
				<SearchBox searchChange={onSearchChange}/>
				<Scroll>
					<ErrorBoundry>
						<CardList robots={filteredRobots}/>
					</ErrorBoundry>
				</Scroll>
			</div>
		);
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

