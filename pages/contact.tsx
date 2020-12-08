import { media, theme } from "../styles";

import Container from "../components/container";
import Fade from "react-reveal/Fade";
import Head from "next/head";
import Hero from "../components/hero/textual";
import Image from "../components/image";
import React from "react";
import SectionText from "../components/section/text";
import { darken } from "polished";
import styled from "styled-components";

const { colors, fontSizes } = theme;

const hero = {
  pretext: "Colonel By's 2381 Robotics Club",
  heading: "Contact Us",
  lead:
    "Contact us to get more information about the club or to have any of your questions answered.",
  link: {
    caption: "Join Us",
    href: "/join",
  },
};

const socials = [
  {
    platform: "Instagram",
    link: "https://www.instagram.com/2381_kernel_bye/",
    label: "@2381_kernel_bye",
  },
  {
    platform: "Email us",
    link: "mailto:2381kernel.bye@gmail.com",
    label: "2381kernel.bye@gmail.com",
  },
];

const contact = {
  title: "Contact Us",
  content:
    "If you have any questions or concerns, reach out to us through one of the above platforms. If you would like to meet us in person, in non-COVID years our teams meet at our school: Colonel By Secondary School. View the address for this school on the map below.",
};

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - 2381 Robotics</title>
      </Head>
      <Hero {...hero} />
      <Container cls="mb-5 pb-5">
        <Image
          alt="2381 Robotics Team"
          src="https://i.ibb.co/CMghFYT/2381c-robotics.jpg"
        />
      </Container>

      <div className="container">
        <div className="row mb-4">
          <div className="col-md-1" />
          <div className="col-12 col-md-10">
            <div className="row d-flex justify-content-center">
              {socials.map((platform) => (
                <div
                  className="col-12 col-sm-4 mb-4 d-flex flex-column align-items-center justify-content-center mr-3"
                  key={platform.platform}
                >
                  <Fade bottom>
                    <GrayDetail>{platform.platform}</GrayDetail>
                    <PlatformLink href={platform.link}>
                      {platform.label}
                    </PlatformLink>
                  </Fade>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-1" />
        </div>
      </div>

      <div className="my-3 py-3" />
      <SectionText {...contact} />
      <iframe
        width="100%"
        height="600"
        frameBorder="0"
        scrolling="no"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=2381%20Ogilvie%20Road+(Colonel%20By%20Secondary%20School)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
      <div className="my-2 py-2"></div>
      <div className="my-3 py-3" />
    </>
  );
}

const Detail = styled.p`
  color: ${colors.primary};
  font-size: ${fontSizes.xs};
  font-weight: 600;
  text-transform: uppercase;
`;

const GrayDetail = styled(Detail)`
  color: ${colors.secondary};
  opacity: 0.6;
  margin-bottom: 0.5rem;
`;

const PlatformLink = styled.a`
  color: ${colors.primary} !important;
  cursor: pointer;
  font-size: ${fontSizes.md};
  ${media.md`font-size: ${fontSizes.lg}`};
  font-weight: 500;
  max-width: 750px;
  padding: 0 0 2rem;
  text-align: center;
  text-decoration: none !important;

  &:hover {
    color: ${darken(0.1, colors.primary)} !important;
  }
`;
