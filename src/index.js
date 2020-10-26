import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import App from './App64';
import './index64.css';

ReactDOM.render(
  <App />, 
  document.getElementById('root')
  // <React.StrictMode>
  //   <div>
  //     <CardList robots={robots} />
  //   </div>
  // </React.StrictMode>,
  // document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();