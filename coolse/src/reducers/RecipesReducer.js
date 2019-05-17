import { GET_RECIPE } from '../actions/RecipeActions';

export default function RecipesReducer(state=[], action){
    switch(action.type){
        case GET_RECIPE : 
             state = action.payload;
             return state;

        default:
            return state;    
    }
}