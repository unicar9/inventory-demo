import React from 'react'
import { Form, Checkbox, Message } from 'semantic-ui-react'

const ToggleInput = ({ input, label, meta: { touched, error, warning } }) => (
    <Form.Field>
        <label>{label}</label>
        <Checkbox
            defaultChecked
            onChange={(_, data) => {
                input.onChange(data.checked)
            }}
            toggle
        />
        {touched && ((error && <Message size='tiny' negative>{error}</Message>) || (warning && <span>{warning}</span>))}
    </Form.Field>
)

export default ToggleInput
