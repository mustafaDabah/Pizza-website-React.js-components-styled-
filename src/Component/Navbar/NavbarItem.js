import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';


export const Nav = styled.nav `
    background:transparent;
    height:80px;
    display: flex;
    align-items: center;
    justify-content: center

`
export const NavLink = styled(Link) `
    color:#fff;
    font-size:2rem;
    cursor:center;
    text-decoration: none;

    @media screen and (max-width:400px){
        position:absolute;
        top:10px;
        left:25px;
    }
`
export const ToggleNav = styled.div ` 
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    right: 30px;
`

export const NavIcon = styled.div `
    cursor: pointer;
    color:#fff;
    font-size:1.5rem;
    order: 3;    
`
export const Menu = styled.p `
    font-weight:bold;
    color:#fff;
    order: 2;
    margin-right: 10px;
    cursor: pointer;
`