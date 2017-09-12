import React from 'react';
import styled from 'styled-components';

import Retro from './Retro';

const Wrapper = styled.ul`
  list-style: none;
`;

const RetroList = (props) => {
  let retros = props.retros.map(retro => {
    return(
      <Retro key={retro.id} id={retro.id} name={retro.name} />
    )
  })
  return(
    <Wrapper>
      <div>
        {retros}
      </div>
    </Wrapper>
  )
}

export default RetroList;
