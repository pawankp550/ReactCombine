import React from 'react';

class RecipeSearch extends React.Component{

    textInput = React.createRef();

    handleSubmitRecipe= (e) => {
        e.preventDefault();
        this.props.handleSubmit(this.textInput.current.value);
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
            <form className="container" onSubmit={this.handleSubmitRecipe} style={this.containerStyle}>
                <label  className="searchLabelStyle">Ingredients</label>
                <input placeholder="Egg, Onion" className="searchInputStyle" ref={this.textInput} name="Ingredients" type="text" />             
                <button className="searchButtonStyle" style={this.buttonStyle}>Submit</button>
            </form>
        )
    }
}


export default RecipeSearch;
