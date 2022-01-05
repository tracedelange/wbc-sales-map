import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import rootReducer from './reducers'
import { ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material/styles';
import { muiTheme } from './muiTheme'

require('default-passive-events');

const store = createStore(rootReducer)
const theme = createTheme(muiTheme)

ReactDOM.render(
  <Provider store={store}>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
