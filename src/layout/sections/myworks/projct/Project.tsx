import styled from "styled-components";
import {FlexWrapper} from "../../../../components/Flexwrapper";

type WorkPropsType = {
    title: string;
    text: string;
    src: string;
    alt?: string;
}


export const Project = (props: WorkPropsType) => {
    return (
        <StyledWork>

            <FlexWrapper direction={'column'}>
                <Image src={props.src} alt={props.alt}/>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
            </FlexWrapper>
            <FlexWrapper justify={"space-around"}>
                <Link href={'#skills'}>project-code</Link>
            </FlexWrapper>

        </StyledWork>
    );
};

const StyledWork = styled.div`
   
    box-sizing: border-box;
    padding-top: 20px;
    background-color: #ffe869;
    max-width: 540px;
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`

const Image = styled.img`
    height: 30vh;
    width: 100%;
    //background-size: 130px 68px;
    object-fit: scale-down;
    margin-bottom: 10px;
`

const Title = styled.h3`
    margin: 0;



`

const Link = styled.a`
  


`

const Text = styled.p`
    margin: 20px;
    text-align: justify;
    font-style: italic;
  
    &::first-letter {
        color: red;
        font-size: 30px;
        font-weight: bold;
    }
    
    //overflow: hidden;
    //display: -webkit-box;
    //-webkit-box-orient: vertical;
    //-webkit-line-clamp: 3;
    
    //cut text not work with first letter(((((
`

