import React, { Component } from 'react'
import AssetList from './AssetList'
import { connect } from 'react-redux'
import { fetchAssets } from '../../actions'
import { Segment, Header } from 'semantic-ui-react'
import AssetSearchForm from './AssetSearchForm'

class AssetDashboard extends Component {
	componentDidMount() {
        this.props.fetchAssets()
    }

	render() {
		return (
			<div>
				<Segment clearing>
					<Header as='h2' content="List of Assets" floated="left" />
					<AssetSearchForm />
				</Segment>

				<AssetList assets={this.props.assets} />
			</div>
		)
	}
}


const mapStateToProps = ({ assets }) => {
    return { assets: assets.assets }
}

export default connect(mapStateToProps, { fetchAssets })(AssetDashboard)