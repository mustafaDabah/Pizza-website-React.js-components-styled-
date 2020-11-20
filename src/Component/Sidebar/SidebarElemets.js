import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const SidebarContainer = styled.div ` 
    position:fixed;
    z-index:999;
    width:350px;
    height:100%;
    background-color:#ffc500;
    display:grid;
    align-items:center;
    transition:0.3s ease-in-out;
    right:${({isOpen})=>(isOpen ? '0px' : '-1000px ')};

    @media screen and (max-width:400px) {
        width:100%;
    }
`
export const Icon = styled.div ` 
    position:absolute;
    top:1.2rem;
    right:1.5rem;
    background:transparent;
    border:transparent;
    font-size:2rem;
    cursor: pointer;
`
export const CloseIcon = styled.i ` 
    color:#000;
`
export const SidbarMenu = styled.div ` 
    display:grid;
    grid-template-columns:1fr ;
    grid-template-rows:repeat(3 , 80px);
    text-align:center;
    transition:all .5s ease-in-out;
`
export const SidebarLink = styled(Link)`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:1.5rem;
    text-decoration:none;
    list-style:none;
    transition:all  .5s  ease-in-out;
    color:#000;
    cursor: pointer;
    
    &:hover {
        color:#e31837;
        cursor: pointer;
    }

`
export const SideBtnWrap = styled.div ` 
    display:flex;
    justify-content:center;
`
export const SidebarRoute = styled(Link) ` 
    background-color:#e31837;
    white-space:nowrap;
    padding:16px 25px;
    outline:none;
    color:#fff;
    border:none;
    text-decoration:none;
    transition:all .5s ease-in-out;
    cursor: pointer;
    &:hover {
        background-color:#fff;
        color:#010686;
    }
`