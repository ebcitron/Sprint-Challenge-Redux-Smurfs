/*
  Be sure to import in all of the action types from `../actions`
*/
import { ADD_SMURF_START } from '../actions';
import { ADD_SMURF_SUCCESS } from '../actions';
import { ADD_SMURF_FAIL } from '../actions';
import { GET_SMURFS_START } from '../actions';
import { GET_SMURFS_SUCCESS } from '../actions';
import { GET_SMURFS_FAIL } from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: falsev
   error: null
 }
*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  error: null
  // updatingSmurf: false,
  // deletingSmurf: false,

}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/


function reducer(state = initialState, action) {
  console.log('reducer', action);
  switch (action.type) {
    case GET_SMURFS_START:
      return {
        ...state,
        fetchingSmurfs: true
      };
    case GET_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload

      };
    case GET_SMURFS_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case ADD_SMURF_START:
      return {
        ...state,
        addingSmurf: true
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload
      };
    case ADD_SMURF_FAIL:
      return {
        ...state,
        error: action.payload
      };


    default:
      return state;
  }
}


export default reducer;