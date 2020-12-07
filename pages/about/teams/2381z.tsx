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
  heading: "Team 2381Z",
  lead:
    "2381Z is a relatively new team, with Change Up being their second year in VEX. Last year, despite being a freshman team, they won 3 awards and qualified for provincials.",
  imageSrc: "https://i.ibb.co/QpGFHZN/2381z.jpg",
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
  imageSrc: "https://i.ibb.co/QpGFHZN/2381z.jpg",
  label: "2381Z at Massey Vanier (2019)",
  description:
    "Members: Sam Lu (Captain), Danny Zhang, Terrence Zhang, Alice Yang, Jamie Tsai, and Christina Zhang",
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
      href: "/about/teams/2381c",
    },
    {
      name: "2381Y",
      href: "/about/teams/2381y",
    },
  ],
};

export default function Team() {
  return (
    <>
      <Head>
        <title>Team 2381Z - 2381 Robotics</title>
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
