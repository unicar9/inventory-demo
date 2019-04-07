import React from 'react'
import MallList from './MallList'
import { Button, Segment, Header } from 'semantic-ui-react'

const MallDashboard = () => {
	return (
		<div>
			<Segment clearing>
				<Header as='h2' content="List of Malls" floated="left" />
				<Header floated="right">
					<Button as="a" href="/malls/new/form" primary content="Add Mall" icon="add" />
				</Header>
			</Segment>
		
			<MallList />
		</div>
	)
}

export default MallDashboard