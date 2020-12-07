import { Instagram, Mail } from "react-feather";
import { media, theme } from "../styles";

import Fade from "react-reveal/Fade";
import Link from "next/link";
import React from "react";
import { links } from "./nav";
import styled from "styled-components";

const { colors, fontSizes } = theme;

const Footer = () => (
  <Background>
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-4">
          <Fade bottom>
            <div className="mt-4 pt-2 mb-4 mb-lg-0 pb-2 pb-lg-0">
              <Brand>2381 Robotics</Brand>
              <BrandDescription>Ottawa, Ontario, Canada</BrandDescription>
              <Socials>
                <Social href="https://www.instagram.com/2381_kernel_bye/">
                  <Instagram size="21px" />
                </Social>
                <Social href="mailto:hello@2381.ca">
                  <Mail size="21px" />
                </Social>
              </Socials>
            </div>
          </Fade>
        </div>
        <div className="col-12 col-lg-8">
          <Fade bottom>
            <div className="row">
              {links.map(
                (link) =>
                  link.nested && (
                    <LinkWrapper key={`footer${link.href}`}>
                      <Link href={link.href}>
                        <MainLink>{link.name}</MainLink>
                      </Link>

                      {link.nested.map((nested) => (
                        <Link
                          href={link.href + nested.href}
                          key={`footer${link.href + nested.href}`}
                        >
                          <DropdownLink>{nested.name}</DropdownLink>
                        </Link>
                      ))}
                    </LinkWrapper>
                  )
              )}
            </div>
          </Fade>
        </div>
      </div>
    </div>
  </Background>
);

export default Footer;

const Background = styled.div`
  background-color: ${colors.secondary};
  height: auto;
  padding: 3rem 0;
  width: 100%;
`;

const Brand = styled.h4`
  color: ${colors.white};
  font-size: ${fontSizes.md};
  ${media.md`font-size: ${fontSizes.lg};`}
  font-weight: 600;
`;

const BrandDescription = styled.p`
  color: ${colors.white};
  font-size: ${fontSizes.sm};
  font-weight: 500;
  margin-bottom: 0.75rem;
  opacity: 0.4;
`;

const Socials = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const Social = styled.a`
  color: ${colors.white} !important;
  cursor: pointer;
  margin-right: 1rem;
  opacity: 0.4;
  transition: ${theme.transition};

  &:hover {
    opacity: 0.8;
  }
`;

const LinkWrapper = styled.div.attrs({
  className: "col-12 col-md-6 col-lg-4 d-flex flex-column",
})`
  margin: 1.5rem 0 !important;
  ${media.lg`margin-top: 0;`};
`;

const MainLink = styled.a`
  color: ${colors.white} !important;
  cursor: pointer;
  font-size: ${fontSizes.xs};
  font-weight: 600;
  opacity: 0.4;
  text-decoration: none !important;
  text-transform: uppercase;
  transition: ${theme.transition};

  &:hover {
    opacity: 0.8;
  }
`;

const DropdownLink = styled.a`
  color: ${colors.white} !important;
  cursor: pointer;
  font-size: ${fontSizes.md};
  font-weight: 600;
  margin: 0.5rem 0 0;
  opacity: 0.5;
  text-decoration: none !important;
  transition: ${theme.transition};

  &:hover {
    opacity: 0.9;
  }
`;
