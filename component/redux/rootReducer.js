import { combineReducers } from "redux";
import { AddReducer } from "./Reducers";
import { RemoveReducer} from "./Reducers";
export default combineReducers({
    AddReducer,
    RemoveReducer,

})