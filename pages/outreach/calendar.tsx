import Container from "../../components/container";
import Head from "next/head";
import { Heading2 } from "../../components/heading";
import Hero from "../../components/hero/pattern";
import React from "react";
import Related from "../../components/related";
import { theme } from "../../styles";

const { colors } = theme;

const hero = {
  heading: "Outreach",
  lead:
    "How 2381 Robotics has strived to create a positive impact on the robotics community.",
  imageSrc: "https://i.ibb.co/zXC0sMQ/Screen-Shot-2020-12-07-at-5-51-27-PM.png",
  primary: {
    href: "/join",
    name: "Join Us",
  },
  secondary: {
    href: "/vex/game",
    name: "Event Calendar",
  },
};

const related = {
  links: [
    {
      name: "Outreach Programs",
      href: "/outreach",
    },
    {
      name: "Calendar",
      href: "/outreach/calendar",
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
          <iframe
            src="https://calendar.google.com/calendar/embed?src=c_vfnhf55v1r9ln5ok70tvqhbr78%40group.calendar.google.com&ctz=America%2FToronto"
            className="embed-responsive-item"
            scrolling="no"
          ></iframe>
        </div>
      </Container>

      <Related {...related} />
    </>
  );
}

//
