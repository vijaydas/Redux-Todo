import { ADD_TODO, TOGGLE_COMPLETE } from "../actions";

const initialState = {
  todos: [
    { value: "Meal prep", completed: false, id: 0 },
    { value: "Buy groceries", completed: false, id: 1 }
  ],
  count: 1
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const idCounter = ++state.count;
      const newState = [
        ...state.todos,
        { value: action.payload, completed: false, id: idCounter }
      ];
      return {
        ...state,
        todos: newState,
        count: idCounter
      };

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
