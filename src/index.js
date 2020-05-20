import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CaptainContext from "./CaptainContext"

ReactDOM.render(
  <React.StrictMode >
    <CaptainContext.Provider value={{
      captainName: "",
      setCaptainName: function(name) {
        this.captainName = name
      }
    }}>
      <App />
    </CaptainContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
