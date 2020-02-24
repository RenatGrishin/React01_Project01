const ADD_FRIEND = 'ADD_FRIEND';
const DEL_FRIEND = 'DEL_FRIEND';
const SET_USERS = 'SET_USERS';
const PAGE_SIZE = 'PAGE_SIZE';
const TOTAL_USER_COUNT = 'TOTAL_USER_COUNT';
const CURRENT_PAGE = 'CURRENT_PAGE';

let initialState = {
    users:[],
    pageSize: 5,
    totalUserCount: 20,
    currentPage: 1,
    isFetching: false
}

const UsersReducer = (state=initialState, action) =>{
    switch(action.type){
        case ADD_FRIEND:{
            return{
                ...state,
                users: state.users.map(user=>{
                    if(user.id == action.userId){
                        return{
                            ...user,
                            friend: true
                        }
                    } return user;
                })
            }
        }
        case DEL_FRIEND:
            return{
                ...state,
                users: state.users.map(user=>{
                    if(user.id == action.userId){
                        return {
                            ...user,
                            friend: false
                        }
                    } return user;
                })
            }
        case SET_USERS:
            return{
                ...state,
                users: action.users
            }
        case PAGE_SIZE:
            return{
                ...state,
                users: action.pageSize
            }
        case TOTAL_USER_COUNT:
            return{
                ...state,
                users: action.tUC
            }
        case CURRENT_PAGE:
            return{
                ...state,
                users: action.currentPage
            }
        default: return state;
    }
}

export const addFriend =(userId)=>({type: ADD_FRIEND, userId});
export const delFriend =(userId)=>({type: DEL_FRIEND, userId});
export const setUsers =(users)=>({type: SET_USERS, users});
export const pageSize =(pageSize)=>({type: PAGE_SIZE, pageSize});
export const totalUserCount =(tUC)=>({type: TOTAL_USER_COUNT, tUC});
export const currentPage =(currentPage)=>({type: CURRENT_PAGE, currentPage});

export default UsersReducer;