import React from 'react';
import Heroes from './Heroes';

function Totalpower(props){

    let strength = props.selectedList.reduce((total, Hero) =>{
        return total += Hero.strength
    },0);

     let intelligence = props.selectedList.reduce((total, Hero) =>{
        return total += Hero.intelligence
    },0);

     let speed = props.selectedList.reduce((total, Hero) =>{
        return total += Hero.speed
    },0);

      return(
          <>
          <div className="list-group">
            <a className="list-group-item list-group-item-action list-group-item-secondary">intelligence: {intelligence}</a>
            <a className="list-group-item list-group-item-action list-group-item-secondary">speed: {speed}</a>
            <a className="list-group-item list-group-item-action list-group-item-secondary">Strength: {strength}</a>
        </div>
          </>
      )
}

export default Totalpower;