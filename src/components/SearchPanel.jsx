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
		
        return (
            <div className="row">
			    
                <div className="one-fourth column">
				<form onSubmit={this.handleOnSubmit}>
                    Search: &nbsp;
                    <input ref='search'  placeholder="Search users..." name='search' type='text' defaultValue={this.props.search} 
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
