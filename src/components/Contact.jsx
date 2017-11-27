import React from 'react';

import Helmet from "react-helmet";

import Menu from './Menu';
class Contact extends React.Component {
	render() {
		return (
			<div>
				<Helmet
					title="Contact us"
				/>
				
				<h1>Contact</h1>
				<p>Best way Manage your Collection.</p>
			</div>
		);
	}
}
export default Contact;