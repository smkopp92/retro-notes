import React        from 'react';
import styled       from 'styled-components';
import {
  Link
} from 'react-router-dom';

import DeleteRetroButton from './DeleteRetroButton';

const Wrapper = styled.li`
  @import url('https://fonts.googleapis.com/css?family=Paytone+One');

  font-family: 'Paytone One', sans-serif;
  font-size: '16px';
  &:nth-child(even) {
    background-color: LightGrey;
  }
`;

const Retro = props => {
  return(
    <Wrapper>
      <Link to={`/retros/${props.id}/notes`}>{props.name}</Link>
      <DeleteRetroButton retroId={props.id} />
    </Wrapper>
  )
}

export default Retro;
