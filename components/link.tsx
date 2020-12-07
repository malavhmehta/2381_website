import { media, theme } from "../styles";

import NextLink from "next/link";
import React from "react";
import { Right } from "./button";
import styled from "styled-components";

const { colors, fontSizes } = theme;

const StyledLink = styled.a`
  color: ${colors.primary} !important;
  cursor: pointer;
  font-size: ${fontSizes.smd};
  ${media.md`font-size: ${fontSizes.smd};`};
  font-weight: 600;
  text-decoration: none !important;
  position: relative;

  &:before {
    background-color: ${colors.primary};
    bottom: -0.45rem;
    content: "";
    left: 0;
    height: 0.16rem;
    position: absolute;
    transition: ${theme.transition};
    width: 0;
  }

  &:hover:before {
    width: 100%;
  }
`;

type LinkProps = {
  href: string;
  name: string;
  arrow?: boolean;
  ext?: boolean;
};

const Link = ({ href, name, ext }: LinkProps) => {
  return ext ? (
    <StyledLink href={href}>{name}</StyledLink>
  ) : (
    <NextLink href={href}>
      <StyledLink>
        {name} <Right />
      </StyledLink>
    </NextLink>
  );
};

export default Link;
