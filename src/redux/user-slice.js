import {createSlice} from "@reduxjs/toolkit"




const userSlice = createSlice({
    name: 'userSlice',

    initialState: {
        user: {
            id: 1,
            name: '',
            login: '',
            isAuth: false
        }
    },

    reducers: {

    }
})


export const userSelector = (state) =>  state.userReducer.user


export const {

} = userSlice.actions


export const reducer = userSlice.reducer