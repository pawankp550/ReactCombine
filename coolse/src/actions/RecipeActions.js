import axios from 'axios';
export const  GET_RECIPE = 'GET_RECIPE';


export const getRecipe = (ingredient = "", dish = "") =>  async dispatch => {
        console.log('wdw')
       const response = await axios.get(`http://www.recipepuppy.com/api/?i=${ingredient}&q=${dish}&p=1`);
       console.log(response)
       dispatch({
           type: GET_RECIPE,
           payload: response.data
       })
    }
