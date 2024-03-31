import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/Slider/Flexwrapper";


export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'} align={'center'}>
                <Name>My Social Networks</Name>
                <SocialList>
                    <SocialItem>

                        <SocialLink>
                            <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'instagram'}/>
                            <p>Instagram</p>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>

                        <SocialLink>
                            <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'telegram'}/>
                            <p>Telegram</p>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>

                        <SocialLink>
                            <Icon height={'120px'} width={'120px'} viewBox={'0 0 120px 120px'} iconId={'icon'}/>
                            <p>VK</p>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>

                        <SocialLink>
                            <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'linkedin'}/>
                            <p>LinkedIn</p>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>© 2024 Vladimir Tcaciuc, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
    background-color: #6e4f11;
    min-height: 20vh;

`
const Name = styled.span`



`
const SocialList = styled.ul`
display: flex;
gap:30px;
list-style: none;
    
`
const SocialItem = styled.li`
width: 100%;


`
const SocialLink = styled.a`



`
const Copyright = styled.small`


`