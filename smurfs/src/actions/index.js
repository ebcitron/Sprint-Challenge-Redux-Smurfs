import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAIL = "ADD_SMURF_FAIL";
export const GET_SMURFS_START = 'GET_SMURFS_START';
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS';
export const GET_SMURFS_FAIL = 'GET_SMURFS_FAIL';



/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/


export const getSmurfs = () => dispatch =>{
  dispatch({type: GET_SMURFS_START });
axios
  .get('http://localhost:3333/smurfs')
  .then(response => {
    console.log(response.data);
    dispatch ({type: GET_SMURFS_SUCCESS, payload: response.data})
  })
  .catch(err => {
    console.log(err);
    dispatch({type: GET_SMURFS_FAIL, payload: err})
  })
};

export const addSmurf = newSmurf => dispatch => {
  dispatch({type: ADD_SMURF_SUCCESS});
  axios
  .post("http://localhost:3333/smurfs", newSmurf)
  .then(response => {
    dispatch({type: ADD_SMURF_SUCCESS, payload: response.data});
  })
  .catch(err => {
    dispatch({type: ADD_SMURF_FAIL, payload: err});
  });
}
