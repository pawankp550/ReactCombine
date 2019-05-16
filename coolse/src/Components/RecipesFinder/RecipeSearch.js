import React from 'react';

class RecipeSearch extends React.Component{

    textInput = React.createRef();

    handleSubmit= (e) => {
        e.preventDefault()
        console.log(this.textInput.current.value)
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

export default RecipeSearch;
