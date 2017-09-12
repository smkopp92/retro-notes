import React          from 'react';
import { Button }     from 'react-bootstrap';
import { connect }    from 'react-redux';
import { deleteNote } from '../actions/deleteNote';

class DeleteNoteButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.props.deleteNote(this.props.noteId)
  }

  render(){
    return(
      <Button className="block right" onClick={this.handleClick}>X</Button>
    )
  }
}

let mapStateToProps = () => {
  return {};
};

let mapDispatchToProps = dispatch => {
  return {
    deleteNote: (noteId) => dispatch(deleteNote(noteId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteNoteButton);
