import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Main extends Component {
  render () {
   var divStyle = {
      background: "#545e64",
      padding: "20px",
      margin: "20px",
      height:"800px",
      color:"white",
      
    };
    return (
      <div style={divStyle}>
        <h1>Users API</h1>
         <p>SERVER RENDERING APPLICATION</p>
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