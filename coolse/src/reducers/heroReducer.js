import heroes_data from '../apis/heroes';
import { GET_HERO_BY_ID, REMOVE_HERO_BY_ID } from '../actions/heroesActions';

function hero(state=[], action){
    switch(action.type){
        case GET_HERO_BY_ID:
            let heroes = [...state, getHero(action.Id)]
            return heroes;

        case REMOVE_HERO_BY_ID:
            let selectedHeroes = state.filter(hero => hero.id !== action.Id)
            return selectedHeroes;

        default:
        return state;
    }
}

export function getHero(id){
    let character = heroes_data.find(hero => hero.id === id);
    return character;
}


export default hero;
