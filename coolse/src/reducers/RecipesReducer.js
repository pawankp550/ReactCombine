import { GET_RECIPE, RECIPE_ERROR } from '../actions/RecipeActions';

export default function RecipesReducer(state=[], action){
    switch(action.type){
        case GET_RECIPE : 
             state = action.payload;
             return state;

        case RECIPE_ERROR :
             state = action.payload;
             return state;
                 
        default:
            return state;    
    }
}