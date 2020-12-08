import { MapPin, Tool, User } from "react-feather";
import Stat, { StatProps } from "../components/stats";

import { ArrowButton } from "../components/button";
import CardImage from "../components/card/image";
import CardText from "../components/card/text";
import Container from "../components/container";
import Details from "../components/details/slanted";
import Head from "next/head";
import { Heading2 } from "../components/heading";
import Hero from "../components/hero/textual";
import Image from "../components/image";
import Link from "next/link";
import React from "react";
import { getSortedPostsData } from "../util/posts";
import hashCode from "../util/hash";

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

const about = {
  title: "What does 2381 Robotics do?",
  description:
    "2381 Robotics is a club run in Colonel By Secondary School in Ottawa. We currently have three competitive teams, 2381C, 2381Y, and 2381Z, which meet several times a week virtually in order to work on their robot for VEX Robotics Competitions.",
  cards: [
    {
      icon: User,
      title: "Who?",
      description:
        "Colonel By's 2381 Robotics Club is the home to 40 dedicated high school students, joined by a common goal to collaborate, share knowledge and explore STEM fields.",
    },
    {
      icon: MapPin,
      title: "Where?",
      description:
        "2381 Robotics is a high school robotics club run at Colonel By Secondary School in Ottawa, Ontario. Our club welcomes a very diverse set of bright students coming from all over the city of Ottawa.",
    },
    {
      icon: Tool,
      title: "What?",
      description:
        "VEX is a game-based engineering challenge. 2381 teams are challenged to apply the engineering process to real-world problems in order to design, build, and program a robot for competitions.",
    },
  ],
};

const stats = [
  {
    value: 4,
    label:
      "years of competing in the VEX Robotics Challenge (since 2015 – present)",
  },
  {
    value: 3,
    label: "competitive VRC teams: 2381C, 2381Y and 2381Z",
  },
  {
    value: 4,
    label:
      "seasons of VRC: In The Zone, Turning Point, Tower Takeover, Change Up",
  },
  {
    value: 23,
    label: "VEX tournaments in which 2381 has competed",
  },
  {
    value: 32,
    label: "awards received by the 2381 teams",
  },
];

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

const teamIds = [89114, 100664, 113379];
const seasonId = 139;
const upcomingEvents = [
  // 3 events
  {
    name: "VRC Remote Skills Only Tournament",
    date: "12/05/2020",
    place: "Toronto, Ontario, Canada",
    url:
      "https://www.robotevents.com/robot-competitions/vex-robotics-competition/RE-VRC-20-2473.html",
    teams: ["2381C"],
  },
  {
    name: "VEX MN December Skills-Only Remote Live",
    date: "12/12/2020",
    place: "East Grand Forks, Minnesota, United States",
    url:
      "https://www.robotevents.com/robot-competitions/vex-robotics-competition/RE-VRC-20-2906.html",
    teams: ["2381C"],
  },
];

function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Home - 2381 Robotics</title>
      </Head>
      <Hero {...hero} />
      <Container cls="mb-5 pb-5">
        <Image
          alt="2381 Robotics Team"
          src="https://i.ibb.co/6sBSc9X/IMG-1504-2-1.jpg"
        />
      </Container>

      <Details {...about} />
      <div className="container">
        <div className="row d-flex justify-content-center">
          {stats.map((stat: StatProps, index) => (
            <Stat {...stat} key={hashCode(stat.label)} />
          ))}
        </div>
      </div>

      <Container cls="mt-5 pt-5 mb-3 pb-3">
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
                  <CardImage {...team} />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Container cls="mb-3 pb-3">
        <Heading2>Upcoming Events</Heading2>
      </Container>

      <div className="container pb-3">
        <div className="row d-flex justify-content-center">
          {upcomingEvents.map((event) => (
            <div className="col-12 col-lg-6 mb-4" key={event.url}>
              <a href={event.url} style={{ textDecoration: "none" }}>
                <CardText
                  title={event.name}
                  description={event.place}
                  detail={event.date}
                  tags={event.teams}
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      <Container cls="d-flex justify-content-center mb-5 pb-3">
        <ArrowButton href="/outreach/calendar">
          View all upcoming events
        </ArrowButton>
      </Container>

      <Container cls="mb-3 pb-3">
        <Heading2>2381 News</Heading2>
      </Container>

      <div className="container mb-1">
        <div className="row d-flex justify-content-center">
          {posts.map((post) => (
            <div className="col-12 col-lg-6 mb-4 pb-2" key={post.post}>
              <Link href={`/outreach/posts/${post.post}`}>
                <a style={{ textDecoration: "none" }}>
                  <CardImage
                    label={post.title}
                    description={
                      post.summary.length > 77
                        ? post.summary.substring(0, 77) + "..."
                        : post.summary
                    }
                    detail={post.date}
                    imageSrc={post.image}
                  />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Container cls="d-flex justify-content-center mb-5 pb-3">
        <ArrowButton href="/outreach/posts">View all posts</ArrowButton>
      </Container>
    </>
  );
}

export async function getServerSideProps(context) {
  let posts = getSortedPostsData().slice(0, 2);
  return { props: { posts } };
}

export default Home;
