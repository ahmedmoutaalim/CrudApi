import { act } from "react-dom/test-utils";
import { ACTION_TYPES } from "../actions/dCandidate"; 


const inisialState = {

    list : []
}


 export const dCandidate = (state = inisialState , action) => {


    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL :
            
            return {
                ...state,
                list : [...action.payload]
            }
        case ACTION_TYPES.CREATE :
            
            return {
                ...state,
                list : [...state.list , action.payload]
            }
        case ACTION_TYPES.UPDATE :
            return {
                ...state,
                list : state.list.map(x=>x.id == action.payload.id ? action.payload : x)
            }    
        case ACTION_TYPES.DELETE :
            return {
                ...state,
                list : state.list.filter(x=>x.id != action.payload)
            }    
    
        default:
            return state ; 
    }

}
 export default dCandidate ;