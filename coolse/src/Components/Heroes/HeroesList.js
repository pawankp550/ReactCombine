import React from 'react';

function HeroesList(props){
        return(
            <>
                <ul >
                    {props.heroesList.map(hero => <li className="list-group-item list-group-item-action list-group-item-info" key={hero.id} onClick = {() => props.onSelect(hero.id)}>{hero.name}</li>)}
                </ul>
            </>
        )
}

export default HeroesList;