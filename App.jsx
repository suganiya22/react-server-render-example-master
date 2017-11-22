import React, { Component } from 'react';
import Helmet from "react-helmet";
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Main from './src/components/main';
import HomePage from './src/components/HomePage';
import About from './src/components/About';
import Contact from './src/components/Contact';
import NotFound from './src/components/NotFound';
import List from './src/components/List';
import ListToUsers from './src/components/ListToUsers';
const App = () => {
  return (
			<div>
				<Helmet
					htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
					titleTemplate="%s | React App"
					titleAttributes={{itemprop: "name", lang: "en"}}
					meta={[
						{name: "description", content: "Server side rendering example"},
						{name: "viewport", content: "width=device-width, initial-scale=1"},
					]}
				/>
				
				   <Main>
				   <Switch>
				   	<Route  path="/home" component={ HomePage } />
					<Route path="/about" component={ About } />
					<Route path="/contact" component={ Contact } />
					<Route path="/list" component={ ListToUsers } />
					<Route path="/users" component={ List } />
					<Route path="*" component={ NotFound } />
					</Switch>
					</Main>

				
			</div>
		);
	};
export default App;