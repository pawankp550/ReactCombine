import { combineReducers } from 'redux';

import heroesList from './heroesReducer';
import hero from './heroReducer';

export default combineReducers({
    heroesList,
    selectedHero: hero
});

