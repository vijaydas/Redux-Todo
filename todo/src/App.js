import React from "react";
import "./App.css";
// import { connect } from "react-redux";
// import { addTodo, toggleComplete } from "./actions";
// import { Provider } from "react-redux";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
