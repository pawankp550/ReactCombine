import React from 'react';
import Heroes from './Heroes/Heroes';
import '../styles/index.css'

class App extends React.Component{
     render(){
         return(
             <div className="App">
                <Heroes />
             </div>
         )
     }
}

export default App;