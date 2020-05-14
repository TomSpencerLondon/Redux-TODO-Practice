// reducers are pure functions that take
// the previous state and an action and
// return the new state that the action has
// brought about

import {ADD_TODO, SET_VISIBILITY_FILTER, VisibilityFilters} from './actions';

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter,
      })
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ],
      })
    default:
      return state
  }
}

