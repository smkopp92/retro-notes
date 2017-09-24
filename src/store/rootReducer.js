import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { ADD_NOTE_REQUEST_SUCCESS} from '../actions/addNote';
import { ADD_RETRO_REQUEST_SUCCESS} from '../actions/addRetro';

import notes from '../reducers/notes';
import retros from '../reducers/retros';
import selectedNote from '../reducers/selectedNote';
import currentRetro from '../reducers/currentRetro';
import currentUser from '../reducers/currentUser';

let rootReducer = combineReducers({
  form: formReducer.plugin({
    note: (state, action) => {
      switch(action.type) {
        case ADD_NOTE_REQUEST_SUCCESS:
          return undefined;
        default:
          return state;
      }
    },
    retro: (state, action) => {
      switch(action.type) {
        case ADD_RETRO_REQUEST_SUCCESS:
          return undefined;
        default:
          return state;
      }
    }
  }),
  notes,
  retros,
  currentRetro,
  selectedNote,
  currentUser,
  routing
});

export default rootReducer;
