import { ArrowRight } from "react-feather";
import Link from "next/link";
import { darken } from "polished";
import styled from "styled-components";
import { theme } from "../styles";

const { colors, fontSizes } = theme;

const Button = styled.a.attrs({
  className: "btn",
})`
  background-color: ${colors.primary};
  border-radius: 3px;
  color: ${colors.white} !important;
  font-size: ${fontSizes.smd};
  font-weight: 600;
  padding: 0.8rem 1.4rem;
  transition: ${theme.transition};
  transform: none;

  &:active,
  &:hover {
    background-color: ${darken(0.1, colors.primary)};
    text-decoration: none;
    outline: none;
  }

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: ${theme.boxShadow};
  }

  &:focus {
    box-shadow: none;
  }

  &:disabled {
    cursor: no-drop;
    opacity: 0.7;
  }
`;

export const ButtonLight = styled(Button)`
  background-color: ${colors.light} !important;
  color: ${colors.primary} !important;

  &:active,
  &:hover {
    background-color: ${darken(0.025, colors.light)} !important;
    box-shadow: none !important;
  }
`;

export const Right = styled(ArrowRight)`
  height: 22px;
  margin-left: 0.25rem;
  stroke-width: 1.5px;
  transform: translateY(-0.5px);
  width: 22px;
`;

export const ArrowButton = (props) => (
  <Link href={props.href}>
    <Button {...props}>
      {props.children} <Right />
    </Button>
  </Link>
);

export const ArrowButtonLight = (props) => (
  <Link href={props.href}>
    <ButtonLight {...props}>
      {props.children} <Right />
    </ButtonLight>
  </Link>
);

export default Button;
