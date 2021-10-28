import {combineReducers} from "@reduxjs/toolkit";
import {reducer as imagesReducer} from "./images-slice";
import {reducer as userReducer} from "./user-slice";

export const rootReducer = combineReducers({
    imagesReducer: imagesReducer,
    userReducer: userReducer,
})
