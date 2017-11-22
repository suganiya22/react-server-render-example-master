import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PagingPanel from './PagingPanel';
import { fetchUsers, setSearch } from '../reducers/users';
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
    this.props.fetchUsers();
    
  }

  filterResult(item) {
    return !this.props.search || item.name.indexOf(this.props.search) !== -1;
  }

  render() {
	  var divStyle = {
      background: "#eee",
      padding: "20px",
      margin: "20px",
      float: "left",
      display: "inline-grid"
    };
    const {count, page} = this.props;
    console.log(this.props,this.state,"Datas");
    return (
      <div>
        <SearchPanel search={this.props.search}  onSearchChanged={this.props.onSearchChanged} onSearchKeyUp={this.handleSearchKeyup}  />

       <PagingPanel count={count} page={page} onNextPage={() => {
            changePage(page+1);
            fetchUsers()
        }} onPreviousPage={ () => {
            changePage(page-1);
            fetchUsers() }}/>
        {
          this.props.items.map((item, index) => {
            if (!this.filterResult(item)) return null;
            return (
              <div style={divStyle} key={item.id} >
                <ul>
                  <li>{item.name}</li>
                  <li>{item.username}</li>
                  <li>{item.email}</li>
                  <li>{item.website}</li>
                </ul>
              </div>
            )
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.users.items,
  rows:state.users.rows,
  search: state.users.search
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchUsers, setSearch }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(List);