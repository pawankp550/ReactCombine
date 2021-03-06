import React from 'react'

class RecipeList extends React.Component{



   render(){
    console.log(this.Recipe)

    if(this.props.Recipes === 'Error'){
        return (
            <h1>Api Error</h1>
        )
    }
    else{
    return(
        <>
            <div className="Recipelist_Container">
                {
                    this.props.Recipes.map(Recipe =>
                               <div className="Recipelist_Recipe" key={Recipe.recipe_id}>
                                  <a href={Recipe.source_url} >  <img className="Recipelist_img" src={Recipe.image_url}/>
                                    <div className="Recipe_name" >{Recipe.title}</div></a>
                                </div>)
                }
            </div>
        </>
    )
    }
   }

}

export default RecipeList