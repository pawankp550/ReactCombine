import heroes_data from '../apis/heroes';
import { GET_HERO_BY_ID } from '../actions/heroesActions';

function hero(state=[], action){
    switch(action.type){
        case GET_HERO_BY_ID:
            let heroes = [...state, getHero(action.Id)]
            return heroes;

        default:
        return state;
    }
}

function getHero(id){
    let character = heroes_data.find(hero => hero.id === id);
    return character;
}


export default hero;
