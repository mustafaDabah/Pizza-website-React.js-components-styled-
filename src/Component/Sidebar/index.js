import React from 'react'
import {SidebarContainer , Icon , CloseIcon ,SidbarMenu , SidebarLink , SideBtnWrap , SidebarRoute  } from "./SidebarElemets"

 const Sidebar =  ({toggle , isOpen }) =>  {
    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon>
                <CloseIcon className="fas fa-times" onClick={toggle} ></CloseIcon>
            </Icon>
            <SidbarMenu>
                <SidebarLink to='/'>Pizzas</SidebarLink>
                <SidebarLink to='/'>Desserts</SidebarLink>
                <SidebarLink to='/'>Full Menu</SidebarLink>
            </SidbarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Order Now </SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}
export default Sidebar;
