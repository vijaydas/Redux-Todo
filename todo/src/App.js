import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/reducer';
import TodoList from './components/TodoList'



const store = createStore(
  rootReducer,
  );

function App() {
  return (
    <div className="App">
    <TodoList />
    </div>
  );
}

export default App;

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

