import React from 'react';
import RecipeSearch from './RecipeSearch';
import RecipeList from './RecipeList';
import { connect } from 'react-redux';
import { getRecipe } from '../../actions/RecipeActions';

class Recipes extends React.Component{

    handleSubmit = (Ingredient) => {
        this.props.getRecipe(Ingredient)
    }

    shouldComponentUpdate(nextProp){

            if(this.props.Recipes === nextProp.Recipes){
                return false;
            }
            else{
                return true;
            }
    }

    render(){
            return(
            <div className="App">
                <h1>Recipes</h1>
                <RecipeSearch  handleSubmit = {(Ing) => this.handleSubmit(Ing)}/>
                <RecipeList Recipes = {this.props.Recipes}/>
            </div>
        )
    }
}

const mapStateToprops = (state) => {
    console.log(state)
    return {
        Recipes:state.Recipes
    }
}
export default connect(mapStateToprops,{getRecipe})(Recipes);