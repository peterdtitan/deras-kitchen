import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

import store from './redux/store';
import { setUser } from './redux/user/userSlice';
import App from './App';

const storedUser = localStorage.getItem('user');
if (storedUser) {
  const parsedUser = JSON.parse(storedUser);
  store.dispatch(setUser(parsedUser));
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);