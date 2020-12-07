import { media, theme } from "../styles";

import Fade from "react-reveal/Fade";
import Heading from "./heading";
import Link from "next/link";
import hashCode from "../util/hash";
import { rgba } from "polished";
import styled from "styled-components";

const { colors, fontSizes } = theme;

type LinkProps = {
  href: string;
  name: string;
};

type SectionProps = {
  links: LinkProps[];
};

const Related = ({ links }: SectionProps) => (
  <div className="container my-5 py-5">
    <div className="row">
      <div className="col-12">
        <Fade bottom>
          <Heading2 fontSize={{ base: fontSizes.xl4, md: fontSizes.xl5 }}>
            Related Pages
          </Heading2>
        </Fade>
      </div>
    </div>

    <Fade bottom>
      <div className="row mb-4">
        {links.map((link: LinkProps) => (
          <Link href={link.href} key={hashCode(`related${link.href}`)}>
            <Wrapper>
              <StyledLink>{link.name}</StyledLink>
            </Wrapper>
          </Link>
        ))}
      </div>
    </Fade>
  </div>
);

export default Related;

const Heading2 = styled.h2`
  ${Heading};
  margin-bottom: 3.25rem;
`;

const StyledLink = styled.a`
  color: ${colors.secondary} !important;
  cursor: pointer;
  font-size: ${fontSizes.xl};
  ${media.md`font-size: ${fontSizes.xl2};`};
  font-weight: 600;
  text-decoration: none !important;
  position: relative;

  &:before {
    background-color: ${colors.primary};
    bottom: -0.5rem;
    content: "";
    left: 0;
    height: 0.2rem;
    position: absolute;
    transition: ${theme.transition};
    width: 0;
  }

  &:hover:before {
    width: 100%;
  }
`;

const Wrapper = styled.div.attrs({
  className: "col-12",
})`
  &:first-child {
    border-top: 1px solid ${rgba(colors.secondary, 0.15)};
  }
  cursor: pointer;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${rgba(colors.secondary, 0.15)};

  &:hover {
    ${StyledLink} {
      color: ${colors.primary} !important;
    }
  }
`;
