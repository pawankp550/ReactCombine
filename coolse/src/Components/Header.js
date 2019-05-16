import React from 'react'
import classToggle from './toggle';
import { NavLink } from 'react-router-dom';



function Header(){
    return(
        <>
            <ul className="container headerContainer">
                <i onClick = {classToggle} className="burger fas fa-bars"></i>

                    <li className="nav_Link"><NavLink exact to="/"  activeClassName="activelink">Super Squad
                        </NavLink>
                    </li>
                    <li className="nav_Link"><NavLink  to="/Recipes"  activeClassName="activelink">Recipe Finder
                        </NavLink>
                    </li>
                    <li className="nav_Link"><NavLink  to="/memes"  activeClassName="activelink">Meme Generator
                        </NavLink>
                    </li>

            </ul>
        </>
    )

}



export default Header;