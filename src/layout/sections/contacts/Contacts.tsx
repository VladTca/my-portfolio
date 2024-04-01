import React from 'react';
import styled from "styled-components";
import {Button} from "../../../components/Button";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/Flexwrapper";
import photo from '../../../assets/images/man1.png'



export const Contact = () => {
    return (
        <FlexWrapper>
            <Photo src={photo}/>
            <StyledContacts>
            <SectionTitle>Contact</SectionTitle>
            <StyledForm id={'contacts'}>
                <label> Name:
                <Field  placeholder={"Enter your name please:"}/>
                </label>
                <label>Email:<Field type="email" placeholder={"Enter your email please:"}/></label>
                <label>Message:<Field  style={{resize: 'none'}} rows={10} cols={50} placeholder={'Place for your message:'} as={'textarea'}/></label>
                <Button type={'submit'}>Send message</Button>
            </StyledForm>
        </StyledContacts></FlexWrapper>
    );
};

const StyledContacts = styled.section`
   height: calc(100vh - 60px - 130px);
    background-color: darkgoldenrod;
    width: 100%;


`
const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
margin: 0 auto;
`


const Field = styled.input.attrs(props => ({
    required: true,
    type: props.type || "text"
}))`
    width: 100%;
`


const Photo = styled.img`
    background-size: contain;
    
    `