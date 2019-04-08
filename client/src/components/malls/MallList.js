import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMalls, deleteMall } from '../../actions'
import { Card, Button, Loader } from 'semantic-ui-react'

class MallList extends Component {

    componentDidMount() {
        this.props.fetchMalls()
    }

    renderMalls() {
        const { malls } = this.props
        return (
            <Card.Group itemsPerRow={3}>
                {!malls.length ? <Loader active inline='centered' /> : malls.map(mall => {
                    return (
                            <Card key={mall._id} link>
                                <Card.Content href={`/malls/${mall._id}`}>
                                    <Card.Header>{mall.name}</Card.Header>
                                    <Card.Meta>{new Date(mall.createdAt).toDateString() || 'no'}</Card.Meta>
                                    <Card.Description>{mall.address}</Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <div className='ui two buttons'>
                                        <Button basic color='green' content="Edit" href={`/malls/edit/${mall._id}`} />
                                        <Button basic color='red' content="Delete" onClick={(e) => this.props.deleteMall(mall._id)} />
                                    </div>
                                </Card.Content>
                            </Card>
                        )
                    })
                } 
            </Card.Group>
        )
    }

    render() {
        return (
            <div>
                {this.renderMalls()}
            </div>
        )
    }
}

function mapStateToProps({ malls }) {
    return { malls: malls.malls }
}

export default connect(mapStateToProps, { fetchMalls, deleteMall })(MallList)