import Head from "next/head";
import Hero from "../../components/hero/pattern";
import React from "react";
import Related from "../../components/related";
import SectionImage from "../../components/section/image";
import SectionTable from "../../components/section/table";
import SectionText from "../../components/section/text";
import SectionVideo from "../../components/section/video";

const hero = {
  heading: "Competition Game",
  lead:
    "How does a VEX competition work? What is the VEX game that 2381's teams will compete in this year?",
  imageSrc: "https://i.ibb.co/2h2Y2Qd/game-head.jpg",
  primary: {
    href: "/join",
    name: "Join Us",
  },
  secondary: {
    href: "/vex",
    name: "About VEX",
  },
};

const format = {
  title: "Competition Format",
  content:
    "All VEX events are held to the same competition format, a one day regional event, 2 day provincial event, and multi day national and international event.",
  imageSrc: "https://i.ibb.co/cLNhJyL/teamwork.jpg",
};

const schedule = {
  title: "Event Schedule",
  content: (
    <>
      Teams will show up at competitions early in the morning, find their pits,
      and setup there. Throughout the day, teams will compete in alliances, one
      alliance as red, and the other as blue.
      <br />
      <br />
      Each alliance consists of two robots, randomly paired. As the scores for
      these matches are tallied, the rankings for individual teams are listed.
      At the end of the qualification matches, the final rankings are posted.
      There will then be 20-30 minutes for teams to circulate and scout other
      robots, looking for alliance partners.
      <br />
      <br />
      At the end of the scouting period, the top 8 seeded alliances choose two
      partners to play with them through the elimination matches. Elimination
      matches are best two of three, with the teams being folded 1-8, 2-7, 3-6,
      and 4-5. Most events are live-streamed.
    </>
  ),
};

const qualification = {
  title: "Qualification",
  content:
    "In order to qualify for Provincial Championships, the team must receive either an award (such as Design, Innovate, and Excellence), or become tournament finalists or semi-finalists. Whether or not certain spots qualify depends on the number of people attending – the more teams, the more people will qualify. It is also possible to qualify through skills, although this depends on the open spots available. To qualify for worlds, you must have a skills score in the top 35 worldwide or receive an award at your Provincial Championships.",
  imageSrc: "https://i.ibb.co/wdv91ZJ/team-sec1.jpg",
};

const game = {
  title: "This Year: Change Up",
  content:
    "VEX Robotics Competition Change Up is played on a 12’x12’ square field configured as seen above. Two (2) Alliances – one (1) “red” and one (1) “blue” – composed of two (2) Teams each, compete in matches consisting of a fifteen (15) second Autonomous Period, followed by a one minute and forty-five second (1:45) Driver Controlled Period. The object of the game is to attain a higher score than the opposing Alliance by placing Balls in Goals, and Connecting Rows.",
  videoSrc: "https://www.youtube.com/watch?v=Hxs0q9UoMDQ",
  link: {
    href: "https://www.youtube.com/watch?v=Hxs0q9UoMDQ",
    name: "View VEX Robotics Reveal Video",
    ext: true,
  },
};

const details = {
  title: "Change Up Details",
  content: (
    <>
      There are thirty-two (32) Balls on a VRC Change Up Field. Sixteen (16) Red
      and sixteen (16) Blue. There are also nine (9) Goals placed around the
      field.
      <br />
      <br />
      Balls are to be Scored in Goals. Each scored Ball is worth 1 point for the
      corresponding Alliance color. The highest scored Ball in a Goal will be
      owned by the corresponding Alliance color.
      <br />
      <br /> If an Alliance owns three goals in any direction (vertical,
      horizontal or diagonal), they will receive a 6 point bonus for a Connected
      Row. But be careful, Balls can be descored by the opposing Alliance at any
      time during the Driver-Control period!
      <br />
      <br />
      The alliance that scores more points in the Autonomous period is awarded
      with (6) bonus points, added to the final score at the end of the match.
      Each Alliance also has the opportunity to earn an additional Win Point by
      completing their Home Row during the Autonomous Period. This Bonus can be
      earned by both Alliances, regardless of who wins the Autonomous Bonus
    </>
  ),
  link: {
    href:
      "https://content.vexrobotics.com/docs/vrc-change-up/Game-Manual-Print-12012020.pdf",
    name: "View the complete game manual",
    ext: true,
  },
};

const scoring = {
  title: "Scoring",
  content: "Points are distributed in the following manner:",
  table: {
    rows: ["Scoring Method", "Points Awarded"],
    cols: [
      [
        "Each Ball Scored in a goal",
        "1 point for the Alliance corresponding to the Ball color",
      ],
      [
        "Each Connected Row",
        "6 points for the Alliance corresponding to the Ball color",
      ],
      ["Autonomous Bonus", "6 points"],
      ["Completed Home Row in Autonomous", "1 Win Point"],
    ],
  },
};

const related = {
  links: [
    {
      name: "About VEX",
      href: "/vex",
    },
    {
      name: "Past Seasons",
      href: "/vex/seasons",
    },
  ],
};

export default function Game() {
  return (
    <>
      <Head>
        <title>Game - 2381 Robotics</title>
      </Head>
      <Hero {...hero} />
      <SectionImage {...format} />
      <SectionText {...schedule} />
      <SectionImage {...qualification} reverse={true} />
      <SectionVideo {...game} />
      <SectionText {...details} />
      <SectionTable {...scoring} />
      <Related {...related} />
    </>
  );
}
