import React from 'react';
import { connect } from 'react-redux';
import { getRecipe } from '../../actions/RecipeActions';

class RecipeSearch extends React.Component{

    textInput = React.createRef();

    handleSubmit= (e) => {
        e.preventDefault()
        this.props.getRecipe(this.textInput.current.value)
        console.log(this.props)
    }

    containerStyle={
        justifyContent: 'center',

    }

    buttonStyle={
        backgroundColor:"transparent",
        borderColor:"grey"
    }


    render(){
        return(
            <form className="container" onSubmit={this.handleSubmit} style={this.containerStyle}>
                <label  className="searchLabelStyle">Ingredients</label>
                <input placeholder="Egg, Onion" className="searchInputStyle" ref={this.textInput} name="Ingredients" type="text" />
                <label  className="searchLabelStyle">Dish</label>
                <input  className="searchInputStyle" name="Dish" type="text"  />
                <button className="searchButtonStyle" style={this.buttonStyle}>Submit</button>
            </form>
        )
    }
}

const mapStateToprops = (state) => {
        return {
            Recipes:state.Recipes
        }
}
export default connect(mapStateToprops,{getRecipe})(RecipeSearch);
