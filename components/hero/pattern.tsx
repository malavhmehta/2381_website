import { ArrowButton, ArrowButtonLight } from "../button";
import { media, theme } from "../../styles";

import Fade from "react-reveal/Fade";
import Heading from "../heading";
import Image from "../image";
import Link from "next/link";
import { rgba } from "polished";
import styled from "styled-components";

const { colors, fontSizes } = theme;

type PatternProps = {
  heading: string;
  lead: string;
  imageSrc: string;
  primary: {
    href: string;
    name: string;
  };
  secondary: {
    href: string;
    name: string;
  };
};

const Hero = ({
  heading,
  lead,
  imageSrc,
  primary,
  secondary,
}: PatternProps) => (
  <Background>
    <div className="container">
      <Row>
        <Col>
          <Fade bottom>
            <Heading1
              fontSize={{
                base: fontSizes.xl5,
                md: fontSizes.xl6,
              }}
            >
              {heading}
            </Heading1>
          </Fade>
          <Lead>{lead}</Lead>

          <Buttons>
            <ArrowButtonLight href={secondary.href}>
              {secondary.name}
            </ArrowButtonLight>
            <div className="mx-2"></div>
            <ArrowButton href={primary.href}>{primary.name}</ArrowButton>
          </Buttons>
        </Col>

        <div className="col-12 col-lg-7 mb-5 mb-lg-0 mt-lg-5">
          <Image alt={heading} src={imageSrc} />
        </div>
      </Row>
    </div>
  </Background>
);

export default Hero;

const Background = styled.div`
  background: linear-gradient(
    135deg,
    ${colors.white} 0%,
    ${colors.white} 62.5%,
    ${colors.secondary} 62.5%,
    ${colors.secondary} 100%
  );
  border-bottom: 2px solid ${rgba(colors.secondary, 0.04)};
  min-height: 100vh;
  width: 100vw;
`;

const Row = styled.div.attrs({
  className: "row d-flex align-items-center",
})`
  min-height: 100vh;
`;

const Col = styled.div.attrs({
  className: "col-12 col-lg-5",
})`
  margin-top: 7rem;
  ${media.md`margin-top: 10rem;`};
  ${media.lg`margin-top: 0;`};
  margin-bottom: 2rem;
  ${media.lg`margin-bottom: 0;`};
`;

const Heading1 = styled.h1`
  ${Heading}
`;

const Lead = styled.p`
  color: ${rgba(colors.secondary, 0.6)};
  font-size: ${fontSizes.lg};
  ${media.md`font-size: ${fontSizes.xl};`}
  font-weight: 500;
  max-width: 650px;
  padding: 1.8rem 0 1.2rem;
`;

const Buttons = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
`;
