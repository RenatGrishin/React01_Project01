import * as axios from 'axios';

const instate = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '4c0e1b8c-c581-4d94-b3bc-a9cc04cdb90f'}
});

export const userAPI = {
    getUsers(currentPage, pageSize){
        return instate.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response=>{return response})
    },
    setPage(page, pageSize){
        return instate.get(`users?page=${page}&count=${pageSize}`)
            .then(response=>{return response})
    }
}