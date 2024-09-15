// import { configureStore } from "@reduxjs/toolkit";

// import { AddReducer } from "./Reducers";


// const store = configureStore({
//     reducer: AddReducer
// })
// export default store;



import { configureStore } from "@reduxjs/toolkit";
import {  cartReducer} from "./Reducers";

// Configuring the store with a key for the AddReducer
const store = configureStore({
    reducer: {
        cart: cartReducer ,// 'cart' is the state slice handled by AddReducer
       
    }
});

export default store;
