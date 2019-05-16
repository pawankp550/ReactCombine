import axios from 'axios';
export const  GET_RECIPE = 'GET_RECIPE';


export const getRecipe = (ingredient, dish) =>  async dispatch => {
        console.log('wdw')
        const resp = await axios.get(`http://www.recipepuppy.com/api/?i=${ingredient}&q=${dish}&p=3`);
        console.log(resp);
        dispatch({
           type: GET_RECIPE,
           payload: resp.data
       })
    }
