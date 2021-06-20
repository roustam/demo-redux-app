import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/HomePage';
import reportWebVitals from './reportWebVitals';
import {createStore} from './createStore'
import { rootReducer } from './redux/rootReducer';

const store  = createStore(rootReducer, 0)
window.store = store
store.dispatch()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
