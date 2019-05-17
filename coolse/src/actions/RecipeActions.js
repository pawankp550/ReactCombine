import axios from 'axios';
export const  GET_RECIPE = 'GET_RECIPE';
export const  RECIPE_ERROR = 'RECIPE_ERROR';

export const getRecipe = (ingredient="", dish="") =>  async dispatch => {
   try{
        const resp = await axios.get(`https://www.food2fork.com/api/search?key=322f648786f0a31941eb39ce22c54f7d&q=${ingredient}&page=2`);
       
        dispatch({
           type: GET_RECIPE,
           payload: resp.data.recipes
       })
      }

      catch{
         dispatch({
            type: GET_RECIPE,
            payload: 'Error'
        })
      }
    }
