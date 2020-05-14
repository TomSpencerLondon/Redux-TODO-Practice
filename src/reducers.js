// reducers are pure functions that take
// the previous state and an action and
// return the new state that the action has
// brought about

import {
  ADD_TODO,
  SET_VISIBILITY_FILTER,
  TOGGLE_TODO,
  VisibilityFilters,
} from "./actions";

const { SHOW_ALL } = VisibilityFilters;

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: [],
};

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed,
          });
        }
        return todo;
      });
    default:
      return state;
  }
}

function visibilityFilter(state = SHOW_ALL, action) {}

function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter,
      });
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: todos(state.todos, action),
      });
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: todos(state.todos, action),
      });
    default:
      return state;
  }
}
