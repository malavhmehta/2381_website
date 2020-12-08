import Head from "next/head";
import Hero from "../../components/hero/pattern";
import React from "react";
import Related from "../../components/related";

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

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Gallery - 2381 Robotics</title>
      </Head>
      <Hero {...hero} />
      <Related {...related} />
    </>
  );
}
