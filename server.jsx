import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {Helmet} from "react-helmet";
import Template from './template';
import reducers from './src/reducers';
import  { fetchUsers, getParameterByName, setSearch } from './src/reducers/users';
import App from './App';

const store = createStore(reducers, applyMiddleware(thunk));
export default function serverRenderer({ clientStats, serverStats }) {
	return (req, res, next) => {
	
		if (req.query.q) {
		    console.log(req,res,next);
			store.dispatch(setSearch(req.query.q));
		}
		store.dispatch(fetchUsers())
			.then(() => {
				const context = {};
				const markup = ReactDOMServer.renderToString(
					<Provider store={store}>
					<StaticRouter location={ req.url } context={ context }>
						<App />
					</StaticRouter>
					</Provider>
				);
				const helmet = Helmet.renderStatic();
				const initialState = store.getState();

				res.status(200).send(Template({
					markup,
					helmet,
					initialState 
				}));
			});
	};
}