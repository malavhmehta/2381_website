import { media, theme } from "../../styles";

import { ArrowButton } from "../button";
import Fade from "react-reveal/Fade";
import Heading from "../heading";
import { rgba } from "polished";
import styled from "styled-components";

const { colors, fontSizes } = theme;

type TextualProps = {
  pretext?: string;
  heading?: string;
  lead?: string;
  link?: {
    caption: string;
    href: string;
  };
};

const Hero = ({ pretext, heading, lead, link }: TextualProps) => (
  <div className="container">
    <div className="row">
      <div className="col-12">
        <Wrapper>
          <Fade bottom cascade>
            {pretext && <PreText>{pretext}</PreText>}
            {heading && (
              <Heading1
                fontSize={{
                  base: fontSizes.xl6,
                  md: fontSizes.heading,
                }}
              >
                {heading}
              </Heading1>
            )}
            {lead && <Lead>{lead}</Lead>}

            {link && <ArrowButton href={link.href}>{link.caption}</ArrowButton>}
          </Fade>
        </Wrapper>
      </div>
    </div>
  </div>
);

export default Hero;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8.5rem 0 5rem;
  ${media.sm`padding: 12rem 0 5rem`};
  width: 100%;
`;

const Heading1 = styled.h1`
  ${Heading}
`;

const PreText = styled.p`
  color: ${colors.primary};
  font-size: ${fontSizes.xs};
  font-weight: 600;
  text-transform: uppercase;
`;

const Lead = styled.p`
  color: ${rgba(colors.secondary, 0.6)};
  font-size: ${fontSizes.lg};
  ${media.md`font-size: ${fontSizes.xl};`}
  font-weight: 500;
  max-width: 650px;
  padding: 1rem 0 2rem;
  text-align: center;
`;
