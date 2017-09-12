import React        from 'react';
import {
  Route,
  NavLink
} from 'react-router-dom';
import { connect }    from 'react-redux';

import { getNotes } from '../actions/getNotes';
import { postNotesToSlack } from '../actions/postNotesToSlack';
import NotesContainer from './NotesContainer';

class EmotionsContainer extends React.Component {
  componentDidMount(){
    this.props.getNotes(this.props.match.params.retro);
  }

  render(){
    let postNotesToSlack = () => {
      this.props.postNotesToSlack(this.props.match.params.retro)
    }
    return (
      <div>
        <h3>{this.props.currentRetro}</h3>
        <nav>
          <li><NavLink to={`/retros/${this.props.match.params.retro}/notes/happy`} activeClassName="active">Happy</NavLink></li>
          <li><NavLink to={`/retros/${this.props.match.params.retro}/notes/meh`} activeClassName="active">Meh</NavLink></li>
          <li><NavLink to={`/retros/${this.props.match.params.retro}/notes/sad`} activeClassName="active">Sad</NavLink></li>
        </nav>
        <Route path="/retros/:retro/notes/:emotion" component={NotesContainer}/>
        <button onClick={postNotesToSlack}>Post to Slack!</button>
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    currentRetro: state.currentRetro.name
  }
}

let mapDispatchToProps = dispatch => {
  return {
    getNotes: (retro) => dispatch(getNotes(retro)),
    postNotesToSlack: (retro) => dispatch(postNotesToSlack(retro))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmotionsContainer);
