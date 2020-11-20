import React from 'react' ;
import {Nav , NavLink , NavIcon , Menu , ToggleNav } from './NavbarItem.js';

const  Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavLink to="/">Pizza</NavLink>
                <ToggleNav>
                    <NavIcon className="fas fa-pizza-slice" onClick={toggle} ></NavIcon>
                    <Menu onClick={toggle}>Menu</Menu>
                </ToggleNav>
            </Nav>
        </>
    )
}
export default Navbar