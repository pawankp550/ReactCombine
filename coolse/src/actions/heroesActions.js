export const GET_HERO_BY_ID = 'GET_HERO_BY_ID';
export const REMOVE_HERO_BY_ID = 'REMOVE_HERO_BY_ID';

export function getHeroById(Id){
    return{
        type:GET_HERO_BY_ID,
        Id
    }
}

export function removeHeroById(Id){
    return{
        type:REMOVE_HERO_BY_ID,
        Id
    }
}