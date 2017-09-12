import React from 'react'
import { Field, reduxForm } from 'redux-form'
import styled from 'styled-components';

import NoteField from './NoteField.js';

const Form = styled.form`

`;

let validate = (formFields) => {
  const errors = {};

  if(!formFields.note) {
    errors['note'] = "Please enter a note";
  }
  return errors;
}

let NoteForm = props => {
  const { handleSubmit } = props

  return (
    <Form onSubmit={ handleSubmit }>
      <Field
        name="text"
        component={NoteField}
        type="text"
        placeholder="New Note"
      />
      <button type="submit">Add Note</button>
    </Form>
  )
}

NoteForm = reduxForm({
  form: 'note',
  validate
})(NoteForm)

export default NoteForm;
