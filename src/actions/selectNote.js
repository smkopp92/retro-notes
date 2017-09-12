export const SELECT_NOTE = "SELECT_NOTE";
export const DESELECT_NOTE = "DESELECT_NOTE";

let selectNoteAction = id => {
  return {
    type: SELECT_NOTE,
    selectedNote: id
  };
};

let deselectNoteAction = () => {
  return {
    type: DESELECT_NOTE,
  };
};

let selectNote = (selectedNote) => dispatch => {
  dispatch(deselectNoteAction())
  Promise.resolve()
  .then(() => dispatch(selectNoteAction(selectedNote)))
};

let deselectNote = () => dispatch => {
  dispatch(deselectNoteAction())
};

export { selectNote, deselectNote };
