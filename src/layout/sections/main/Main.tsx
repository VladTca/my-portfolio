import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/Slider/Flexwrapper";
import photo from "../../../assets/images/support1.png";
import {Button} from "../../../components/Slider/Button";
import {Icon} from "../../../components/icon/Icon";



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
            <StyledSection>
                <fieldset>
                    <legend>About me</legend>
                    <textarea style={{resize: 'none'}} rows={10} cols={50}>The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in length, with a chamber built from sarsen megaliths on its eastern end. Both inhumed and cremated human remains were placed within this chamber during the Neolithic period, representing at least nine or ten individuals.</textarea>
                </fieldset>
                <div>
                    <StyledDescription>I have a vast experience in the following web technologies:</StyledDescription>
                    <FlexWrapper justify={'space-around'}>
                        <figure>
                            <Icon height={'50px'} width={'50px'} viewBox={'0 0 50px 50px'} iconId={'react'}/>
                            <figcaption>React</figcaption>
                        </figure>
                        <figure><Icon height={'50px'} width={'50px'} viewBox={'0 0 50px 50px'} iconId={'css3'}/>
                            <figcaption>CSS</figcaption>
                        </figure>
                        <figure><Icon height={'50px'} width={'50px'} viewBox={'0 0 50px 50px'}
                                      iconId={'styledComponentsIcon'}/>
                            <figcaption>StyledComponents</figcaption>
                        </figure>
                        <figure><Icon height={'50px'} width={'50px'} viewBox={'0 0 50px 50px'} iconId={'typeScript'}/>
                            <figcaption>TypeScript</figcaption>
                        </figure>
                        <figure><Icon height={'50px'} width={'50px'} viewBox={'0 0 50px 50px'} iconId={'figma'}/>
                            <figcaption>Figma</figcaption>
                        </figure>
                    </FlexWrapper>
                </div>
            </StyledSection>
        </StyledMain>
    );
};

const StyledMain = styled.main`
  
    background-color: bisque;
    height: calc(100vh - 60px);
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
const StyledSection = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 50px;


`