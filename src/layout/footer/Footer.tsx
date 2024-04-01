import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/Flexwrapper";


export const Footer = () => {
    return (
        <StyledFooter>

            <FlexWrapper style={{width: '50vw'}} direction={'column'} align={'center'}>
                <Name style={{margin: '10px 0 0 0 '}}>My social media links</Name>
                <SocialList>
                    <SocialItem>

                        <SocialLink>
                            <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'instagram'}/>
                            <figcaption>Instagram</figcaption>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>

                        <SocialLink>
                            <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'telegram'}/>
                            <figcaption>Telegram</figcaption>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>

                        <SocialLink>
                            <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'vk'}/>
                            <figcaption>VK</figcaption>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>

                        <SocialLink>
                            <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'linkedin'}/>
                            <figcaption>LinkedIn</figcaption>
                        </SocialLink>
                    </SocialItem>
                </SocialList>

            </FlexWrapper>
            <FlexWrapper style={{width: '50vw'}} direction={'column'}>
                <Name style={{display: 'inline-block', margin: '10px 0 20px 0px'}}>More projects I’ve worked on</Name>

                <SocialItem>
                    <SocialLink>
                        <Icon height={'31px'} width={'31px'} viewBox={'0 0 31px 31px'} iconId={'githubsmall'}/>
                        <Name>@VladTca on github</Name>
                    </SocialLink>
                </SocialItem>
            </FlexWrapper>

            <Copyright>© 2024 Vladimir Tcaciuc, All Rights Reserved.</Copyright>

        </StyledFooter>

    );
};


const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-evenly;
    background-color: #6e4f11;
    height: 130px;
    position: relative;

`
const Name = styled.span`



`
const SocialList = styled.ul`
    display: flex;
    gap: 30px;


`
const SocialItem = styled.li`
    width: 100%;
    list-style: none;

`
const SocialLink = styled.a`



`
const Copyright = styled.small`
position: absolute;
bottom:10px;
    align-items: center

`