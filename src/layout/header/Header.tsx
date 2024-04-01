import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";


const items = [
    {menu:"Home",aKey:'h',href:"#home"},"Home",
    {menu:"Skills",aKey:'s',href:"#skills"},
    {menu:"Projects",aKey:'p',href:"#projects"},
    {menu:"Achievements",aKey:'a',href:"#achievements"},
    {menu:"Contacts",aKey:'c',href:"#contacts"}

]
 export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <Menu menuItems={items.menu} />
        </StyledHeader>
    );
};

const StyledHeader=styled.header`
    position: fixed;
    top: 0;
    width: 100%;
   margin-bottom: 60px;
    background-color: green;
    display: flex;
    justify-content: space-between;
    
    align-items: center;
    height: 60px;
    overflow: hidden;
   
   
`