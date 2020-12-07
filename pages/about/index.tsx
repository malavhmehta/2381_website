import {
  Calendar,
  Heart,
  MapPin,
  Settings,
  Smile,
  Tool,
  Users,
} from "react-feather";

import Details from "../../components/details/normal";
import Head from "next/head";
import Hero from "../../components/hero/pattern";
import React from "react";
import Related from "../../components/related";
import SectionImage from "../../components/section/image";
import SectionList from "../../components/section/list";
import SectionTeam from "../../components/section/team";

const hero = {
  heading: "About Us",
  lead:
    "Learn more about Colonel By Secondary School's 2381 Robotics — who we are, what we do and how we do it.",
  imageSrc: "https://i.ibb.co/HrMcRGd/about.jpg",
  primary: {
    href: "/join",
    name: "Join Us",
  },
  secondary: {
    href: "/about/history",
    name: "Our History",
  },
};

const about = {
  title: "Who Are We?",
  content:
    "2381 Robotics is a high school robotics club run at Colonel By Secondary School in Ottawa, Ontario. Since its establishment in 2015, the club has inspired years of innovation and Colonel By with multiple competitive teams working on robots for VEX EDR Robotics Competitions where competitors are given a yearly challenge for which they must design, build, program, and drive a robot to complete.",
  imageSrc: "https://i.ibb.co/rsmcCM9/about2.jpg",
  link: {
    href: "/about/teams",
    name: "See our teams",
  },
};

const values = {
  title: "Our Values",
  content:
    "At 2381 Robotics, we believe in hard work, dedication, passion, and most importantly: having fun.",
  items: [
    {
      reference: Tool,
      title: "Hard Work",
      description:
        " Our club provides a productive workspace to prepare for competitions.",
    },
    {
      reference: Users,
      title: "Dedication",
      description:
        "Members are always working with their team, even of outside meetings, to improve their robot.",
    },
    {
      reference: Heart,
      title: "Passion",
      description:
        "We believe that passion is a crucial part of working hard and necessary for success.",
    },
    {
      reference: Smile,
      title: "Fun",
      description:
        "At its core, 2381 Robotics is about having fun while learning and competing.",
    },
  ],
};

const mission = {
  title: "Our Mission",
  content:
    "2381’s mission is to establish a platform to increase interest and involvement in STEM education through robotics. Since 2015, the club has inspired innovation at Colonel By, comprising of 3 competitive teams—2381C, 2381Y, and 2381Z—which participate in VEX Robotics Competitions. Our success has served as inspiration and paved a path for future teams as the club continues to grow.",
  imageSrc: "https://i.ibb.co/M9pjdJK/about3.jpg",
  link: {
    href: "/outreach",
    name: "Learn about our outreach programs",
  },
};

const club = {
  title: "The Kernel Bye Robotics Club",
  description:
    "Robotics Clubs is where the iterative design process, programming, and building come together to produce a competition robot to compete with all over the province, and more. We delve into 3D modelling CAD software to model out robotics on a computer, such as Autodesk Inventor, robot programming algorithms, and good build quality and practices, while learning about robot mechanisms, such as lifts, shooters, and intakes. ",
  cards: [
    {
      icon: Settings,
      title: "Why join?",
      description:
        "To learn how to design, build and program a robot and ultimately prepare to participate competitively in VEX—a game-based engineering challenge—tournaments. You will also have the chance to interact with other members who are as interested as you in robotics.",
    },
    {
      icon: Calendar,
      title: "When do we meet?",
      description:
        "2381 Robotics holds weekly meetings every Tuesday evening, starting from 5PM. For those who are busy at this time, we record all of our meeting and post them on YouTube.",
    },
    {
      icon: MapPin,
      title: "Where do we meet?",
      description:
        "In normal years, we would hold club meetings in room 231 (at Colonel By Secondary School). However, due to COVID-19 restrictions, we are hosting meetings on Discord. Visit the 'contact' page to join our club Discord.",
    },
  ],
};

const mentors = {
  title: "Our Mentors",
  content:
    "2381's mentorship comes from our alumni and our club supervisor. Many of our mentors are also the original founders of our club, and despite having graduated from Colonel By years ago, they continue to volunteer their time to help the club grow and club members improve their skills.",
  items: [
    {
      imageSrc: "https://i.ibb.co/NyFrkN0/ayan.png",
      title: "Name",
      description: "Short bio",
    },
    {
      imageSrc: "https://i.ibb.co/Y746rzW/allen.png",
      title: "Name",
      description: "Short bio",
    },
    {
      imageSrc: "https://i.ibb.co/qpvt1Gs/Malav-Mehta.jpg",
      title: "Name",
      description: "Short bio",
    },
  ],
};

const related = {
  links: [
    {
      name: "History",
      href: "/about/history",
    },
    {
      name: "Teams",
      href: "/about/teams",
    },
    {
      name: "Sponsors",
      href: "/about/sponsors",
    },
  ],
};

export default function About() {
  return (
    <>
      <Head>
        <title>About - 2381 Robotics</title>
      </Head>
      <Hero {...hero} />
      <SectionImage {...about} />
      <SectionList {...values} />
      <SectionImage {...mission} reverse={true} />
      <Details {...club} />
      <SectionTeam {...mentors} />
      <Related {...related} />
    </>
  );
}
