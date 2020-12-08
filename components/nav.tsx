import React, { useState } from "react";
import { darken, rgba } from "polished";
import { media, theme } from "../styles";

import Link from "next/link";
import { X as featherX } from "react-feather";
import styled from "styled-components";
import { useRouter } from "next/router";

const { colors, fontSizes } = theme;

type LinksType = {
  name: string;
  href: string;
  nested?: any;
};

export const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
    nested: [
      {
        name: "History",
        href: "/history",
      },
      {
        name: "Teams",
        href: "/teams",
      },
      {
        name: "Sponsors",
        href: "/sponsors",
      },
    ],
  },
  {
    name: "VEX",
    href: "/vex",
    nested: [
      {
        name: "Game",
        href: "/game",
      },
      {
        name: "Seasons",
        href: "/seasons",
      },
    ],
  },
  {
    name: "Media",
    href: "/media",
    nested: [
      {
        name: "Gallery",
        href: "/gallery",
      },
      {
        name: "YouTube",
        href: "/yt",
      },
    ],
  },
  {
    name: "Resources",
    href: "/resources",
    nested: [
      {
        name: "Tips",
        href: "/tips",
      },
      {
        name: "Files",
        href: "/files",
      },
    ],
  },
  {
    name: "Outreach",
    href: "/outreach",
    nested: [
      {
        name: "Posts",
        href: "/posts",
      },
      {
        name: "Calendar",
        href: "/calendar",
      },
    ],
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const Nav = () => {
  const [toggled, setToggled] = useState<boolean>(false);
  const [scroll, setScroll] = useState<{
    prev: number;
    shown: boolean;
    hover: string;
  }>({
    prev: 0,
    shown: true,
    hover: "",
  });

  const handleScroll = () => {
    let pos = window.scrollY;

    if (pos - scroll.prev <= -5 || pos <= 0) {
      setScroll({
        prev: pos,
        shown: true,
        hover: scroll.hover,
      });
    } else if (pos - scroll.prev >= 5) {
      setScroll({
        prev: pos,
        shown: false,
        hover: "",
      });
      setToggled(false);
    }
  };

  const setHover = (href) => {
    let pos = window.scrollY;
    setScroll({
      prev: pos,
      shown: true,
      hover: href,
    });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const router = useRouter();
  let pathname = router.pathname;

  return (
    <Background shown={scroll.shown}>
      <Navbar>
        <Link href="/">
          <Brand>2381 Robotics</Brand>
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            {links.map((link: LinksType) => (
              <li className="nav-item" key={link.href}>
                <Link href={link.href}>
                  <Item
                    active={
                      link.href === pathname ||
                      scroll.hover === link.href ||
                      (link.href.length > 1 &&
                        pathname.length > link.href.length &&
                        pathname.substring(0, link.href.length) === link.href)
                    }
                    onMouseEnter={() => setHover(link.href)}
                    onMouseLeave={() => setHover("")}
                  >
                    {link.name}
                  </Item>
                </Link>

                {link.nested && (
                  <Dropdown
                    show={scroll.hover === link.href}
                    onMouseEnter={() => setHover(link.href)}
                    onMouseLeave={() => setHover("")}
                  >
                    {link.nested.map((nestedLink: LinksType) => (
                      <Link
                        key={nestedLink.href}
                        href={link.href + nestedLink.href}
                      >
                        <DropdownItem disabled={!scroll.shown}>
                          {nestedLink.name}
                        </DropdownItem>
                      </Link>
                    ))}
                  </Dropdown>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="collapse navbar-collapse">
          <Link href="/join">
            <Button>Join Us</Button>
          </Link>
        </div>

        <ToggleButton onClick={() => setToggled(!toggled)}>
          <ToggleIcon />
        </ToggleButton>

        <MobileNav active={toggled} onClick={() => setToggled(false)}>
          <CloseButton>
            <CloseIcon />
          </CloseButton>

          {links.map((link: LinksType) => (
            <div className="nav-item" key={link.href}>
              <Link href={link.href}>
                <MobileItem
                  active={
                    link.href === pathname ||
                    scroll.hover === link.href ||
                    (link.href.length > 1 &&
                      pathname.length > link.href.length &&
                      pathname.substring(0, link.href.length) === link.href)
                  }
                  onMouseEnter={() => setHover(link.href)}
                  onMouseLeave={() => setHover("")}
                >
                  {link.name}
                </MobileItem>
              </Link>

              {link.nested && (
                <MobileDropdown
                  show={scroll.hover === link.href}
                  onMouseEnter={() => setHover(link.href)}
                  onMouseLeave={() => setHover("")}
                >
                  {link.nested.map((nestedLink: LinksType) => (
                    <Link
                      key={nestedLink.href}
                      href={link.href + nestedLink.href}
                    >
                      <MobileDropdownItem disabled={!scroll.shown}>
                        {nestedLink.name}
                      </MobileDropdownItem>
                    </Link>
                  ))}
                </MobileDropdown>
              )}
            </div>
          ))}

          <div className="w-100 pt-2 pb-3 d-flex justify-content-center align-items-center">
            <Link href="/join">
              <MobileButton className="mx-auto">Join Us</MobileButton>
            </Link>
          </div>
        </MobileNav>
      </Navbar>
    </Background>
  );
};

export default Nav;

const Background = styled.div.attrs({
  className: "fixed-top",
})`
  background-color: ${colors.white};
  transform: translateY(${({ shown }) => (shown ? "0%" : "-120%")});
  transition: ${theme.transition};
  width: 100%;
  z-index: 10;
`;

const Navbar = styled.nav.attrs({
  className: "container navbar navbar-expand-lg navbar-light bg-light",
})`
  background-color: transparent !important;
  padding: 1.1rem 1rem;
  transition: ${theme.transition};
`;

const Brand = styled.a.attrs({
  className: "navbar-brand",
})`
  color: ${colors.primary} !important;
  cursor: pointer;
  font-size: ${fontSizes.xl2} !important;
  ${media.md`
      font-size: 28px;
      padding-top: 0.75rem;
    `}
  font-weight: 700;
`;

const Item = styled.a.attrs({
  className: "nav-link",
})`
  color: ${colors.secondary} !important;
  cursor: pointer;
  font-size: ${fontSizes.smd} !important;
  font-weight: 500 !important;
  opacity: ${({ active }) => (active ? 1 : 0.6)};
  margin: 4px 12px 0;
  padding: 0.6rem 0 !important;
  position: relative;
  transition: ${theme.transition};

  &:before {
    background-color: ${colors.primary};
    bottom: 0.3rem;
    content: "";
    left: 0;
    height: 0.16rem;
    position: absolute;
    transition: ${theme.transition};
    width: ${({ active }) => (active ? "100%" : "0")};
  }

  &:hover {
    opacity: 1;

    &:before {
      width: 100%;
    }
  }
`;

const Dropdown = styled.div`
  align-items: flex-start;
  background-color: ${colors.white};
  border: 1px solid ${rgba(colors.secondary, 0.075)};
  border-radius: ${theme.borderRadius};
  box-shadow: 0 0.05rem 2rem ${rgba(colors.secondary, 0.025)};
  display: flex;
  opacity: ${({ show }) => (show ? 1 : 0)};
  flex-direction: column;
  float: left;
  justify-content: flex-start;
  min-width: 160px;
  overflow: hidden;
  padding: 1.2rem;
  position: absolute;
  transform: translateY(${({ show }) => (show ? 0 : "-10%")});
  transition: ${theme.transition};
`;

const DropdownItem = styled.a`
  color: ${colors.secondary} !important;
  cursor: pointer;
  font-size: ${fontSizes.sm};
  font-weight: 600;
  opacity: 0.6;
  padding-bottom: 0.6rem;
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  transition: ${theme.transition};

  &:last-child {
    padding-bottom: 0;
  }

  &:hover {
    color: ${colors.primary} !important;
    opacity: 1;
    text-decoration: none;
  }
`;

const Button = styled.a.attrs({
  className: "ml-auto",
})`
  background-color: ${colors.primary};
  border-radius: 3px;
  color: ${colors.white};
  cursor: pointer;
  font-size: ${fontSizes.smd};
  font-weight: 600;
  padding: 0.6rem 1.2rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${darken(0.1, colors.primary)};
    color: ${colors.white};
    text-decoration: none;
  }
`;

const ToggleButton = styled.button.attrs({
  className: "navbar-toggler collapsed",
})`
  border: 2.5px solid ${rgba(colors.primary, 0)} !important;
  border-radius: 3px;
  transition: ${theme.transition};
  outline: none;

  &:active,
  &:focus {
    border: 2px solid ${colors.primary} !important;
    border-radius: 3px;
    outline: none;
  }
`;

const ToggleIcon = styled.span.attrs({
  className: "navbar-toggler-icon",
})`
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='${rgba(
    colors.primary,
    1
  )}' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E") !important;
  transition: ${theme.transition};
`;

const MobileNav = styled.nav`
  background-color: ${colors.white};
  border: 1px solid ${rgba(colors.secondary, 0.075)};
  border-radius: ${theme.borderRadius};
  box-shadow: 0 0.5rem 2rem ${rgba(colors.secondary, 0.05)};
  display: flex;
  flex-direction: column;
  left: 0;
  margin: 0 1rem !important;
  opacity: ${(props) => (props.active ? 1 : 0)};
  padding: 1.8rem;
  position: absolute;
  right: 0;
  transform: scale(${(props) => (props.active ? 1 : 0)});
  transform-origin: top right;
  transition: all 0.2s ease-in-out;
  overflow-y: auto;
  height: 85vh;
  top: 1.8rem;
`;

const CloseButton = styled.span`
  cursor: pointer;
  height: 18px;
  margin-left: auto;
  position: relative;
  top: 0;
  width: 18px;
`;

const CloseIcon = styled(featherX)`
  bottom: 0;
  color: ${colors.secondary} !important;
  display: block;
  left: 0;
  margin: 0 !important;
  padding: 0 !important;
  position: relative;
  right: 0;
  top: 0;
  stroke-width: 1.5;
`;

const MobileItem = styled.a`
  color: ${colors.secondary} !important;
  cursor: pointer;
  font-size: ${fontSizes.sm};
  font-weight: 600;
  opacity: 1;
  margin: 8px 15px 0;
  padding: 0.6rem 0 !important;
  position: relative;
  transition: ${theme.transition};

  &:hover {
    text-decoration: none;
  }
`;

const MobileButton = styled(Button)`
  margin: 0.75rem 0 !important;
  text-align: center;
  width: 100% !important;
`;

const MobileDropdown = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem 15px 1.8rem;
`;

const MobileDropdownItem = styled.a`
  color: ${colors.secondary} !important;
  cursor: pointer;
  font-size: ${fontSizes.sm};
  font-weight: 600;
  opacity: 0.6;
  padding-bottom: 0.6rem;
  transition: ${theme.transition};
  &:last-child {
    padding-bottom: 0;
  }
  &:hover {
    opacity: 1;
    text-decoration: none;
  }
`;
