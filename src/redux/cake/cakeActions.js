import { BUY_CAKE } from "./cakeTypes"

export const buyCake = (number = 1) =>{//default value = 1
    return{
        type : BUY_CAKE,
        payload : number
    }
}
//we are exporting action creators from index.js