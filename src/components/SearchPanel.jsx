import React from 'react';
import ReactDOM from 'react-dom';
import { fetchUsers } from '../reducers/users';

export default class SearchPanel extends React.Component {
    constructor() {
        super()
        this.onSearchChanged = this.onSearchChanged.bind(this)
        this.handleOnSubmit=this.handleOnSubmit.bind(this)
        this.state = {}
    }

    render() {
		var searchStyle={
            width: "300px",
            height: "18px",
            borderRadius:"10px",
            padding: "5px",
            opacity:"0.8",
        }
        var Fcolumn={
          float:"right"
        }
        return (
            <div className="row">
			    
                <div>
				<form onSubmit={this.handleOnSubmit}>
                    SEARCH: &nbsp;
                    <input  style={searchStyle} ref='search'  placeholder="Search users..." name='search' type='text' defaultValue={this.props.search} 
					 onChange={this.onSearchChanged } />
                    
					</form>
                </div>
            </div>
        )
    }
    handleOnSubmit(e) {
		e.preventDefault();
		const {dispatch}=this.props;
		const query=this.refs.search.value;
        console.log("handleOnSubmit Method Invoked");
	
	}
    onSearchChanged(e) {
		
        this.props.onSearchKeyUp(this.refs.search.value);
       
    }

    
}
