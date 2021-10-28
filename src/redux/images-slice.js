import {createSlice} from "@reduxjs/toolkit"




const imagesSlice = createSlice({
    name: 'imagesSlice',

    initialState: {
        images: null,
    },

    reducers: {
        pushData: (state, action) => {
            state.images = action.payload.images
        }
    }
})


export const imagesSelector = (state) =>  state.imagesReducer.images


export const {
    pushData,

} = imagesSlice.actions


export const reducer = imagesSlice.reducer