import { media, theme } from "../styles";
import styled, { css } from "styled-components";

const { colors, fontSizes } = theme;

const Heading = css`
  color: ${colors.secondary};
  font-size: ${(props) => props.fontSize.base};
  ${media.md`font-size: ${(props) => props.fontSize.md}`};
  font-weight: 600;
`;

export default Heading;

export const Heading2 = styled.h2`
  color: ${colors.secondary};
  font-size: ${fontSizes.xl3};
  ${media.md`font-size: ${fontSizes.xl4}`};
  font-weight: 600;
`;
