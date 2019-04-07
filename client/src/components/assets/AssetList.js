import React, { Component } from 'react'
import { Card, Label, Loader, Icon } from 'semantic-ui-react'

class AssetList extends Component {
    
    renderAssets() {
        const assets = this.props.assets

        return (
            <Card.Group itemsPerRow={5}>
                {!assets ? <Loader active inline='centered' /> : assets.reverse().map(asset => {
                    return (
                        <Card key={asset._id} color={asset.status? 'green' : 'red'}>
                            <Card.Content>
                                <Label color={asset.status? 'green' : 'red'} attached="top right">
                                    {asset.status? 'Active' : 'Inactive'}
                                </Label>
                                <Card.Header>{asset.name}</Card.Header>
                                <Card.Meta>{new Date(asset.createdAt).toDateString() || 'No Created Time'}</Card.Meta>
                                <Card.Description><Icon name="map marker alternate" />{asset.location || "No Location Yet"}</Card.Description>
                                <Card.Description>{asset.dimension || "No Dimension Yet"}</Card.Description>
                            </Card.Content>
                        </Card>
                    )
                })}
            </Card.Group>
        )
    }

    render() {
        return (
            <div>
                {this.renderAssets()}
            </div>
        )
    }
}

export default AssetList