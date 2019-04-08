import { Container } from 'semantic-ui-react'
import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

import Header from './Header'
import Landing from './Landing'
import MallDashboard from './malls/MallDashboard'
import AssetDashboard from './assets/AssetDashboard'

import AssetForm from './assets/AssetForm'
import MallForm from './malls/MallForm'

import MallDetail from './malls/MallDetail'

class App extends Component {
	componentDidMount() {
		this.props.fetchUser()
	}

	render() {
		return (
			<div>
				<BrowserRouter >
					<Container>
						<Header />
						<Route exact path="/" component={Landing} />
						<Route exact path="/malls" component={MallDashboard} />
						<Route exact path="/malls/new/form" component={MallForm} />
						<Route exact path="/malls/:id" component={MallDetail} />
						<Route exact path="/malls/edit/:id" component={MallForm} />
						<Route exact path="/assets" component={AssetDashboard} />
						<Route exact path="/malls/:mall_id/assets/new/form" component={AssetForm} />
					</Container>
				</BrowserRouter>
			</div>
		)
	}
}

function mapStateToProps(state) {
	console.log('state', state)
	return state
}


export default connect(mapStateToProps, actions)(App)
