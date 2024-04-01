import {FlexWrapper} from "../Flexwrapper";
import styled from "styled-components";
import photo from '../../assets/images/skills.png'

export const SliderI = () => {
    return (
        <StyledSlider>
            <FlexWrapper>

                <Slide>
                    <Photo src={photo}/>
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
    overflow: hidden;

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

const Photo = styled.img`
    width: 300px;
    height: 130px;
    object-fit: contain

    
`;