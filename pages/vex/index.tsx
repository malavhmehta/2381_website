import {
  Award,
  Check,
  Copy,
  PenTool,
  Sun,
  UserPlus,
  Users,
} from "react-feather";

import Head from "next/head";
import Hero from "../../components/hero/pattern";
import React from "react";
import Related from "../../components/related";
import SectionImage from "../../components/section/image";
import SectionList from "../../components/section/list";
import SectionText from "../../components/section/text";

const hero = {
  heading: "About VEX Robotics",
  lead: "What exactly is the VEX competition that 2381 Robotics competes in?",
  imageSrc: "https://i.ibb.co/6YX0wg2/vex-head.jpg",
  primary: {
    href: "/join",
    name: "Join Us",
  },
  secondary: {
    href: "/vex/game",
    name: "Current Game",
  },
};

const about = {
  title: "VEX EDR Program",
  content:
    "The VEX EDR (which stands for EDucational Robotics) program is a program that aims to help students become tomorrow’s STEM leaders and problem solvers, aiming to provide a platform of tools for students to learn and discover how to innovate, create, and think differently.",
  imageSrc: "https://i.ibb.co/cLNhJyL/teamwork.jpg",
  link: {
    href: "https://www.vexrobotics.com/",
    name: "More about VEX",
    ext: true,
  },
};

const competition = {
  title: "VEX EDR Competition",
  content:
    "The VEX EDR competition aims to satisfy 3 values: Bold Creativity, Iteration, and Quality along with 4 evolved values: Diverse Collaboration, Pursuit of Excellence, Make it Happen, and Mentorship.",
  items: [
    {
      reference: PenTool,
      title: "Bold Creativity",
      description:
        "The VEX EDR Competition pushes competitors to push for the best solution, not the easiest solution; to think outside of the box and challenge conventional knowledge through unconventional solutions.",
    },
    {
      reference: Copy,
      title: "Iteration",
      description:
        "VEX believes in continuous improvement, from prototypes to early season development to late stage development, tuning, rebuilds, until a final design has been perfected to the best of the team’s ability.",
    },
    {
      reference: Sun,
      title: "Quality",
      description:
        "VEX encourages students to build robots that can be used over and over in intense competition settings, hold up to hundreds of kilometers of travel, and continue to compete to the same world-class level.",
    },
    {
      reference: Users,
      title: "Diverse Collaboration",
      description:
        "Diverse perspectives are critical to solving problems, and the competition encourages iterations between ideas, working cohesively, and listening to all input.",
    },
    {
      reference: Award,
      title: "Pursuit of Excellence",
      description:
        "VEX aims to deliver a simple and flexible system of tools to allow students to deliver beautifully engineered solutions through multiple iterations and experience.",
    },
    {
      reference: Check,
      title: "Make it Happen",
      description:
        "VEX appreciates the challenges that competitors face, accepting the uncertainty and pushing through with a solution despite hard times - reaching a final iteration that may have sprung from roots of failure.",
    },
    {
      reference: UserPlus,
      title: "Mentorship",
      description:
        "VEX EDR Competitions encourage past competitors to become mentors and volunteers to provide the same education to younger competitors in their spare time, leading to continued development in STEM related fields.",
    },
  ],
};

const education = {
  title: "Educational Aspects",
  content: (
    <ul>
      <li>
        90% of coaches report their students are more interested in science and
        technology
      </li>
      <li>80% of students go into science and technology related fields.</li>
      <li>
        93% of students said that participating in VEX made them want to learn
        more about science and technology.
      </li>
      <li>
        89% of participants go to college.
        <ul>
          <li>Of these 89%, 51% took at least 1 engineering course.</li>
          <li>
            60% had at least one work experience that was science or technology
            related.
          </li>
          <li>41% selected an engineering field (7 times more likely than</li>
          others).
        </ul>
      </li>
    </ul>
  ),
};

const related = {
  links: [
    {
      name: "Current Game",
      href: "/vex/game",
    },
    {
      name: "Past Seasons",
      href: "/vex/seasons",
    },
  ],
};

export default function Vex() {
  return (
    <>
      <Head>
        <title>VEX - 2381 Robotics</title>
      </Head>
      <Hero {...hero} />
      <SectionImage {...about} />
      <SectionList {...competition} />
      <SectionText {...education} />
      <Related {...related} />
    </>
  );
}
