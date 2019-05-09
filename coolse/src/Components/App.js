import React from 'react';
import Heroes from './Heroes/Heroes';
import '../styles/index.css';
import Header from './Header';


class App extends React.Component{
     render(){
         return(
             <div>
                <Header/>
                <div className="App">
                    <Heroes />
                </div>
             </div>
         )
     }
}

export default App;