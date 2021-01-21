import Stat, { StatProps } from "../../../components/stats";

import Card from "../../../components/card/image";
import Container from "../../../components/container";
import Head from "next/head";
import { Heading2 } from "../../../components/heading";
import Hero from "../../../components/hero/pattern";
import React from "react";
import Related from "../../../components/related";
import hashCode from "../../../util/hash";

const hero = {
  heading: "Team 2381C",
  lead:
    "2381C is on of 2381's oldest teams, established since our 2381's first year competing in VEX.",
  imageSrc: "https://i.ibb.co/C20Cht2/2381c.jpg",
  primary: {
    href: "/join",
    name: "Join Us",
  },
  secondary: {
    href: "/about",
    name: "About 2381",
  },
};

const about = {
  imageSrc: "https://i.ibb.co/C20Cht2/2381c.jpg",
  label: "2381C at Massey Vanier (2019)",
  description:
    "Members: Allen Tao (Captain), Ayan Hafeez, Edward Song, Malav Mehta, Shreya Voore",
};

const stats = [
  {
    value: 6,
    label: "excellence awards",
  },
  {
    value: 7,
    label: "robot skills championship awards",
  },
  {
    pre: "#",
    value: 9,
    label: "global world skills standings",
  },
];

const related = {
  links: [
    {
      name: "About 2381",
      href: "/about",
    },
    {
      name: "2381Y",
      href: "/about/teams/2381y",
    },
    {
      name: "2381Z",
      href: "/about/teams/2381z",
    },
  ],
};

export default function Team() {
  return (
    <>
      <Head>
        <title>Team 2381C - 2381 Robotics</title>
      </Head>
      <Hero {...hero} />
      <Container cls="my-5 py-5">
        <Card {...about} />
      </Container>

      <Container>
        <Heading2>Change Up Stats</Heading2>
      </Container>

      <div className="container my-4 py-3">
        <div className="row d-flex justify-content-center">
          {stats.map((stat: StatProps) => (
            <Stat {...stat} key={hashCode(stat.label)} />
          ))}
        </div>
      </div>

      <Related {...related} />
    </>
  );
}
