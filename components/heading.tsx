import { media, theme } from "../styles";

import { css } from "styled-components";

const { colors } = theme;

const Heading = css`
  color: ${colors.secondary};
  font-size: ${(props) => props.fontSize.base};
  ${media.md`font-size: ${(props) => props.fontSize.md}`};
  font-weight: 600;
`;

export default Heading;
