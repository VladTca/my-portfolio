import React from 'react';
import logo from '../../assets/images/logo.png'
import styled from "styled-components";
export const Logo = () => {
    return (
        <StyledLogo src={logo} />
    );
}

const StyledLogo=styled.img`
    
    max-width: 200px;
  
    object-fit: cover;
    
`;