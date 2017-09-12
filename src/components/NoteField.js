import React        from 'react';
import styled       from 'styled-components';

const Input = styled.input`
  width: 100%;
  font-family: 'Paytone One', sans-serif;
  font-size: 16px;
`;

const NoteField = ({ input, label, placeholder, meta: { touched, error }, type, id }) => {
  return (
    <div className="field-row">
      <div className="medium-3 medium-offset-1 columns">
        <label htmlFor={id}>{label}</label>
        {touched && error && <span style={{color: 'red'}}>{error}</span>}
      </div>
      <div className="medium-7 columns end">
        <Input {...input} type={type} id={id} placeholder={placeholder}/>
      </div>
    </div>
  );
}


export default NoteField;
