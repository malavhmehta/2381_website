import CardText from "../../components/card/text";
import Container from "../../components/container";
import Head from "next/head";
import { Heading2 } from "../../components/heading";
import Hero from "../../components/hero/pattern";
import React from "react";
import Related from "../../components/related";

const hero = {
  heading: "Gallery",
  lead: "A photo album of 2381 Robotics at different VEX events.",
  imageSrc: "https://i.ibb.co/6YX0wg2/vex-head.jpg",
  primary: {
    href: "/join",
    name: "Join Us",
  },
  secondary: {
    href: "/media/yt",
    name: "2381 on YouTube",
  },
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

const towerTakeover = [
  {
    href:
      "https://drive.google.com/drive/u/0/folders/1mTjNzdsFDy7kiJK8qhC331bIOTjj0UDC",
    title: "Ontario Provincials",
    description: "66 photos",
  },
  {
    href:
      "https://drive.google.com/drive/u/6/folders/18gLJHge_CHOQOs0BHWHIPp5_gZOa9JKc",
    title: "Terrebonne",
    description: "164 photos",
  },
  {
    href:
      "https://photos.google.com/share/AF1QipO01c3H7JvrLQfxeWiFvE_NLCesDUHPQv_PnNe3H0CqmGANp-jbsksM9wF8WM7ksw?key=bHBPaVg3S3ZCMXlnek5HcmpLc2JOVUlkaWNJSmhB",
    title: "Lockheed Martin 2nd Event",
    description: "39 photos",
  },
  {
    href:
      "https://www.amazon.ca/photos/share/R2LkE5kMRNOpC1913BaCKF60J6t8DNZRI2nPMb3CiUk",
    title: "Massey Vanier",
    description: "200+ photos",
  },
];

const turningPoint = [
  {
    href:
      "https://drive.google.com/drive/u/0/folders/1w53CrQa11B6j7D-da8XIaobzuKsXwW13",
    title: "Terrebonne",
    description: "14 videos",
  },
];

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Gallery - 2381 Robotics</title>
      </Head>
      <Hero {...hero} />
      <Container cls="mt-5 pt-5 mb-3 pb-3">
        <Heading2>Tower Takeover (2019-2020)</Heading2>
      </Container>
      <div className="container">
        <div className="row">
          {towerTakeover.map((link) => (
            <div className="col-12">
              <a href={link.href} style={{ textDecoration: "none !important" }}>
                <CardText title={link.title} description={link.description} />
              </a>
            </div>
          ))}
        </div>
      </div>
      <Container cls="mt-5 pt-5 mb-3 pb-3">
        <Heading2>Turning Point (2018-2019)</Heading2>
      </Container>
      <div className="container">
        <div className="row">
          {turningPoint.map((link) => (
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
