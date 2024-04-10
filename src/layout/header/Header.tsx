import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";

import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/Flexwrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {theme} from "../../styles/Theme";


const items: { menu: string, aKey: string, href: string }[] = [
    {menu: "Home", aKey: 'h', href: "#home"},
    {menu: "Skills", aKey: 's', href: "#skills"},
    {menu: "Projects", aKey: 'p', href: "#projects"},
    {menu: "Achievements", aKey: 'a', href: "#achievements"},
    {menu: "Contacts", aKey: 'c', href: "#contacts"}

]
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'} >
                    <Logo/>
                    <HeaderMenu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    padding:20px 0;
    
    
    margin-bottom: 60px;
    background-color:${theme.colors.secondaryBg};
    display: flex;
    justify-content: space-between;

    align-items: center;
    height: 60px;
    overflow: hidden;


`

