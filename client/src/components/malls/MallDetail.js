import React, { Component } from 'react'
import { Segment, Header, Button } from 'semantic-ui-react'
import { fetchMall } from '../../actions'
import AssetList from '../assets/AssetList'
import { connect } from 'react-redux'

class MallDetail extends Component {
                
    componentDidMount() {
        const { id } = this.props.match.params
        if (id) {
            this.props.fetchMall(id)
        }
    }

    render() {
        const { assets } = this.props.mall
        return (
            <div>
                <Segment clearing>
                    <Header as='h2' content={this.props.mall.name} subheader={this.props.mall.address} floated="left" />
                    <Header floated="right">
                        <Button as="a" href={`/malls/${this.props.match.params.id}/assets/new/form`} primary content="Add Asset" icon="add" />
                    </Header>
                </Segment>
                
                <AssetList assets={assets} />     
            </div>
        )
    }
}

function mapStateToProps({ malls }) {
    return { mall: malls.mall }
}

export default connect(mapStateToProps, { fetchMall })(MallDetail)