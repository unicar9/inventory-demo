import React, { Component } from 'react'
import { Field, reduxForm, propTypes } from 'redux-form'
import TextInput from '../forms/TextInput'
import ToggleInput from '../forms/ToggleInput'
import { addAsset } from '../../actions'
import { Button, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class AssetForm extends Component {
    constructor (props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = { redirect: false }
    }

    componentDidMount() {
        const { mall_id } = this.props.match.params
        this.props.initialize({ mall: mall_id, status: true })
    }

    onSubmit(asset) {
        this.props.addAsset(asset)
            .then(_ => this.setState({ redirect: true }))
            .catch(_ => {})
    }

    render () {
        const { mall_id } = this.props.match.params
        return (
            this.state.redirect ? 
            <Redirect to={`/malls/${mall_id}`} /> : 
            <div>
                <Header as="h2" content="Add New Asset" />
                
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form'>
                    <Field name="mall" type="hidden" component={TextInput} />
                    <Field name="name" type="text" component={TextInput} label="Name" required />
                    <Field name="dimension" type="text" component={TextInput} label="Dimension" />
                    <Field name="location" type="text" component={TextInput} label="Location" />
                    <Field name="status" type="checkbox" component={ToggleInput} label="Status" />

                    <Button primary type="submit" disabled={this.props.pristine} content="Submit" />
                </form>
            </div>
        )
    }
}

AssetForm.propTypes = {
    ...propTypes
}

const validate = values => {
    const errors = {}
    if (!values.name) errors.name = 'Required'
    return errors
}

function mapStateToProps({ assets }) {
    return { assets: assets.assets }
}

let AssetFormView = reduxForm({
    validate,
    form: 'assetForm',
    destroyOnUnmount: false
})(AssetForm)

export default connect(mapStateToProps, { addAsset })(AssetFormView)