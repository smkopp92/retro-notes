import React        from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
import { Grid, Navbar, Nav, NavItem } from 'react-bootstrap';
import { connect }    from 'react-redux';
import styled       from 'styled-components';

import RetrosContainer from './RetrosContainer';
import EmotionsContainer from './EmotionsContainer';

import { getUser } from '../actions/getUser';

const Wrapper = styled.div`

`;

class NavbarContainer extends React.Component {
  componentDidMount(){
    this.props.getUser()
  }

  render(){
    let renderedHtml
    if(this.props.currentUser === null){
      renderedHtml = <a href="http://localhost:3002/sign_in"><h1>Sign In Using LaunchPass!</h1></a>
    }else{
      renderedHtml = (
        <Wrapper>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/retros">Retro Notes</Link>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <Navbar.Header>
                <Navbar.Brand>
                  {`Signed in as ${this.props.currentUser}`}
                </Navbar.Brand>
              </Navbar.Header>
              <NavItem href="http://localhost:3002/sign_out">Sign out</NavItem>
            </Nav>
          </Navbar>
          <Grid>
            <Route exact path="/retros" component={RetrosContainer}/>
            <Route path="/retros/:retro/notes" component={EmotionsContainer}/>
          </Grid>
        </Wrapper>
      )
    }

    return (
      <div>
        {renderedHtml}
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    currentUser: state.currentUser.name
  }
}

let mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(getUser())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavbarContainer);
