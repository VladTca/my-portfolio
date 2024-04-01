import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/Flexwrapper";
import styled from "styled-components";
import {SliderR} from "../../../components/Slider/SliderR";
import {SliderI} from "../../../components/Slider/SliderI";

export const Achievements = () => {
    return (
        <StyledAchiv id={'achievements'}>

            <FlexWrapper direction={"column"} align={"center"}>
                <SectionTitle>Achivments</SectionTitle>
                <Icon iconId={'quote'}/>
                <SliderI/>
            </FlexWrapper>
            <FlexWrapper direction={"column"} align={"center"}>
                <SectionTitle>Reviews</SectionTitle>
                <Icon iconId={'quote'}/>
                <SliderR/>
            </FlexWrapper>
        </StyledAchiv>
    );
};

const StyledAchiv = styled.section`
    box-sizing: border-box;
    height:100vh;
    background-color: #33f8ff;
    display: flex;
    //flex-direction: row;
    justify-content: space-around;
    padding-top: 50px;
    //width: 100%;    
  
   
    

`

