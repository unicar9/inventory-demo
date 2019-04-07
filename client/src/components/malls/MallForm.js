import React, { Component } from 'react'
import { Field, reduxForm, propTypes } from 'redux-form'
import TextInput from '../forms/TextInput'
import { connect } from 'react-redux'
import { addMall, fetchMall, updateMall } from '../../actions'
import { Button, Header } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

class MallForm extends Component {
    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = { redirect: false }
    }

    componentDidMount() {
        const { id } = this.props.match.params
        if (id) {
            this.props.fetchMall(id)
        }
    }

    onSubmit(mall) {
        if (!mall._id) {
            this.props.addMall(mall)
                .then(_ => this.setState( { redirect: true }))
                .catch(_ => {})
        } else {
            this.props.updateMall(mall)
                .then(_ => this.setState( { redirect: true }))
                .catch(_ => {})
        }
    }

    componentWillReceiveProps = (nextProps) => { // Receive Mall data Asynchronously
        const { mall } = nextProps
        
        if(mall._id !== this.props.mall._id) { // Initialize form only once
            this.props.initialize(mall)
        }
    }

    render() {
        return (
            this.state.redirect ? 
                <Redirect to="/malls" /> : 
                <div>
                    <Header as="h2" content={this.props.match.params.id ? "Edit Mall" : "Add New Mall" } />
                    <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form'>
                        <Field name="name" type="text" component={TextInput} label="Name" required />
                        <Field name="address" type="text" component={TextInput} label="Address" required />

                        <Button primary type="submit" disabled={this.props.pristine} content="Submit" />
                        <Button as="a" href="/malls" content="Cancel" />
                    </form>
                </div>      
        )
    }
}

MallForm.propTypes = {
    ...propTypes
}

const validate = values => {
    const errors = {}
    if (!values.name) errors.name = 'Required'
    if (!values.address) errors.address = 'Required'
    return errors
}

function mapStateToProps({ malls }) {
    return { mall: malls.mall }
}

let MallFormView = reduxForm({
    validate,
    form: 'mallForm',
    destroyOnUnmount: false
})(MallForm)

export default connect(mapStateToProps, { addMall, fetchMall, updateMall })(MallFormView)