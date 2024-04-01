import {FlexWrapper} from "../Flexwrapper";
import styled from "styled-components";

export const SliderR = () => {
    return (
        <StyledSlider>
            <FlexWrapper>

                <Slide>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.</Text>
                    <Name>@ivan ivanow</Name>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span></span>
                <span></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    );
};


const StyledSlider = styled.div`
    border: 1px solid red;
  width:40vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    height:60%;
    justify-content: space-between;

`

const Slide = styled.div`


    text-align: center;

`

const Text = styled.p`


`

const Name = styled.span`


`

const Pagination = styled.div`
span{
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 5px;background-color: black;
    
    
    
}

`