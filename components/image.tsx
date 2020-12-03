import { media, theme } from "../styles";

import Fade from "react-reveal/Fade";
import styled from "styled-components";

const { colors, fontSizes } = theme;

const Wrapper = styled.div`
  height: auto;
  position: relative;
  transition: 0.4s ease-in-out;
  width: 100% !important;
  ${media.sm`width: 90%`};
  ${media.md`width: 85%`};
  ${media.lg`width: 80%`};
  z-index: 20;

  &:before {
    background-color: ${colors.primary};
    border-radius: 6px;
    bottom: 0;
    content: "";
    left: 0;
    opacity: ${({ tinted }) => (tinted ? 0.68 : 0)};
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.4s all ease-in-out;
  }

  &:hover:before {
    opacity: ${({ tinted }) => (tinted ? 0.55 : 0)};
  }

  img {
    border-radius: 6px;
    width: 100% !important;
  }
`;

type ImageProps = {
  alt: string;
  src: any;
  tinted?: boolean;
};

const Image = ({ alt, src, tinted }: ImageProps) => (
  <Fade bottom>
    <Wrapper tinted={tinted == null ? true : tinted}>
      <img className="img-fluid" alt={alt} src={src} />
    </Wrapper>
  </Fade>
);

export default Image;
