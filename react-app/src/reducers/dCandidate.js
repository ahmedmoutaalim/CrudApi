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
    
        default:
            return state ; 
    }

}
 export default dCandidate ;