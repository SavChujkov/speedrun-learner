import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//инициализация хранилища над приложением
import { Provider } from 'react-redux';
//middleware-ы для функций-эшкнов, логов и прочего
import { thunk } from 'redux-thunk';
import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer } from './services';
import { BrowserRouter } from 'react-router';

const enhancer = compose(applyMiddleware(thunk))
const store = createStore(rootReducer, enhancer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
