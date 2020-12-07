import React, { useRef, useState } from "react";
import { media, theme } from "../../styles";

import Container from "../../components/container";
import Head from "next/head";
import { Heading2 } from "../../components/heading";
import Hero from "../../components/hero/pattern";
import Related from "../../components/related";
import SectionImage from "../../components/section/image";
import SectionTable from "../../components/section/table";
import SectionText from "../../components/section/text";
import SectionVideo from "../../components/section/video";
import { rgba } from "polished";
import styled from "styled-components";

const { colors, fontSizes } = theme;

const hero = {
  heading: "Past Seasons",
  lead:
    "Learn about previous VEX seasons and past competition games in which 2381 Robotics participated.",
  imageSrc: "https://i.ibb.co/cyY1Whj/season-head.jpg",
  primary: {
    href: "/join",
    name: "Join Us",
  },
  secondary: {
    href: "/vex",
    name: "About VEX",
  },
};

const seasons = [
  {
    name: "Tower Takeover (2019-2020)",
    game: {
      title: "Tower Takeover (2019-2020)",
      content:
        "VEX Robotics Competition Tower Takeover is played on a 12’x12’ square field configured as seen above. Two (2) Alliances – one (1) “red” and one (1) “blue” – composed of two (2) Teams each, compete in matches consisting of a fifteen (15) second Autonomous Period, followed by a one minute and forty-five second (1:45) Driver Controlled Period. The object of the game is to attain a higher score than the opposing Alliance by placing Cubes in Towers, or scoring Cubes in Goals.",
      videoSrc: "https://www.youtube.com/watch?v=_JVQOiw_OUU",
      link: {
        href: "https://www.youtube.com/watch?v=_JVQOiw_OUU",
        name: "View VEX Robotics Reveal Video",
        ext: true,
      },
    },
    details: {
      title: "Details",
      content: (
        <>
          There are sixty-six 66 Cubes on a Tower Takeover Field. Twenty-two
          (22) Green, twenty-two (22) Orange and, twenty-two (22) Purple. There
          are also seven (7) Towers placed around the field. Five (5) of these
          are neutral, with the remaining two being alliance specific. Alliance
          specific Towers may only be utilized by robots of the same alliance.
          <br />
          <br />
          Cubes can be Placed in Towers, or Scored in Goals. Cubes are worth at
          least 1 point when Placed in a Goal Zone. The exact value of each cube
          is determined by how many Cubes of that specific color have been
          Placed in Towers. When Cubes are Placed in or removed from Towers, the
          new values apply to ALL cubes. So the actions of one Robot will impact
          the potential score for both their own alliance, and their opponents.
          <br />
          <br />
          The alliance that scores more points in the Autonomous period is
          awarded with (6) bonus points, added to the final score at the end of
          the match. The Alliance who wins this Autonomous Bonus is also awarded
          2 purple cubes, which may be introduced at any time during the driver
          control period.
        </>
      ),
      link: {
        href:
          "https://content.vexrobotics.com/docs/vrc-turning-point/VRC-TurningPoint-GameManual-20190405.pdf",
        name: "View the complete game manual",
        ext: true,
      },
    },
    scoring: {
      title: "Scoring",
      content: "Points are distributed in the following manner:",
      table: {
        rows: ["Scoring Method", "Points Awarded"],
        cols: [
          [
            "Each Green Cube Scored in a goal",
            "1 point + 1 point for every Green Cube Placed in Towers",
          ],
          [
            "Each Orange Cube Scored in a goal",
            "1 point + 1 point for every Orange Cube Placed in Towers",
          ],
          [
            "Each Purple Cube Scored in a goal",
            "1 point + 1 point for every Purple Cube Placed in Towers",
          ],
          ["Autonomous Bonus", "6 points"],
        ],
      },
    },
    us: {
      title: "How did we do?",
      content:
        "There are sixty-six 66 Cubes on a Tower Takeover Field. Twenty-two (22) Green, twenty-two (22) Orange and, twenty-two (22) Purple. There are also seven (7) Towers placed around the field. Five (5) of these are neutral, with the remaining two being alliance specific. Alliance specific Towers may only be utilized by robots of the same alliance.",
      imageSrc: "https://i.ibb.co/N29ZrHY/tower-takeover.jpg",
    },
  },
  {
    name: "Turning Point (2018-2019)",
    game: {
      title: "Turning Point (2018-2019)",
      content:
        "VEX Robotics Competition Turning Point is played on a 12'x12' square field configured as seen above. Two (2) Alliances -- one (1) 'red' and one (1) 'blue' -- composed of two (2) Teams each, compete in matches consisting of a fifteen (15) second Autonomous Period, followed by a one minute and forty-five second (1:45) Driver Controlled Period. The object of the game is to attain a higher score than the opposing Alliance by High Scoring or Low Scoring Caps, Toggling Flags, and by Alliance Parking or Center Parking Robots on the Platforms.",
      videoSrc: "https://www.youtube.com/watch?v=CDDGBcs0TFM",
      link: {
        href: "https://www.youtube.com/watch?v=CDDGBcs0TFM",
        name: "View VEX Robotics Reveal Video",
        ext: true,
      },
    },
    details: {
      title: "Details",
      content: (
        <>
          There are eight (8) Caps, six (6) Posts, nine (9) Flags, twenty (20)
          Balls, two (2) Alliance Platforms, and one (1) Center Platform.
          <br />
          <br />
          Caps can be Low Scored on the field tiles, or High Scored on Posts,
          for the Alliance whose color is facing up at the end of the match.
          Flags can be Toggled to red or blue, and are Scored for the Alliance
          whose color is Toggled at the end of the match. Low Flags can be
          Toggled by Robots, but High Flags can only be Toggled by Balls.
          Turning Point is intended to be a back and forth game, no scored
          object is safe!
          <br />
          <br />
          Alliance Platforms can be used for Alliance Parking by Robots of the
          same color Alliance as the Platform. The Center Platform can be used
          by Robots from either Alliance for Center Parking. An additional bonus
          is awarded to the Alliance that has the most total points at the end
          of the Autonomous Period.
        </>
      ),
      link: {
        href:
          "https://content.vexrobotics.com/docs/vrc-turning-point/VRC-TurningPoint-GameManual-20190405.pdf",
        name: "View the complete game manual",
        ext: true,
      },
    },
    scoring: {
      title: "Scoring",
      content: "Points are distributed in the following manner:",
      table: {
        rows: ["Scoring Method", "Points Awarded"],
        cols: [
          ["Each Low Flag Toggled", "1 point"],
          ["Each High Flag Toggled", "2 points"],
          ["Each Cap Low Scored", "1 point"],
          ["Each Cap High Scored", "2 points"],
          ["Robot that is Alliance Parked", "3 points"],
          ["Robot that is Center Parked", "6 points"],
          ["Autonomous Bonus", "4 points"],
        ],
      },
    },
    us: {
      title: "How did we do?",
      content:
        "There are sixty-six 66 Cubes on a Tower Takeover Field. Twenty-two (22) Green, twenty-two (22) Orange and, twenty-two (22) Purple. There are also seven (7) Towers placed around the field. Five (5) of these are neutral, with the remaining two being alliance specific. Alliance specific Towers may only be utilized by robots of the same alliance.",
      imageSrc: "https://i.ibb.co/VW6Py8m/turning-point.jpg",
    },
  },
  {
    name: "In The Zone (2017-2018)",
    game: {
      title: "In The Zone (2017-2018)",
      content:
        "VEX Robotics Competition In the Zone is played on a 12’x12’ square field configured as seen above. Two alliances – one “red” and one “blue” – composed of two teams each, compete in matches consisting of a fifteen-second autonomous period followed by one minute and forty-five seconds of driver-controlled play. The object of the game is to attain a higher score than the opposing Alliance by Stacking Cones on Goals, by Scoring Mobile Goals in Goal Zones, by having the Highest Stacks, and by Parking Robots.",
      videoSrc: "https://www.youtube.com/watch?v=1Yo_mlR1VJU",
      link: {
        href: "https://www.youtube.com/watch?v=1Yo_mlR1VJU",
        name: "View VEX Robotics Reveal Video",
        ext: true,
      },
    },
    details: {
      title: "Details",
      content: (
        <>
          There are eighty (80) Cones that can be Stacked on ten (10) Goals [5
          per Alliance] during a Match. Some cones begin in designated locations
          on the field, while others are available to be entered into the field
          during the Match.
          <br />
          <br />
          Each Robot (smaller than 18”x18”x18”) begins a match on one of their
          Alliance Starting Tiles. Each Alliance has three Zones in which they
          can place their Goals. Alliances earn points for Stacking Cones on
          Goals, Scoring Mobile Goals in Goal Zones, having the Highest Stacks,
          and by Parking Robots. A bonus is awarded to the Alliance that has the
          most total points at the end of the Autonomous Period.
        </>
      ),
      link: {
        href: "https://www.robotevents.com/events/33399/uploads/1373/download",
        name: "View the complete game manual",
        ext: true,
      },
    },
    scoring: {
      title: "Scoring",
      content: "Points are distributed in the following manner:",
      table: {
        rows: ["Scoring Method", "Points Awarded"],
        cols: [
          ["Each Cone Stacked on a Goal", "2 points"],
          ["A Mobile Goal Scored in the 5 Point Zone", "5 points"],
          ["A Mobile Goal Scored in the 10 Point Zone", "10 points"],
          ["A Mobile Goal Scored in the 20 Point Zone", "20 points"],
          ["Having the Highest Stack in a Zone", "5 points"],
          ["A Robot that is Parked at the end of the Match", "2 points"],
          [
            "Alliance with the most points at the end of Autonomous",
            "10 points",
          ],
        ],
      },
    },
    us: {
      title: "How did we do?",
      content:
        "There are sixty-six 66 Cubes on a Tower Takeover Field. Twenty-two (22) Green, twenty-two (22) Orange and, twenty-two (22) Purple. There are also seven (7) Towers placed around the field. Five (5) of these are neutral, with the remaining two being alliance specific. Alliance specific Towers may only be utilized by robots of the same alliance.",
      imageSrc:
        "https://i.ibb.co/0YHf8rj/Screen-Shot-2020-12-07-at-5-30-16-PM.png",
    },
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

export default function Seasons() {
  const [hidden, setHidden] = useState<boolean[]>([
    true,
    true,
    true,
    true,
    true,
  ]);

  const toggle = (id) => {
    let temp = [...hidden];
    temp[id] = !temp[id];
    setHidden(temp);
  };

  return (
    <>
      <Head>
        <title>Seasons - 2381 Robotics</title>
      </Head>
      <Hero {...hero} />

      <Container cls="mt-5 pt-5" />

      <SectionText title="Past Seasons" content="" />

      {seasons.map((season, i) => (
        <div key={`__season__${i}`}>
          <Container>
            <Wrapper onClick={() => toggle(i)} first={i === 0}>
              <Toggle>{season.name}</Toggle>
            </Wrapper>
          </Container>
          <div hidden={hidden[i]}>
            <SectionVideo {...season.game} />
            <SectionText {...season.details} />
            <SectionTable {...season.scoring} />
            <SectionImage {...season.us} />
          </div>
        </div>
      ))}
      <Related {...related} />
    </>
  );
}

const Toggle = styled.p`
  color: ${colors.secondary} !important;
  cursor: pointer;
  font-size: ${fontSizes.xl};
  ${media.md`font-size: ${fontSizes.xl2};`};
  font-weight: 600;
  text-decoration: none !important;
  position: relative;
  margin: 0;
  padding: 0;

  &:hover {
    color: ${colors.primary};
  }
`;

const Wrapper = styled.div.attrs({
  className: "col-12",
})`
  border-top: ${({ first }) =>
    first ? `1px solid ${rgba(colors.secondary, 0.15)}` : `none !important`};
  cursor: pointer;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${rgba(colors.secondary, 0.15)};

  &:hover {
    ${Toggle} {
      color: ${colors.primary} !important;
    }
  }
`;
