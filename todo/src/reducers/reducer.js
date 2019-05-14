import { ADD_TODO, TOGGLE_COMPLETE } from '../actions';

const initialState = {
  todos: [
    { value: 'Meal prep', completed: false, id: 1234 },
    { value: 'But groceries', completed: false, id: 1235 }
  ]
};

function reducer(state = initialState, action) {
  switch (action.type) {
      case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { value: action.payload, completed: false }
        ]
      };
    // return state.members.push({ name: action.payload, dragonStatus: false });
    case TOGGLE_COMPLETE:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed
            };
          }
          return todo;
        })
      };
    default:
      return state;
  }
}

export default reducer;
