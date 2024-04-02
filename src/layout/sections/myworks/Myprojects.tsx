import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/Flexwrapper";
import styled from "styled-components";
import React from "react";
import {Project} from "./projct/Project";
import catmorda from '../../../assets/images/catmorda.png'
import pinguin from '../../../assets/images/pinguin.png'


export const Myprojects = () => {
    return (
        <StyledWorks id={'projects'}>
            <SectionTitle style={{padding: '80px 0 0 0'}}>
                My Projects
            </SectionTitle>


            <FlexWrapper justify={"space-around"}>
                <Project title={"Pinguin"} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}
                         src={pinguin}/>
                <Project title={'Catmorda'}
                         text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim'}
                         src={catmorda}/>
            </FlexWrapper>

            <Pagination>
                <span></span>
                <span></span>
                <span></span>
            </Pagination>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    
    background-color: deepskyblue;
    height: 100vh;



`
const Pagination = styled.div`
span{
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 20px 15px;
    
    background-color: black;
    
}

`