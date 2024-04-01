import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/Flexwrapper";
import photo from "../../../assets/images/support1.png";
import {Button} from "../../../components/Button";




export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"} direction={"row"}>
                <div>
                    <span>Hi👋, I’m a software developer</span>
                    <NameVT>Vladimir Tcaciuc</NameVT>
                    <MainTitle>ready for</MainTitle>
                    <MainTitle>Design, Coding and Testing.</MainTitle>
                    <StyledDescription>I have experience in web development and I am always looking for new things to
                        learn.</StyledDescription>
                    <Button>Contact me</Button>
                </div>
                <Photo src={photo}/>
            </FlexWrapper>

        </StyledMain>
    );
};

const StyledMain = styled.main`
    background-color: bisque;
    height: calc(100vh - 60px - 130px);
    padding-top: 30px;
    margin-top: 50px;
  

`
const Photo = styled.img`
    width: 300px;
    height: 330px;
    object-fit: cover;
    
`;


const MainTitle = styled.h1`
    font-size: 30px;
    font-style: italic;
`;

const NameVT = styled.h2`
    font-size: 30px;
`;

const StyledDescription = styled.p`
    background-color: orange;

`
