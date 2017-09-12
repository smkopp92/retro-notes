import React        from 'react';
import styled       from 'styled-components';
import {
  Route,
  Link
} from 'react-router-dom';
import { Grid, Navbar } from 'react-bootstrap';

import RetrosContainer from './RetrosContainer';
import EmotionsContainer from './EmotionsContainer';

const Wrapper = styled.div`

`;

class NavbarContainer extends React.Component {
  render(){
    return (
      <Wrapper>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/retros">Retro Notes</Link>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Grid>
          <Route exact path="/retros" component={RetrosContainer}/>
          <Route path="/retros/:retro/notes" component={EmotionsContainer}/>
        </Grid>
      </Wrapper>
    )
  }
}

export default NavbarContainer;
