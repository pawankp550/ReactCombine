import { combineReducers } from 'redux';

import heroesList from './heroesReducer';
import hero from './heroReducer';
import Recipes from './RecipesReducer';

export default combineReducers({
    heroesList,
    selectedHero: hero,
    Recipes
});

