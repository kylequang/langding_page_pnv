import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MessengerCustomerChat from 'react-messenger-customer-chat';

ReactDOM.render(
  <React.StrictMode>
    <MessengerCustomerChat
      pageId="102863274757203"
      appId="482561099690238"
    />
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);


