import { Description, Detail } from "./text";
import { media, theme } from "../../styles";

import Fade from "react-reveal/Fade";
import Image from "../image";
import { rgba } from "polished";
import styled from "styled-components";

const { colors, fontSizes } = theme;

type CardProps = {
  imageSrc: string;
  label: string;
  emphasis?: string;
  description?: string;
  detail?: string;
};

const Card = ({
  imageSrc,
  label,
  emphasis,
  description,
  detail,
}: CardProps) => (
  <Background>
    <Fade bottom>
      <ImageContainer>
        <Image alt={label + (emphasis ? emphasis : "")} src={imageSrc} />
        <ImageEmphasis>{label + (emphasis ? emphasis : "")}</ImageEmphasis>
      </ImageContainer>
      <div>
        <Label>
          {label}
          {emphasis && <Emphasis>{emphasis}</Emphasis>}
        </Label>
        {detail && (
          <Detail
            style={{ color: colors.primary, marginTop: 0, marginBottom: 0 }}
          >
            {detail}
          </Detail>
        )}
        {description && (
          <Description style={{ margin: "1.25rem 1.5rem" }}>
            {description}
          </Description>
        )}
      </div>
    </Fade>
  </Background>
);

export default Card;

export const Label = styled.p`
  color: ${colors.secondary};
  font-size: ${fontSizes.xl};
  font-weight: 600;
  margin: 1.25rem 1.75rem;
  transition: ${theme.transition};
`;

export const Emphasis = styled.span`
  color: ${colors.primary};
`;

export const ImageContainer = styled.div`
  height: auto;
  position: relative;
  width: 100%;
`;

export const ImageEmphasis = styled.p`
  color: ${colors.white};
  font-size: ${fontSizes.xl5};
  ${media.md`font-size: ${fontSizes.xl6}`};
  font-weight: 700;
  opacity: 0;
  position: absolute;
  margin: auto;
  pointer-events: none;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  transition: ${theme.transition};
  text-align: center;
`;

export const Background = styled.div`
  background-color: ${colors.white};
  border: 1px solid ${rgba(colors.secondary, 0.05)};
  border-radius: 6px;
  cursor: pointer;
  margin: 0;
  padding: 0;
  width: 100%;
  height: auto;
  position: relative;

  &:hover {
    ${Label} {
      color: ${colors.primary};
    }

    ${ImageEmphasis} {
      opacity: 0.75;
    }
  }
`;
