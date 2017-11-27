import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ListUser = (props) => {
  var divStyle = {
      background: "#d9dcde",
      padding: "5px",
      margin: "5px",
      float: "left",
      color:"#333",
       display: "inline-grid",
       borderRadius:"7px",
      border:"2px solid #ccc",
    };
    var divStyle3 = {
      background: "white",
      padding: "5px",
      margin: "5px",
      float: "left",
      color:"#333",
       display: "inline-grid",
       borderRadius:"0px",
       fontStyle:"italic",
      border:"2px solid #ccc",
    };
    var liStyle = {
      listStyle:"none",
      padding:"5px",
      fontSize:"14px",

    }
     var liStyle1 = {
      listStyle:"none",
      padding:"5px",
      fontSize:"14px",
      backgroundColor:"#0099cc",
      borderRadius:"1px",
      }
      var common={
      margin:0,
      padding:0,
      }
    return (
       <div style={divStyle} key={props.id} >
                <ul style={common}>
                  <li style={liStyle1}>NAME: {props.name}</li>
                  <li style={liStyle}>PHONE: {props.phone}</li>
                  <li style={liStyle}>EMAIL: {props.email}</li>
                  <li style={liStyle}>WEBSITE: {props.website}</li>
                </ul>
                <div style={divStyle3}>
                <ul style={common}>
                  <li style={liStyle}>ADDRESS: {props.address.street},{props.address.city}</li>
                  <li style={liStyle}>COMPANY: {props.company.name}</li>
                </ul>
                </div>
        </div>
  );
};

export default ListUser;