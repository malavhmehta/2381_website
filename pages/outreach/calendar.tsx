import Container from "../../components/container";
import Fade from "react-reveal/Fade";
import Head from "next/head";
import { Heading2 } from "../../components/heading";
import Hero from "../../components/hero/pattern";
import React from "react";
import Related from "../../components/related";

const hero = {
  heading: "2381 Calendar",
  lead:
    "A calendar containing VEX tournaments that 2381 teams will be participating in.",
  imageSrc: "https://i.ibb.co/fd9QmtW/massy-vanier.jpg",
  primary: {
    href: "/join",
    name: "Join Us",
  },
  secondary: {
    href: "/outreach",
    name: "Outreach Programs",
  },
};

const related = {
  links: [
    {
      name: "Outreach Programs",
      href: "/outreach",
    },
    {
      name: "Posts",
      href: "/outreach/posts",
    },
  ],
};

export default function Calendar() {
  return (
    <>
      <Head>
        <title>Calendar - 2381 Robotics</title>
      </Head>
      <Hero {...hero} />

      <Container cls="mt-5 pt-5 mb-3 pb-3">
        <Heading2>2381 Event Calendar</Heading2>
      </Container>

      <Container>
        <div className="embed-responsive embed-responsive-4by3">
          <Fade bottom>
            <iframe
              src="https://calendar.google.com/calendar/embed?src=c_vfnhf55v1r9ln5ok70tvqhbr78%40group.calendar.google.com&ctz=America%2FToronto"
              className="embed-responsive-item"
              scrolling="no"
            ></iframe>
          </Fade>
        </div>
      </Container>

      <Related {...related} />
    </>
  );
}
