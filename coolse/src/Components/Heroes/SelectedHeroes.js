import React from 'react';

function SelectedHeroes(props){


        return(
            <>
                <ul >
                    {props.selected.map(hero =>
                        <li
                            className="list-group-item list-group-item-action list-group-item-danger"
                            key={hero.id}>{hero.name}
                        </li>
                    )}
                </ul>
            </>
        )

}

export default SelectedHeroes;