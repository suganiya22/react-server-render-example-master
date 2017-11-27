import 'isomorphic-fetch';
export const SET_SEARCH = '@ssr/users/setSearch';
export const USERS_LOADED = '@ssr/users/loaded';
export const REQUEST_USERSPAGE='@ssr/users/requestUsersPage';
export const USERS_HAS_ERRORED='@ssr/users/usersHasErrored';
export const USERS_IS_LOADING='@ssr/users/usersIsLoading';

const initialState = {
  users: [],
  currentPage:0,
  count:5,
  search: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_USERSPAGE:
    return{ 
    ...state,        
         currentPage:action.currentPage
         };
         
     break;
    
    case USERS_IS_LOADING:
      return 
        isloading:action.isLoading;
      
         break;

    case USERS_LOADED:
     
     let newState={
      users:action.users,
      isLoading:false,
      currentPage:state.currentPage,
      count:state.count,

     };
     return  Object.assign({}, state, newState);
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

export const fetchUsers = (begin,end) => (dispatch) => {
console.log("FetchUsersApicall_Component");
    dispatch(usersIsLoading(true));
    let url = `//jsonplaceholder.typicode.com/users`
     return fetch(url+"?_start="+begin+"&_limit="+end)
        .then(res => {
           if (!res.ok) {
                    throw Error(res.statusText);
                }
           dispatch(usersIsLoading(false));

          return res.json();
        })
        .then(users => {
          dispatch({
            type: USERS_LOADED,
            users
          });	
        })
}

export function usersHasErrored(bool) {
    return {
        type: 'USERS_HAS_ERRORED',
        hasErrored: bool
    };
}
export function usersIsLoading(bool) {
    return {
        type: 'USERS_IS_LOADING',
        isLoading: bool
    };
}

export const setSearch =(search) =>(dispatch) => {
    dispatch({
        type: SET_SEARCH,
        search: search
    })
}

export const requestUsersPage= (currentPage,increase) => (dispatch) => {
console.log(currentPage,increase);
    dispatch({
        type: REQUEST_USERSPAGE,
        currentPage:currentPage + increase
    })
}
