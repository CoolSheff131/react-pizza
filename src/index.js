import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';

import './scss/app.scss';

import App from './App';

function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'incremented':
      return { value: state.value + 1 };
    case 'decremented':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const store = createStore(counterReducer);

store.subscribe(() => console.log('aaa', store.getState()));

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: 'incremented' });
// {value: 1}
store.dispatch({ type: 'incremented' });
// {value: 2}
store.dispatch({ type: 'decremented' });

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
