import { configureStore } from "@reduxjs/toolkit";
import combineReducers from './rootReducer'


import rootReducer from "./rootReducer";
const store = configureStore({
    reducer: combineReducers
})
export default store;