import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/Flexwrapper";
import photo from "../../../assets/images/support1.png";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

// ++
export const Main = () => {
  return (
    <StyledMain id={"home"}>
      <Container>
        <FlexWrapper
          align={"center"}
          justify={"space-between"}
          direction={"row"}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <SmallText>Hi👋, I’m a software developer</SmallText>
            <NameVT>Vladimir Tcaciuc</NameVT>
            <NameVT>ready for</NameVT>
            <MainTitle>Design, Coding and Testing.</MainTitle>
            <StyledDescription>
              I have <span>experience in web development</span> and I am always
              looking for new things to learn.
            </StyledDescription>
            <Button>
              <a style={{ textDecoration: "none" }} href={"#contacts"}>
                Contact me
              </a>
            </Button>
          </div>
          <PhotoWrapper>
            <Photo src={photo} alt="" />
          </PhotoWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  display: flex;
  height: 100vh;
`;
const Photo = styled.img`
  width: 300px;
  height: 330px;
  object-fit: cover;
`;

const MainTitle = styled.h1`
  font-size: 30px;
  font-style: italic;
  text-decoration: underline;
`;

const NameVT = styled.h2`
  font-size: 32px;

  font-weight: 600;
  letter-spacing: 0.18px;
  color: ${theme.colors.font};
`;

const StyledDescription = styled.p`
  margin-top: 20px;
  color: rgba(0, 0, 0, 0.7);
  font-size: 18px;
  font-weight: 700;

  span {
    position: relative;
    z-index: 0;

    &:before {
      content: " ";
      display: inline-block;
      width: 100%;
      height: 5px;
      background-color: ${theme.colors.accent};
      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }
`;

const SmallText = styled.span`
  font-size: 14px;
  font-weight: 400;
  text-align: left;
`;

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;

  &::before {
    content: " ";
    width: 300px;
    height: 330px;
    background-color: black;
    position: absolute;
    z-index: -1;
  }

  &::after {
    content: " ";
    width: 300px;
    height: 330px;
    border: 5px solid ${theme.colors.accent};
    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -2;
  }
`;
