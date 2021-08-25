import React from 'react';
import { usePromiseTracker } from "react-promise-tracker";
import ReactDOM from 'react-dom';
import App from './App';
import Loader from 'react-loader-spinner';

const LoadingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker();
    return (
      promiseInProgress && 
      <div
        style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "200px 20px 0 0"
        }}
      >
            <Loader type="Puff" color="rgba(2, 183, 228, 0.993)" timeout="5000"/>
            </div>
    );  
  }

ReactDOM.render(
  <React.StrictMode>
    <App />
    <LoadingIndicator/>
  </React.StrictMode>,
  document.getElementById('root')
);