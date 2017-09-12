import React        from 'react';
import styled       from 'styled-components';

import DeleteNoteButton from './DeleteNoteButton';

const Wrapper = styled.li`
  @import url('https://fonts.googleapis.com/css?family=Paytone+One');

  font-family: 'Paytone One', sans-serif;
  font-size: '16px';
  &:nth-child(even) {
    background-color: LightGrey;
  }
`;

const Note = props => {
  let handleClick = () => {
    props.handleClick(props.id)
  }

  return(
    <Wrapper>
      <div className="block left-scroll" onClick={handleClick}>{props.text} </div>
      <DeleteNoteButton noteId={props.id} />
    </Wrapper>
  )
}

export default Note;
