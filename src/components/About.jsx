import React from 'react';

import Helmet from "react-helmet";

import Menu from './Menu';
class About extends React.Component {
	render() {
		return (
			<div>
				<Helmet
					title="About us"
				/>
				
				<h1>About</h1>
				<p>Best way manage your products collection.</p>
			</div>
		);
	}
}
export default About;