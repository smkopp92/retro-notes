import React from 'react'
import { Field, reduxForm } from 'redux-form'
import styled from 'styled-components';

import RetroField from './RetroField.js';

const Form = styled.form`

`;

let validate = (formFields) => {
  const errors = {};

  if(!formFields.retro) {
    errors['retro'] = "Please enter a retro";
  }
  return errors;
}

let RetroForm = props => {
  const { handleSubmit } = props

  return (
    <Form onSubmit={ handleSubmit }>
      <Field
        name="name"
        component={RetroField}
        type="text"
        placeholder="New Retro"
      />
      <button type="submit">Add Retro</button>
    </Form>
  )
}

RetroForm = reduxForm({
  form: 'retro',
  validate
})(RetroForm)

export default RetroForm;
