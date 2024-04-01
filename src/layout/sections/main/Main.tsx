import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/Flexwrapper";
import photo from "../../../assets/images/support1.png";
import {Button} from "../../../components/Button";


export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper style={{height: "100%"}} align={"center"} justify={"space-around"} direction={"row"}>
                <div style={{display: 'flex', flexDirection: 'column',alignItems: 'flex-start'}}>
                    <span>Hi👋, I’m a software developer</span>
                    <NameVT>Vladimir Tcaciuc</NameVT>
                    <NameVT>ready for</NameVT>
                    <MainTitle>Design, Coding and Testing.</MainTitle>
                    <StyledDescription>I have experience in web development and I am always looking for new things to
                        learn.</StyledDescription>
                    <Button>Contact me</Button>
                </div>
                <div><Photo src={photo}/></div>
            </FlexWrapper>

        </StyledMain>
    );
};

const StyledMain = styled.main`
 
    background-color: bisque;
    height: 100vh;
   
`
const Photo = styled.img`
    width: 300px;
    height: 330px;
    object-fit: cover;

`;


const MainTitle = styled.h1`
    font-size: 30px;
    font-style: italic;
    text-decoration: underline;

`;

const NameVT = styled.h2`
    font-size: 30px;
    margin: 0;
`;

const StyledDescription = styled.p`
    background-color: orange;
    

`
