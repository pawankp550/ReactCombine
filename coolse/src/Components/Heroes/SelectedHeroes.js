import React from 'react';

function SelectedHeroes(props){


        return(
            <>
                <div className="list-group">
                    {props.selected.map(hero =>
                        <a
                            className="list-group-item list-group-item-action list-group-item-danger"
                            key={hero.id} onClick = {() => props.onRemove(hero.id)}>{hero.name}
                            </a>
                    )}
                </div>
            </>
        )

}

export default SelectedHeroes;