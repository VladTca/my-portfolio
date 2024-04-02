import React from 'react';
import styled from "styled-components";

export const Menu = (props: { menuItems: { menu:string,aKey:string,href:string}[] }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href={item.href} accessKey={item.aKey}>{item.menu}</a>
                        </li>
                    );
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 60px;
        justify-content: center;
        list-style: none;
      margin-right: 50px;
     
    }
    
  li{
      &:hover{
         
          transform: scaleX(200%) ;
      }
  }
    
    ul a{
        text-decoration: none;
        color: white;
        &:hover{
            color: red;
            
        }
    }
`;