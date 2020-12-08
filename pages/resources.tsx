import CardText from "../components/card/text";
import Head from "next/head";
import Hero from "../components/hero/pattern";
import React from "react";
import Related from "../components/related";
import SectionImage from "../components/section/image";
import SectionText from "../components/section/text";
import SectionVideo from "../components/section/video";

const hero = {
  heading: "Resources",
  lead:
    "A compilation of resources—some from us, some from VEX—that wil help new VEX teams get started.",
  imageSrc:
    "https://i.ibb.co/M9b7Pgb/Screen-Shot-2020-12-07-at-11-54-29-PM.png",
  primary: {
    href: "/join",
    name: "Join Us",
  },
  secondary: {
    href: "/vex",
    name: "Learn about VEX",
  },
};

const cad = {
  title: "CADs from Robotics Club",
  content:
    "At the weekly robotics clubs meetings, we create CADs to model different building concepts and explain these concepts in a visual manner to newer club members. All of our cads are publicly available at the Google Drive folder linked below.",
  imageSrc:
    "https://i.ibb.co/Kj1BCTS/Screen-Shot-2020-12-08-at-12-30-07-AM.png",
  link: {
    href:
      "https://drive.google.com/file/d/1JcVUn4OUPVhFtpDBmbK35rHFP84PCDVP/view?usp=sharing",
    name: "See folder with all CADs",
    ext: true,
  },
};

const series = {
  title: "Inventor Lesson Videos",
  content:
    "Even if you're not in the 2381 Robotics club, you have access to all of our knowledge! We record all lessons that take place during club meetings and upload them to YouTube. Click the link below for the full lesson playlist.",
  videoSrc: "https://www.youtube.com/watch?v=tK99xqPtoBI",
  link: {
    href:
      "https://www.youtube.com/watch?v=tK99xqPtoBI&list=PLmmB5F_oEM3jAli9_RDf_uguYQcDJlpwH&index=1&ab_channel=AllenTao",
    name: "Full tutorial playlist",
    ext: true,
  },
};

const explanations = {
  title: "Robot Explanations",
  content:
    "At the end of each season, 2381 teams offer a comprehensive explanations of their robot, including explanations for why they made certain choices for their robot. These videos are made public for newer teams to be able to see the thought process of experiences VEX Robotics competitors.",
  videoSrc: "https://www.youtube.com/watch?v=k1RjMWS1V_o",
  link: {
    href:
      "https://www.youtube.com/watch?v=k1RjMWS1V_o&list=PLmmB5F_oEM3gtT3JAC1k7UCapktbILhuM&ab_channel=AllenTao",
    name: "Full explanation playlist",
    ext: true,
  },
};

const about = {
  title: "Useful Links",
  content:
    "A compilation of all the resources that our teams have used in the past and have found useful enough to be shared with you.",
};

const links = [
  {
    href:
      "https://docs.google.com/document/d/16rHDIYW1DokR2OgdgrIROj4frq3OcfQF6blC8hiG6Lo/edit#heading=h.k2nsusg6rv00",
    title: "Robotics Theory Reading List",
    description:
      "A collection of useful articles regarding building and programming a VEX Robot.",
  },
  {
    href: "https://wiki.purduesigbots.com/",
    title: "Purdue Sigbots Knowledge Base",
    description:
      "Electronics, hardware, and software information made public by Purdue Sigbots for the VRC, VEXU, and VEX AI Challenges.",
  },
  {
    href: "https://www.vexrobotics.com/",
    title: "VEX Website",
    description:
      "Resources for everything VEX-related: game announcements, robot parts, programs, etc.",
  },
  {
    href: "https://www.robotevents.com",
    title: "Robot Events",
    description:
      "This website has contains all current events and information about all teams and organizations.",
  },
  {
    href: "https://www.vexforum.com/",
    title: "VEX Forum",
    description:
      "A community of other VEX competitors, where teams can ask questions or chat around with other VEX teams.",
  },
];

const related = {
  links: [
    {
      name: "About VEX",
      href: "/vex",
    },
    {
      name: "Current Game",
      href: "/vex/game",
    },
  ],
};

export default function Resources() {
  return (
    <>
      <Head>
        <title>Resources - 2381 Robotics</title>
      </Head>
      <Hero {...hero} />
      <SectionImage {...cad} />
      <SectionVideo {...series} reverse={true} />
      <SectionVideo {...explanations} />
      <SectionText {...about} />
      <div className="container">
        <div className="row">
          {links.map((link) => (
            <div className="col-12 mb-4">
              <a href={link.href} style={{ textDecoration: "none !important" }}>
                <CardText title={link.title} description={link.description} />
              </a>
            </div>
          ))}
        </div>
      </div>
      <Related {...related} />
    </>
  );
}
