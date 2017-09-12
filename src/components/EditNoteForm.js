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

let EditNoteForm = props => {
  const { handleSubmit } = props
  return (
    <Form onSubmit={ handleSubmit }>
      <Field
        name="text"
        component={NoteField}
        type="text"
      />
    </Form>
  )
}

EditNoteForm = reduxForm({
  form: 'editNote',
  validate
})(EditNoteForm)

export default EditNoteForm;
