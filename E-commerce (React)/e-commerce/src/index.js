import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from "./features/counter/counterSlice"
import {store} from "./app/store"

// const store = configureStore({
//   reducer: {
//     counter: counterReducer,  // Your reducer goes here
//   },
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Provider store={store}>
    <App />

</Provider>
  </React.StrictMode>
);

