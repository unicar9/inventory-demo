import React from 'react'
import { Form, Message } from 'semantic-ui-react'

const TextInput = ({ input, label, type, required, meta: { touched, error, warning } }) => (
    <Form.Field required={required}>
        <label>{label}</label>
        <input {...input} placeholder={label} type={type} />
        {touched && ((error && <Message size='tiny' negative>{error}</Message>) || (warning && <span>{warning}</span>))}
    </Form.Field>
)

export default TextInput
