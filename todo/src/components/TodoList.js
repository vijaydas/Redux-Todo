import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleComplete } from '../actions';
import './TodoList.css';

class TodoList extends React.Component {
  state = {
    newTodo: ''
  };

  handleChanges = e => {
    this.setState({ newTodo: e.target.value });
  };

  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: '' });
  };

  toggleComplete = id => {
    this.props.toggleComplete(id);
  };

  render() {
    return (
      <React.Fragment>
        <div className="todo-list">

        {this.props.todos &&
            this.props.todos.map((todo) => (
              <h4 onClick={() => this.toggleComplete(todo.id)} key={todo.id}>
                {todo.value}
                {todo.completed && <i class="fas fa-check-circle"></i>}
              </h4>
            ))}

        </div>

        <input
          type="text"
          value={this.state.newTodo}
          onChange={this.handleChanges}
          placeholder="Add new item"
        />
        <button onClick={this.addTodo}>Add Item</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo, toggleComplete }
)(TodoList);
