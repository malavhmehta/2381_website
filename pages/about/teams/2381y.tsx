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
  heading: "Team 2381Y",
  lead:
    "Team 2381Y has 3 years of experience, starting with Turning Point in the 2018-2019 season. They qualified to the Worlds Championship last year.",
  imageSrc: "https://i.ibb.co/DQH03gw/2381y.jpg",
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
  imageSrc: "https://i.ibb.co/DQH03gw/2381y.jpg",
  label: "2381Y at Massey Vanier (2019)",
  description:
    "Members: Jeffrey Li (Captain), Evan Guo (Captain), Ethan Wu, Eshwar Chockalingam, Jeffrey Zhang, Jenna Wang and Jon Ma",
};

const stats = [
  {
    value: -1,
    label: "excellence awards",
  },
  {
    value: -1,
    label: "robot skills championship awards",
  },
  {
    value: -1,
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
      name: "2381C",
      href: "/about/teams/2381C",
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
        <title>Team 2381Y - 2381 Robotics</title>
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
