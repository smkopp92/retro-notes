import React          from 'react';
import { connect }    from 'react-redux';
import styled         from 'styled-components';

import { setEmotion } from '../actions/getNotes';
import { addNote }    from '../actions/addNote';
import NoteList       from '../components/NoteList';
import NoteForm       from '../components/NoteForm';

const Wrapper = styled.div`

`;

class NotesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    this.props.setEmotion(this.props.match.params.emotion)
  }

  handleSubmit(newNote){
    this.props.addNote(Object.assign({}, newNote, {emotion: this.props.emotion}), this.props.match.params.retro);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.match.params.emotion !== this.props.match.params.emotion){
      this.props.setEmotion(nextProps.match.params.emotion)
    }
    if(nextProps.match.params.retro !== this.props.match.params.retro) {
      this.props.getNotes(nextProps.match.params.emotion, nextProps.match.params.retro)
    }
  }

  render(){
    return (
      <Wrapper>
        <NoteList notes={this.props.notes} />
        <NoteForm onSubmit={this.handleSubmit} />
      </Wrapper>
    )
  }
}

let mapStateToProps = state => {
  return {
    notes: state.notes.retrievedNotes.filter((note) => note.emotion === state.notes.emotion),
    emotion: state.notes.emotion
  }
}

let mapDispatchToProps = dispatch => {
  return {
    addNote: (newNote, retro) => dispatch(addNote(newNote, retro)),
    setEmotion: (emotion) => dispatch(setEmotion(emotion))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesContainer);
