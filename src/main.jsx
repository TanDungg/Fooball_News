import './assets/styles.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ConfigProvider } from 'antd'; 
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter basename={'/'}>
      <ConfigProvider>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </Provider>
);
