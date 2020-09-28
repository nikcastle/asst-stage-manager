import axios from "axios";

export default {
   
    //Internal API database calls
    getUser: currentUser => {
        return axios.get(`/api/users/${currentUser}`)
    },

    createUser: userData => {
        return axios.post(`/api/users`, userData)
    },

    populateList: id => {
        return axios.get(`/api/users/populate/${id}`)
    },

    findUsers: () => {
        return axios.get(`/api/users`)
    },

    addNote: (id, currentUser) => {
        return axios.post(`/api/notes/item/${id}?currentUser=${currentUser}`)
    },

    getNotes: (id, currentUser) => {
        return axios.get(`/api/notes/item/${id}?currentUser=${currentUser}`)
    },

    removeNote: (id, currentUser) => {
        return axios.get(`/api/notes/remove/${id}?currentUser=${currentUser}`)
    }

}