import React from 'react';
import Heroes from './Heroes/Heroes';
import '../styles/index.css';
import Header from './Header';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Memes from './Memegenerator/Memes';
import Recipes from './RecipesFinder/Recipes';

class App extends React.Component{
     render(){
         return(
             <Router>
                <div>
                    <Header/>
                    <Route exact path="/" component={Heroes}/>
                    <Route  exact path="/memes" component={Memes}/>
                    <Route  exact path="/Recipes" component={Recipes}/>
                </div>
             </Router>
         )
     }
}

export default App;