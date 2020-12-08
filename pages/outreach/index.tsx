import Container from "../../components/container";
import Head from "next/head";
import Hero from "../../components/hero/pattern";
import React from "react";
import Related from "../../components/related";
import SectionImage from "../../components/section/image";
import SectionText from "../../components/section/text";

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

const about = {
  title: "Outreach Programs",
  content:
    "Besides Colonel By Secondary School, members of 2381 have also worked with the community to teach other students about STEM and its connections to robotics especially since not all schools in Ottawa have had the opportunity to provide its students with engineering and robotics opportunities.",
};

const programs = [
  {
    title: "First Lego League Robotics",
    content:
      "In the past, members from 2381 also have coached a First Lego League (FLL) Robotics team composed of middle school students. As FLL and Vex robotics are heavily correlated, members are able to provide insight, providing FLL members with important insight about designing and programming a robot. By mentoring FLL teams, members were able to answer questions and guide the students to meet their goals.",
    imageSrc: "https://i.ibb.co/Fs88H7Q/fll.png",
    imageTinted: false,
  },
  {
    title: "Henry Munro Middle School",
    content:
      "As a small middle school in Ottawa, our members have given presentations at Henry Munro Middle School to teach young students about STEM and robotics. Our main goal was to spark interest in robotics and engineering among young students and to inspire and introduce STEM related opportunities.",
    imageSrc: "https://i.ibb.co/cNRPg8r/henry-munro.jpg",
    imageTinted: false,
  },
  {
    title: "VEX Forum",
    content:
      "As Vex has an international community, 2381 has also made an online presence to teach and communicate with other teams across the world. Many 2381 members have released educational videos, including CAD (Computer-aided design) reveals and robot reveals to inform new teams about different building techniques.",
    imageSrc: "https://i.ibb.co/JCMd1Y9/vex-forum.png",
    imageTinted: false,
  },
];

const related = {
  links: [
    {
      name: "Posts",
      href: "/outreach/posts",
    },
    {
      name: "Calendar",
      href: "/outreach/calendar",
    },
  ],
};

export default function Outreach() {
  return (
    <>
      <Head>
        <title>Outreach - 2381 Robotics</title>
      </Head>
      <Hero {...hero} />
      <Container cls="my-4 py-4" />
      <SectionText {...about} />
      {programs.map((program, index) => (
        <SectionImage
          {...program}
          key={`program${program.title}`}
          reverse={index % 2 === 1}
        />
      ))}
      <Related {...related} />
    </>
  );
}
