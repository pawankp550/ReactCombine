import heroes_data from '../apis/heroes';
import { GET_HERO_BY_ID } from '../actions/heroesActions';

function heroesList(state = heroes_data, action){
    switch(action.type){
        case GET_HERO_BY_ID :
         let heroes = state.filter((hero) => {
                  return hero.id !== action.Id
            });

            return heroes;

        default:
            return state;
    }
}


export default heroesList;
