import React, { Component } from 'react'
import AssetList from './AssetList'
import { connect } from 'react-redux'
import { fetchAssets } from '../../actions'
import { Segment, Header } from 'semantic-ui-react'

class AssetDashboard extends Component {
	componentDidMount() {
        this.props.fetchAssets()
    }

	render() {
		return (
			<div>
				<Segment clearing>
					<Header as='h2' content="List of Assets" floated="left" />
				</Segment>

				<AssetList assets={this.props.assets} />
			</div>
		)
	}
}


const mapStateToProps = ({ assets }) => {
    return { assets }
}

export default connect(mapStateToProps, { fetchAssets })(AssetDashboard)