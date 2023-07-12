import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from '../slice/user.slice'

export const store = configureStore({
    reducer:{
        user:userReducer
    }
})
export default store;