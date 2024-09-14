import { ADD_TO_CART } from "./constants";
// const initialState =[]
export const AddReducer =(state=[],action)=>{
    if(action.type===ADD_TO_CART){
       return [...state,action.data]

    }
    else{
        return state
    }

}
export const RemoveReducer=(state,action)=>{
    if(action.type===REMOVE_FROM_CART){
    const filteredState= state.filter((item)=>item!==action.data)
    return filteredState
    }
}