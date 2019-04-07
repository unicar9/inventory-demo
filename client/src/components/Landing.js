import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const Landing = () => {
  return (
        <div>
            <div style={{ height: '20vh' }} />
            <Header as='h2' icon textAlign='center'>
                <Icon name='cogs' circular />
                <Header.Content>Welcome to Inventory Management System!</Header.Content>
            </Header>
        </div>
  )
}

export default Landing
