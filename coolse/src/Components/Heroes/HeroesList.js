import React from 'react';

function HeroesList(props){
        return(
            <>
                <div className="list-group">
                    {props.heroesList.map(hero => <a className="list-group-item list-group-item-action list-group-item-info" key={hero.id} onClick = {() => props.onSelect(hero.id)}>{hero.name}</a>)}
                </div>
            </>
        )
}

export default HeroesList;