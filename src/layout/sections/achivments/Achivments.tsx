import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/Flexwrapper";
import styled from "styled-components";
import {SliderR} from "../../../components/Slider/SliderR";
import {SliderI} from "../../../components/Slider/SliderI";

export const Achivments = () => {
    return (
        <StyledAchiv>

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
    height: calc(100vh - 60px - 130px);
    background-color: #33f8ff;
    display: flex;
    //flex-direction: row;
    justify-content: space-around;
    //width: 100%;    
   
    

`

