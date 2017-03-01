import ActionTypes from '../actions/actionTypes';

const initial_state = { counter: 0 };
export function applicationReducer(state = initial_state, action) {
  switch (action.type) {
    case ActionTypes.LoadInitialState : {
      return state;
    }
    default:
      return state;
  }
}