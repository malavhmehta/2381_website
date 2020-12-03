import { MapPin, Tool, User } from "react-feather";

import Container from "../components/container";
import Details from "../components/details";
import Head from "next/head";
import Hero from "../components/hero/textual";
import Image from "../components/image";
import React from "react";

const hero = {
  pretext: "Colonel By Secondary School",
  heading: "2381 Robotics",
  lead:
    "2381 Robotics is a high school robotics club run at Colonel By Secondary School in Ottawa, Ontario.",
  link: {
    caption: "Learn More",
    href: "/about",
  },
};

const about = {
  title: "What does 2381 Robotics do?",
  description:
    "2381 Robotics is a club run in Colonel By Secondary School in Ottawa. We currently have three competitive teams, 2381C, 2381Y, and 2381Z, which meet several times a week in order to work on their robot for VEX Robotics Competitions.",
  cards: [
    {
      icon: User,
      title: "Who?",
      description:
        "Colonel By’s competitive teams are comprised of 40 dedicated high school students, joined by a common goal to collaborate, share knowledge and explore STEM fields.",
    },
    {
      icon: MapPin,
      title: "Where?",
      description:
        "2381 Robotics is a high school robotics club run at Colonel By Secondary School in Ottawa, Ontario. Our club welcomes a very diverse set of bright students coming from all over the city of Ottawa.",
    },
    {
      icon: Tool,
      title: "What?",
      description:
        "VEX is a game-based engineering challenge. 2381 teams are challenged to apply the engineering process to real-world problems in order to design, build, and program a robot for competitions.",
    },
  ],
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - 2381 Robotics</title>
      </Head>
      <Hero {...hero} />
      <Container cls="mb-5 pb-5">
        <Image
          alt="2381 Robotics Team"
          src="https://i.ibb.co/CMghFYT/2381c-robotics.jpg"
        />
      </Container>

      <Details {...about} />
    </>
  );
}
