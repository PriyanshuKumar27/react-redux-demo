import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
    cake : cakeReducer,        
    iceCream : iceCreamReducer,
    user : userReducer 
    //cakeReducer is referred to as cake and iceCreamReducer is referred to as iceCream
    //so seperate state object we have defined in reducer
    //also needs to be accessed diffrerently
})

export default rootReducer;