import Head from "next/head";
import Hero from "../../components/hero/pattern";
import React from "react";
import Related from "../../components/related";
import SectionImage from "../../components/section/image";
import SectionText from "../../components/section/text";

const hero = {
  heading: "Our History",
  lead:
    "Learn about when 2381 was founded and about our participation in the VEX Robotics Competitions.",
  imageSrc: "https://i.ibb.co/XZ0nQ6b/2381-history.jpg",
  primary: {
    href: "/join",
    name: "Join Us",
  },
  secondary: {
    href: "/about",
    name: "About 2381",
  },
};

const sections = {
  intro: {
    title: "How did it all start?",
    content:
      "The Colonel By Robotics club itself has been around for a very long time, however, we only recently started competing in VEX competitions beginning with the 2017-18 season. Our executive team has been working tirelessly in order to organize all the events and incorporate the VEX experience into the club. It currently is the main focus of the club’s activities.",
    imageSrc: "https://i.ibb.co/GvhVML9/hist-sec1.jpg",
    link: {
      href: "/about",
      name: "More about us",
    },
  },
  towerTakeover: {
    title: "Tower Takeover (2019-2020)",
    content: (
      <>
        During the 2019-2020 Tower Takeover season, 2381 Kernel Bye saw 6 teams
        rise to the challenge of this year’s game: 2381A, 2381C, 2381D, 2381W,
        2381Y, and 2381Z.
        <br />
        <br />
        Among the 6 teams, 2381C, 2381W, 2381Y, and 2381Z qualified for the
        Ontario Provincial Championship held in St. Catharines. On that day,
        2381 showed themselves to be considered amongst some of the best teams
        in Ontario, with their hard-work, dedication and preparation being
        evident throughout the competition. In the round-robin portion, Colonel
        By teams went a combined record of 19-9, with 3 teams being selected to
        compete in the elimination bracket. Team Z, the team who unfortunately
        missed the elimination round, faced a very difficult schedule and
        encountered an unexpected hardware failure, leading to them just missing
        being selected for the elimination round. Teams Y and C partnered to
        form an alliance, won their first playoff round and came within 6 points
        of winning their quarterfinal match, a win that would have qualified
        them for the World Championship.
        <br />
        <br />
        Team W partnered with a team from Niagara Falls, and lost in the first
        round to last year's tournament finalist. But with a strong performance
        in the skills portion of the competition, a performance that placed them
        38th in the world, Team W was able to qualify for the World
        Championship. This season would not have been possible without the hard
        work and commitment of Mr. Hudson, our teacher supervisor, and the
        countless hours each team have poured into their robots. A summary of
        our teams is provided below:
        <br />
        <br />
        2381A: A new team this season, famed for their interesting defensive
        concept, a steel 5-wide X-drive chassis, which allows for interesting
        defensive maneuvers due to its high mass and speed.
        <br />
        <br />
        2381C: Team 2381C managed to be crowned 3x Tournament Champion, and
        received 2x Excellence Awards in addition to 1x Innovate Award,
        qualifying them for the VEX Ontario Provincial Championship, fighting
        its way to a closely contested quarterfinals.
        <br />
        <br />
        2381D: A freshman team composed entirely of new members to the 2381
        robotics family! They’ve attended both competitions held in Ottawa, and
        have made it to eliminations during the Second Lockheed Martin VRC
        competition!
        <br />
        <br />
        2381W: A team composed of the remnants of 2381X, and new members to 2381
        robotics. 2381W quickly proved themselves to be a formidable skills
        team, winning 1x Robot Skills Champion at Terrebonne VRC competition,
        and qualifying for the world championship with a combined skills score
        of 133!
        <br />
        <br />
        2381Y: A second year team continuing their debut in Turning Point.
        Despite having an unsuccessful early season at qualifying tournaments,
        they managed to persevere, and claim a spot for the world championship
        with a skills score of 85 at provincials!
        <br />
        <br />
        2381Z: Despite being a freshman team, 2381Z was able to learn and adapt
        quickly to the VEX robotics competition, winning 1x Innovate Award, 1x
        Build Award, and 1x Design Award this season. Fun fact: in January,
        2381Z attended the Wave at WPI signature event held in Massachusetts as
        the only Canadian team attending!
      </>
    ),
  },
  turningPoint: {
    title: "Turning Point (2018-2019)",
    content: (
      <>
        Turning Point marked the second year of 2381 Kernel Bye partaking in the
        VEX EDR robotics. This year, we had 3 teams compete in tournaments from
        Ottawa to Niagara falls: 2381C, 2381X, and 2381Y.
        <br />
        <br />
        2381C: Team 2381C was the only team in 2381 to run the new V5 system for
        the entire competition season, and used this to their advantage in
        building an off-meta defensive robot, combined with a 2-bar lift to
        quickly score caps on low poles. They managed to win 1x Tournament
        Champion, 1x Innovate Award, and 1x Service Award, ending their season
        by ranking 28th in qualifications at provincials.
        <br />
        <br />
        2381X: This team of 4 quickly showed themselves to be a formidable in
        Turning Point, picking up 3x Excellence Awards, 3x Tournament Champions,
        1x Robot Skills Champion, 1x Build Award, and 1x Think Award, making it
        to Round of 16 at the VEX Ontario Provincial Championship.
        <br />
        <br />
        2381Y: Despite being a freshman team, they quickly demonstrated their
        capabilities in the robot skills challenge, being crowned Robot Skills
        Champion at the Lockheed Martin Ontario Second VE EDR Qualifier,
        qualifying for provincials.
      </>
    ),
  },
  inTheZone: {
    title: "In The Zone (2017-2018)",
    content: (
      <>
        In The Zone marked the debut of the 2381 organization, Kernel Bye, with
        the founding of team 2381C. Despite this being our school’s first year
        participating in the VEX Robotics Competition, 2381C managed to pick up
        the Innovate Award in Toronto!
      </>
    ),
  },
};

const related = {
  links: [
    {
      name: "About Us",
      href: "/about",
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

export default function History() {
  return (
    <>
      <Head>
        <title>History - 2381 Robotics</title>
      </Head>
      <Hero {...hero} />
      <SectionImage {...sections.intro} />
      <SectionText {...sections.towerTakeover} />
      <SectionText {...sections.turningPoint} />
      <SectionText {...sections.inTheZone} />
      <Related {...related} />
    </>
  );
}
