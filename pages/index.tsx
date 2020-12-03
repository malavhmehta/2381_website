import Container from "../components/container";
import Head from "next/head";
import Hero from "../components/hero/textual";
import Image from "../components/image";
import React from "react";

const hero = {
  pretext: "Colonel By Secondary School",
  heading: "2381 Robotics",
  lead:
    "2381 Robotics is a high school robotics club run at Colonel By Secondary School in Ottawa, Ontario.",
  link: {
    caption: "Learn More",
    href: "/about",
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - 2381 Robotics</title>
      </Head>
      <Hero {...hero} />
      <Container cls="mb-5 pb-5">
        <Image
          alt="2381 Robotics Team"
          src="https://i.ibb.co/CMghFYT/2381c-robotics.jpg"
        />
      </Container>
    </>
  );
}
