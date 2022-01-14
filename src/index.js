import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ContextProvider} from './context/Context'
import {BookingContextProvider} from './context/BookingContext'

ReactDOM.render(
  <BookingContextProvider>
    <ContextProvider>
      <App />
    </ContextProvider>
  </BookingContextProvider>,
  document.getElementById('root')
);

