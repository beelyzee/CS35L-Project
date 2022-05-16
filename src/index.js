import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThreeList from './List';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
	<App />
	<ThreeList username={"example-user"} index={0} />
	<ThreeList username={"example-user"} index={1} />
	<ThreeList username={"example-user"} index={2} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
