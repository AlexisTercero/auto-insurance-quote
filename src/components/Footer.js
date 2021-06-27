import React from 'react';
import styled from '@emotion/styled';

const Footer = () => {
  return (
    <Foot>
      <Row>
        <Colimg>
          <a href="mailto:alexisdealmeyda@gmail.com" id="logo">
            <img src="/images/envelope.svg" alt="E-mail" />
          </a>
        </Colimg>
        <Col>
          <p>ALEXIS DE ALMEYDA © 2021</p>
        </Col>
        <Colimg>
          <a href="https://github.com/AlexisTercero" id="logo">
            <img src="/images/github.svg" alt="GitHubLogo" />
          </a>
        </Colimg>
      </Row>
    </Foot>
  );
};

export default Footer;

const Foot = styled.div`
  color: white;
  font-size: 13px;
  font-weight: bolder;
  letter-spacing: 0.5px;
  box-shadow: 0px 9px 12px #b0bdff;
  background-color: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(15px);
  padding-top: 0.3em;
  padding-left: 9px;
  padding-right: 9px;
  position: relative;
  bottom: 0;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  @media (max-width: 500px) {
    font-size: 10px;
  }
`;

const Row = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Colimg = styled.div`
  width: 27px;
  opacity: 96%;
  &:hover {
    opacity: 80%;
  }
  @media (max-width: 500px) {
    width: 20px;
  }
`;

const Col = styled.div``;
