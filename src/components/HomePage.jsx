import React from 'react';
import {Link} from 'react-router-dom';
import Helmet from "react-helmet";
import homepageStyles from '../../homepage.scss';
import Menu from './Menu';
class HomePage extends React.Component {
  render() {
    return (
      <div className="{homepageStyles.component}">
        <Helmet
		title="Welcome to our Homepage"
		/>
		<Menu/>
        <h1>Product List</h1>

        <p>Best way manage your Book collection.</p>
        
      </div>
    );
  }
}

export default HomePage;
