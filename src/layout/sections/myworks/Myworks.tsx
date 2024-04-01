import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/Flexwrapper";
import styled from "styled-components";
import React from "react";
import {Work} from "./work/Work";
import giticon from '../../../assets/images/Git-Icon-1788C 1.png'


export const Myworks = () => {
    return (
        <StyledWorks>
            <SectionTitle>
                My Projects
            </SectionTitle>


            <FlexWrapper justify={"space-around"}>
                <Work title={"Social Network"} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}
                      src={giticon}/>
                <Work title={'Timer'}
                      text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim'}
                      src={giticon}/>
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
    min-height: 100vh;
    background-color: deepskyblue;
    height: calc(100vh - 60px - 130px);


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