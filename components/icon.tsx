import { rgba } from "polished";
import styled from "styled-components";
import { theme } from "../styles";

const renderSVG = (IconReference) => <IconReference size={"48"} />;

type IconProps = {
  reference: any;
  color: string;
  opaque?: boolean;
};

const Icon = ({ reference, color, opaque }: IconProps) => (
  <StyledIcon color={color} opaque={opaque === null ? true : opaque}>
    {renderSVG(reference)}
  </StyledIcon>
);

export default Icon;

const StyledIcon = styled.div`
  align-items: center;
  background-color: ${({ color }) => rgba(color, 0.05)};
  border-radius: 50%;
  color: ${({ color }) => color};
  display: flex;
  height: 55px;
  justify-content: center;
  transition: ${theme.transition};
  width: 55px;

  svg {
    color: ${({ color }) => color};
    height: 40%;
    opacity: ${({ opaque }) => (opaque ? 1 : 0.5)};
    stroke-width: 2px;
    width: 450%;
    transition: ${theme.transition};
  }
`;
