import React from 'react'
import classToggle from './toggle';


function Header(){
    return(
        <>
            <div className="Navbar">
                <div className="Navbar__Link-toggle">
                    <i onClick = {classToggle} className="fas fa-bars"></i>
                </div>
                <nav className="Navbar__Items">
                    <div className="Navbar__Link ActiveMode">
                        Super Squad
                    </div>
                    <div className="Navbar__Link">
                        Recipe Checker
                    </div>
                    <div className="Navbar__Link">
                        Meme Generator
                    </div>
            </nav>
        </div>
        </>
    )

}



export default Header;