import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerMiddleware } from "react-router-redux";
import thunk from 'redux-thunk';
import reducers from './src/reducers';
const App = require('./App').default;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  window.__INITIAL_STATE__,
  composeEnhancers(
	  applyMiddleware(thunk)
  )
);

ReactDOM.render((
	<Provider store={store}>
	<BrowserRouter>
		<App />
	</BrowserRouter>
	</Provider>
), document.getElementById('root'));