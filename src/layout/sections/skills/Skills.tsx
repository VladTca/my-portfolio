import styled from "styled-components";
import {FlexWrapper} from "../../../components/Flexwrapper";

import {Icon} from "../../../components/icon/Icon";

export const Skills = () => {
    return (
            <StyledSection>
                <fieldset>
                    <legend>About me</legend>
                    <textarea readOnly style={{resize: 'none', border: 'none', outline: 'none'}} rows={20} cols={50}>The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in length, with a chamber built from sarsen megaliths on its eastern end. Both inhumed and cremated human remains were placed within this chamber during the Neolithic period, representing at least nine or ten individuals.</textarea>
                </fieldset>
                <div>
                    <StyledDescription>I have a vast experience in the following web technologies:</StyledDescription>
                    <FlexWrapper style={{flexWrap: 'wrap'}} justify={'space-around'}>
                        <figure>
                            <Icon height={'120px'} width={'120px'} viewBox={'0 0 120px 120px'} iconId={'html'}/>
                            <figcaption>HTML</figcaption>
                        </figure>
                        <figure>
                            <Icon height={'120px'} width={'120px'} viewBox={'0 0 120px 120px'} iconId={'css'}/>
                            <figcaption>CSS</figcaption>
                        </figure>
                        <figure>
                            <Icon height={'120px'} width={'120px'} viewBox={'0 0 120px 120px'} iconId={'js'}/>
                            <figcaption>JavaScript</figcaption>
                        </figure>
                        <figure>
                            <Icon height={'120px'} width={'120px'} viewBox={'0 0 120px 120px'} iconId={'ts'}/>
                            <figcaption>TypeScript</figcaption>
                        </figure>
                        <figure>
                            <Icon height={'120px'} width={'120px'} viewBox={'0 0 120px 120px'} iconId={'react'}/>
                            <figcaption>React</figcaption>
                        </figure>

                        <figure>
                            <Icon height={'120px'} width={'120px'} viewBox={'0 0 120px 120px'} iconId={'redux'}/>
                            <figcaption>Redux</figcaption>
                        </figure>
                        <figure>
                            <Icon height={'120px'} width={'120px'} viewBox={'0 0 120px 120px'}
                                  iconId={'styled-components'}/>
                            <figcaption>Styled Components</figcaption>
                        </figure>
                        <figure>
                            <Icon height={'120px'} width={'120px'} viewBox={'0 0 120px 120px'} iconId={'tailwind'}/>
                            <figcaption>Tailwind</figcaption>
                        </figure>
                        <figure>
                            <Icon height={'120px'} width={'120px'} viewBox={'0 0 120px 120px'} iconId={'bootstrap'}/>
                            <figcaption>Bootstrap</figcaption>
                        </figure>
                        <figure>
                            <Icon height={'120px'} width={'120px'} viewBox={'0 0 120px 120px'} iconId={'sass'}/>
                            <figcaption>Sass</figcaption>
                        </figure>
                        <figure>
                            <Icon height={'120px'} width={'120px'} viewBox={'0 0 120px 120px'} iconId={'express'}/>
                            <figcaption>Express</figcaption>
                        </figure>
                        <figure>
                            <Icon height={'120px'} width={'120px'} viewBox={'0 0 120px 120px'} iconId={'docker'}/>
                            <figcaption>Docker</figcaption>
                        </figure>
                        <figure>
                            <Icon height={'120px'} width={'120px'} viewBox={'0 0 120px 120px'} iconId={'jest'}/>
                            <figcaption>Jest</figcaption>
                        </figure>
                        <figure>
                            <Icon height={'120px'} width={'120px'} viewBox={'0 0 120px 120px'} iconId={'git'}/>
                            <figcaption>Git</figcaption>
                        </figure>
                        <figure>
                            <Icon height={'120px'} width={'120px'} viewBox={'0 0 120px 120px'} iconId={'github'}/>
                            <figcaption>GitHub</figcaption>
                        </figure>
                    </FlexWrapper>
                </div>
            </StyledSection>

    );
};


const StyledDescription = styled.p`
    background-color: orange;

`
const StyledSection = styled.section`
    display: flex;
    width:98%;
    margin-left: 10px;
    gap:3%;
    justify-content: space-around;
    align-items: center;
    
    height: 100vh;
    margin-bottom: 30px;


`