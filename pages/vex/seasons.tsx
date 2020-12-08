import React, { useRef, useState } from "react";
import { media, theme } from "../../styles";

import Container from "../../components/container";
import Head from "next/head";
import { Heading2 } from "../../components/heading";
import Hero from "../../components/hero/pattern";
import Related from "../../components/related";
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
      content: (
        <>
          2381A: Team 2381A was formed in the Tower Takeover season, and
          contained students in sophomore and junior year. The captain being a
          former member of the 2381Y team, 2381A attended 3 competitions where
          their defense focused robots netted them many games - their best
          performance was their #7 placement at the Lockheed Martin VEX EDR
          Qualifier.
          <br />
          <br />
          2381D: This team was formed as an all freshman team, similar to the
          sophomore team (2381Y) founded the prior year. The team worked to
          develop their skills for future years, and managed to qualify for
          eliminations at Lockheed Martin VEX EDR Qualifier #2.
          <br />
          <br />
          2381Z: 2381Z was formed by a group of aspiring juniors, and worked
          tirelessly to create innovative ideas throughout the year, with their
          transmission design initially as well as their 4-bar, breaking from
          the 2bar traybot method that was common during the season. The team
          attended 6 events, including a signature event in Massachusetts, and
          nabbed 3 awards across the season. The team, unfortunately, was not
          able to qualify for worlds due to a last-minute hardware failure, but
          still accomplished a fair bit for their first year.
          <br />
          <br />
          2381Y: The formerly rookie team founded in Turning Point showed
          themselves to be competent once again, putting strong performances
          across 2 provinces such as their semi-finalist spot at VRC Terrebonne,
          as well as their 85 skills score. At the provincial championships,
          their consistent autonomous and strong robot design led to their
          placing 6th, and allying with 2381C, another Kernel Bye team. The team
          unfortunately lost to the eventual world championship finalists (905A
          / 4862B) in semi finals, but found themselves qualifying for worlds
          through their skills score. At (virtual) worlds, the team ranked 49 in
          their division, with a record of 4/5/2.
          <br />
          <br />
          2381C: 2381C found itself in its prime, with a strong start to the
          season, winning Excellence at the first competition they attended in
          Quebec. Soon after, they racked up an impressive 6 trophies, including
          being Tournament Champions 3 times. At provincials, the team ranked
          13th with a record of 5/2/0, and placed an 85 skills score, just
          missing qualification to the World Championship. Although the team did
          not qualify, they had a very successful season, and established
          themselves as an up and coming team in Ontario.
          <br />
          <br />
          2381W: The final member of 2381X and a junior student affiliated with
          Kernel Bye joined forces to create a new team within 2381. This team
          performed consistently across the season, reaching finalists at their
          first competition and semi-finalists at all others. At the provincial
          level, the team went 5/2/0, placing them 19th in the provincial level.
          The team was unfortunately knocked out in eliminations, but qualified
          to worlds with the 38th ranked skills score in the world of 135. At
          (virtual) worlds, 2381W went 7/4/0, placing them 26th in their
          division.
        </>
      ),
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
      content: (
        <>
          2381C: Team 2381C showed drastic improvements from their rookie
          season, attending different competitions and putting up strong
          performances at each one. Aside from the Lockheed Martin Qualifer #1,
          the team’s W/L rate was always positive, notably at the second
          qualifier where the team placed 2nd out of 16 teams, and won the
          Innovate Award. The aforementioned award was received in consideration
          of their unconventional design, a defensive 2bar cap-bot. Their final
          award count was 3, including Tournament champions at Lockheed #2, and
          placed strongly in the upper half at the Ontario provincials, ending
          at 28th place.
          <br />
          <br />
          2381Y: Turning Point was the season wherein 2381Y was created, a
          sophomore team that consisted of most who were new to EDR at the time.
          The team performed relatively well at their respective competitions,
          having a positive W/L rate. Over the course of the season, the team
          developed various well-thought out concepts, such as a catapult system
          for flag possession, and their programming skills autonomous through
          codebase improvements. Notable achievements over the year are the
          Skills Champion award at the Lockheed Martin VEX EDR Qualifier, and
          qualifying to provincials in their first year.
          <br />
          <br />
          2381X: 2381X was formed as a branch-off team from the original, 2381C.
          This team proved itself incredibly succesfull, as they dominated
          competition across various competitions. The team, famously known for
          their thin robots, attended 6 regular competitions - notably ranking
          1st place at VRC Terrebonne in Quebec. Their robot was a well tuned
          flywheel robot, leading them to success in amassing 9 awards over the
          course of the season, as well as a provincial qualification. They
          unfortunately missed worlds through a tough Ro16 match, and the team
          number was retired thereafter as the members graduated.
        </>
      ),
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
      content: (
        <>
          2381C: As the pioneering team in the organization, 2381C’s first year
          was one wherein members were familiarizing themselves with the EDR
          framework. The team attended 4 competitions, and although they were
          not able to qualify for the provincial championship, 2381C had a
          valuable first year - they won the Innovate Award at the iDesign VRC
          event in Toronto, and ranked 4th in the Lockheed Martin Qualifier #2.
          The team experimented with many concepts as they explored EDR and v4,
          testing out passive claws, active claws, and a variety of other build
          techniques to kick-start 2381’s involvement in VEX Robotics.
        </>
      ),
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
            <SectionText {...season.us} />
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
