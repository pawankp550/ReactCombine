import axios from 'axios';
export const  GET_RECIPE = 'GET_RECIPE';


export const getRecipe = (ingredient="", dish="") =>  async dispatch => {
        const resp = await axios.get(`https://www.food2fork.com/api/search?key=76c81f11b5cba26658ccfca194465ea8&q=${ingredient}&page=2`);
         
        dispatch({
           type: GET_RECIPE,
           payload: resp.data.recipes
       })
    }
