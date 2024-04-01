import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/Flexwrapper";
import styled from "styled-components";
import React from "react";
import {Work} from "./work/Work";
import giticon from '../../../assets/images/Git-Icon-1788C 1.png'

const worksItems = [
    "All",
    "Landing Page",
    "React",
    "Spa",
]


export const Myworks = () => {
    return (
        <StyledWorks>
            <SectionTitle>
                My Projects
            </SectionTitle>

            <Menu menuItems={worksItems}/>
            <FlexWrapper justify={"space-around"}>
                <Work title={"Social Network"} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}
                      src={giticon}/>
                <Work title={'Timer'}
                      text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim'}
                      src={giticon}/>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: deepskyblue;
    height: calc(100vh - 60px - 130px);


`
