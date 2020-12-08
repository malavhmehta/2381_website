import Head from "next/head";
import Hero from "../../components/hero/pattern";
import React from "react";
import Related from "../../components/related";
import Section from "../../components/section/image";

const hero = {
  heading: "Our Sponsors",
  lead: "A special thanks to all the companies that have helped 2381 Robotics.",
  imageSrc: "https://i.ibb.co/tc3Z831/sponsors-head.jpg",
  primary: {
    href: "/join",
    name: "Join Us",
  },
  secondary: {
    href: "/about",
    name: "About us",
  },
};

const sponsors = [
  {
    title: "Protocase",
    content:
      "Protocase is Kernel Bye’s original sponsor, first partnering with our club in 2017.  The company manufactures custom metal for a variety of different purposes, along with CNC, 3D print, and diecast services. Protocase delivers a whole new experience to engineers and design professionals by delivering custom electronic enclosures with unmatched speed, simplicity and service. Through their gracious sponsorship of a newly established 2381, our Skills Ontario team was able to successfully represent the OCDSB at the regional competition.",
    link: {
      href: "https://www.protocase.com/community/sponsorship/kernel-bye.php",
      name: "More about Protocase x Kernel Bye",
      ext: true,
    },
    imageSrc: "https://i.ibb.co/jhfdHkV/protocase.png",
    imageTinted: false,
  },
  {
    title: "ProBots",
    content:
      "Thank you to Richard Seniuk, the VEX Competition Support Manager in Canada and the owner of ProBots, for lending us some VEX parts and providing us a space to build and test our robot. We would especially like to thank him for helping all teams during competitions when they were having troubles.",
    link: {
      href: "https://probotsottawa.ca/",
      name: "More about Probots Ottawa",
      ext: true,
    },
    imageSrc: "https://i.ibb.co/vwrsD2b/probots.jpg",
    imageTinted: false,
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
      name: "Teams",
      href: "/about/teams",
    },
  ],
};

export default function Sponsors() {
  return (
    <>
      <Head>
        <title>Sponsors - 2381 Robotics</title>
      </Head>

      <Hero {...hero} />

      {sponsors.map((sponsor, index) => (
        <Section
          {...sponsor}
          key={`sponsor${sponsor.title}`}
          reverse={index % 2 === 1}
        />
      ))}

      <Related {...related} />
    </>
  );
}
