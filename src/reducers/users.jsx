import 'isomorphic-fetch';
export const SET_SEARCH = '@ssr/users/setSearch';
export const USERS_LOADED = '@ssr/users/loaded';

const initialState = {
  items: [],
  pageNumber:1,
  count:0,
  meta:{},
  isLoading:false,
  search: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USERS_LOADED:
      return {
        ...state,
        items: action.items,
        meta: action.meta,
        isLoading: false,
        pageNumber:action.pageNumber

      };
    break;
    case SET_SEARCH:
      return {
        ...state,
        search: action.search
      };
    break;
    default:
      return state;
  }
}

export const fetchUsers = () => (dispatch) => {
  return fetch('//jsonplaceholder.typicode.com/users')
    .then(res => {
      return res.json();
    })
    .then(users => {
      dispatch({
        type: USERS_LOADED,
        items: users,
      });	
    })
}


export const setSearch =(search) =>(dispatch) => {
    dispatch({
        type: SET_SEARCH,
        search: search
    })
}

