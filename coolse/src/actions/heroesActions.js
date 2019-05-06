export const GET_HERO_BY_ID = 'GET_HERO_BY_ID';

export function getHeroById(Id){
    return{
        type:GET_HERO_BY_ID,
        Id
    }
}