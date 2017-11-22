import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Main extends Component {
  render () {
    return (
      <div>
        <h1>Redux Universal App</h1>
         <p>Isomorphic sample application</p>
        <section>
          {this.props.children}
        </section>
      </div>
    );
  }
}
Main.propTypes={
	children:PropTypes.object.isRequired
}