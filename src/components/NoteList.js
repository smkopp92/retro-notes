import React from 'react';
import styled from 'styled-components';
import { connect }  from 'react-redux';

import Note from './Note';
import EditNoteForm from './EditNoteForm';
import { selectNote, deselectNote } from '../actions/selectNote';
import { editNote } from '../actions/editNote';

import onClickOutside from 'react-onclickoutside';


const Wrapper = styled.ul`
  list-style: none;
`;

class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClickOutside = event => {
    if(this.props.selectedNote !== null){
      this.props.deselectNote();
    }
  }

  handleSubmit(newNote){
    this.props.editNote(newNote);
  }

  render(){
    let notes = this.props.notes.map(note => {
      if(note.id === this.props.selectedNote){
        return(
          <EditNoteForm key={note.id} initialValues={note} onSubmit={this.handleSubmit}/>
        )
      }else{
        return(
          <Note key={note.id} id={note.id} text={note.text} handleClick={this.props.selectNote} />
        )
      }
    })
    return(
      <Wrapper>
        {notes}
      </Wrapper>
    )
  }
}

let mapStateToProps = state => {
  return {
    selectedNote: state.selectedNote.id
  }
}

let mapDispatchToProps = dispatch => {
  return {
    selectNote: (selectedNote) => dispatch(selectNote(selectedNote)),
    deselectNote: () => dispatch(deselectNote()),
    editNote: (note) => dispatch(editNote(note))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(onClickOutside(NoteList));
