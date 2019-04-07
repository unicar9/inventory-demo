import React, { Component } from 'react'
import { Input, Button, Select } from 'semantic-ui-react'
import { searchAssets } from '../../actions/index'
import { connect } from 'react-redux'

class AssetSearchForm extends Component {
    constructor(props) {
        super(props)

        this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

        this.state = { 
            search: '',
            option: 'name'
        }
    }

    handleChange(e, { name, value }) {
        this.setState({ [name]: value })
    }

    handleSearchSubmit(e) {
        e.preventDefault()
        const { search, option } = this.state
        this.props.searchAssets({ q: search, cat: option })

        this.setState({ search: '', option: 'name' })
    }

    render() {
        const options = [
            { key: 'name', text: 'By Name', value: 'name' },
            { key: 'mall', text: 'By Mall Name', value: 'mall' },
            { key: 'location', text: 'By Location', value: 'location' },
        ]
        const { search, option } = this.state
        return (
            <div>
                <Input type='text' placeholder='Search...' action name='search' value={search} onChange={this.handleChange}>
                    <input />
                    <Select compact options={options} name='option' value={option} onChange={this.handleChange} />
                    <Button type='submit' onClick={this.handleSearchSubmit}>Search</Button>
                </Input>
            </div>
        )
    }
}

function mapStateToProps({ assets }){
    return { assets: assets }
}

export default connect(mapStateToProps, { searchAssets })(AssetSearchForm)