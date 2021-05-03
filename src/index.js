import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.css';
import App from './scripts/Todo';
import Store from './scripts/redux/store';
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);