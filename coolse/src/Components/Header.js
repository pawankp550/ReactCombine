import React from 'react'
import classToggle from './toggle';
import { NavLink } from 'react-router-dom';


function Header(){
    return(
        <>
            <div className="Navbar">
                <div className="Navbar__Link-toggle">
                    <i onClick = {classToggle} className="fas fa-bars"></i>
                </div>
                <nav className="Navbar__Items">
                    <NavLink exact  to = "/" activeClassName={"ActiveMode"} className="Navbar__Link">
                        Super Squad
                    </NavLink >
                    <NavLink to="/Recipes" activeClassName={"ActiveMode"} className="Navbar__Link">
                        Recipe Checker
                    </NavLink>
                    <NavLink to="/memes" activeClassName={"ActiveMode"} className="Navbar__Link">
                        Meme Generator
                    </NavLink>
            </nav>
        </div>
        </>
    )

}



export default Header;