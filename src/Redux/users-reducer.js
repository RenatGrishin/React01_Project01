const ADD_FRIEND = 'ADD_FRIEND';
const DEL_FRIEND = 'DEL_FRIEND';

let initialState = {
    users:[
        {id: 1, friend: true, name: 'Inna', country: 'Canada'},
        {id: 2, friend: false, name: 'Adam', country: 'Norway'},
        {id: 3, friend: true, name: 'Alex', country: 'Russia'}
    ]
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
        default: return state;
    }
}

export const addFriend =(userId)=>({type: ADD_FRIEND, userId})
export const delFriend =(userId)=>({type: DEL_FRIEND, userId});

export default UsersReducer;