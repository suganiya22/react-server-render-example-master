import React, {Component} from 'react';
import 'isomorphic-fetch';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ListUser from './ListUser';
import { fetchUsers, setSearch,requestUsersPage } from '../reducers/users';
import SearchPanel from './SearchPanel';

class List extends Component {

  constructor(props) {
    super(props);
    this.handleSearchKeyup = this.handleSearchKeyup.bind(this);
     
  }

  handleSearchKeyup(search) {
    this.props.setSearch(search);
  }

  componentDidMount() {
    this.props.fetchUsers(0,5);
    
  }

  filterResult(item) {
    return !this.props.search || item.name.indexOf(this.props.search) !== -1;
  }

  limitPerPage (begin, end, increase) {
    this.props.requestUsersPage(this.props.currentPage,increase);
   this.props.fetchUsers(begin,end);
  
   console.log("LIMITS_RANGE",begin,end,increase);

 
}

  renderPageLinks(){

   var liStyle2 = {
      listStyle:"none",
      padding:"7px",
      display:"inline",
      fontSize:"14px",
      backgroundColor:"#f2f2f2",
      borderRadius:"6px",
      color: "#333",
      fontWeight: "bold",
      margin: "5px"
      } 
   var liStyle3 = {
      listStyle:"none",
      padding:"7px",
      display:"inline",
      fontSize:"14px",
      backgroundColor:"#333",
      borderRadius:"6px",
      color: "#fff",
      fontWeight: "bold",
      margin: "5px",
      opacity:"0.8",
      border:"2px dotted #fff",   
      }   
    
    console.log("StateCurrentPage",this.props.currentPage,this.props.count);
    const cPage=this.props.currentPage;
    if (cPage == 0) {
       return (
        <ul className="card-pagination">
          <li style={liStyle3}>Page 1</li>
          <li style={liStyle2}><a onClick={() => this.limitPerPage(5, 9, 1)}>Next</a></li>
        </ul>
      )
    } else if (cPage < this.props.count - 1) {
       return (
        <ul className="card-pagination">
          <li style={liStyle2}><a onClick={() => this.limitPerPage((cPage-1) * 5, (cPage * 5), -1)}>Back</a></li>
          <li style={liStyle3}>Page {(cPage + 1)}</li>
          <li style={liStyle2}><a onClick={() => this.limitPerPage((cPage+1) * 5, (cPage+2) * 5, 1)}>Next</a></li>
        </ul>
      )
    } else {
        return (
        <ul className="card-pagination">
          <li style={liStyle2}><a onClick={() => this.limitPerPage((cPage-1) * 5, cPage * 5, -1)}>Back</a></li>
          <li style={liStyle3}>Page {(cPage-1)}</li>
        </ul>
      )
    }
  }

  render() {
	  const {count, currentPage,users} = this.props.users;
      
    const {fetchUsers} =this.props;

    console.log(this.props,this.state,"Data_Render_list");
    
    if (this.props.isLoading) {
            return <p>Loading…</p>;
      }
    return (
      <div>
        <SearchPanel search={this.props.search}  onSearchChanged={this.props.onSearchChanged} onSearchKeyUp={this.handleSearchKeyup}  />
           <br/>
      
        PAGINATION :{this.renderPageLinks()}
        {
          users.map((user, index) => {
            if (!this.filterResult(user)) return null;
            return (
             <ListUser key={user.id} {...user}/>
             
            )
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
  search: state.users.search,
  isLoading:state.users.isLoading,
  count:state.users.count,
  currentPage:state.users.currentPage,
});

const mapDispatchToProps = (dispatch) => 
bindActionCreators({
  fetchUsers:(begin,end) =>fetchUsers(begin,end),
  setSearch,
  requestUsersPage
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(List);