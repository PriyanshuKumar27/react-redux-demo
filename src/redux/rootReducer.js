import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";

const rootReducer = combineReducers({
    cake : cakeReducer,        
    iceCream : iceCreamReducer 
    //cakeReducer is referred to as cake and iceCreamReducer is referred to as iceCream
    //so seperate state object we have defined in reducer
    //also needs to be accessed diffrerently
})

export default rootReducer;