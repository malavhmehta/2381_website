import Head from "next/head";
import Hero from "../components/hero/textual";
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
    </>
  );
}
