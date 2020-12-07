import Card from "../../../components/card/image";
import Container from "../../../components/container";
import Head from "next/head";
import { Heading2 } from "../../../components/heading";
import Hero from "../../../components/hero/pattern";
import Link from "next/link";
import React from "react";
import Related from "../../../components/related";
import SectionImage from "../../../components/section/image";
import SectionText from "../../../components/section/text";

const hero = {
  heading: "2381 Teams",
  lead:
    "Learn more about the VEX teams that make up 2381 Robotics at Colonel By Secondary School.",
  imageSrc: "https://i.ibb.co/XZ0nQ6b/2381-history.jpg",
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
  title: "Our teams",
  content:
    "2381 robotics currently boasts 3 competitive teams, 2381C, 2381Y, and 2381Z which participate in VEX Robotics Competitions. We have a very diverse set of bright students coming from all over the city of Ottawa due to the prestigious International Baccalaureate (IB) program offered at Colonel By. Our hardworking members are dedicated individuals who frequently travel around Ontario in order to compete against other VEX teams.",
  imageSrc: "https://i.ibb.co/wdv91ZJ/team-sec1.jpg",
  link: {
    href: "/about",
    name: "More about us",
  },
};

const covid = {
  title: "Impact of COVID-19",
  content:
    "Due to the pandemic and city-wide regulations, all teams are required to work from home. This raised some concerns for a lot of competitors here at 2381, as students at Colonel By Secondary School come from all corners of Ottawa to pursue the IB Diploma program. Despite the challenges posed by COVID, our teams are quickly adjusting to this new environment, with 2381C, 2381Y, and 2381Z already kicking off their competition season!",
  link: {
    href: "/resources/tips",
    name: "Our tips for teams dealing with lockdowns",
  },
};

const teams = [
  {
    imageSrc: "https://i.ibb.co/C20Cht2/2381c.jpg",
    label: "2381",
    emphasis: "C",
  },
  {
    imageSrc: "https://i.ibb.co/DQH03gw/2381y.jpg",
    label: "2381",
    emphasis: "Y",
  },
  {
    imageSrc: "https://i.ibb.co/QpGFHZN/2381z.jpg",
    label: "2381",
    emphasis: "Z",
  },
];

const related = {
  links: [
    {
      name: "About Us",
      href: "/about",
    },
    {
      name: "History",
      href: "/about/history",
    },
    {
      name: "Sponsors",
      href: "/about/sponsors",
    },
  ],
};

export default function Teams() {
  return (
    <>
      <Head>
        <title>Teams - 2381 Robotics</title>
      </Head>
      <Hero {...hero} />

      <SectionImage {...about} />
      <SectionText {...covid} />

      <Container cls="mt-4 mb-3 pb-3">
        <Heading2>Competitive Teams</Heading2>
      </Container>

      <div className="container mb-4 pb-3">
        <div className="row d-flex justify-content-center">
          {teams.map((team) => (
            <div
              className="col-12 col-lg-6 mb-4 pb-2"
              key={team.label + team.emphasis}
            >
              <Link
                href={`/about/teams/${(
                  team.label + team.emphasis
                ).toLowerCase()}`}
              >
                <a style={{ textDecoration: "none" }}>
                  <Card {...team} />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Related {...related} />
    </>
  );
}
