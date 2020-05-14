// reducers are pure functions that take
// the previous state and an action and
// return the new state that the action has
// brought about

import {VisibilityFilters} from "./actions";

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

function todoApp(state = initialState, action) {
  return state;
}