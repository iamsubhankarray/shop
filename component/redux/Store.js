// import { configureStore } from "@reduxjs/toolkit";

// import { AddReducer } from "./Reducers";


// const store = configureStore({
//     reducer: AddReducer
// })
// export default store;



import { configureStore } from "@reduxjs/toolkit";
import { AddReducer} from "./Reducers";

// Configuring the store with a key for the AddReducer
const store = configureStore({
    reducer: {
        cart: AddReducer ,// 'cart' is the state slice handled by AddReducer
       
    }
});

export default store;
