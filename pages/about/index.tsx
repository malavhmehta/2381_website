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
import SectionText from "../../components/section/text";

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
  title: "How might we begin to describe 2381? ",
  content:
    "A distinguished Canadian club with past (and present) Worlds qualifications and Regional accolades? A group of hardworking, creative individuals? Or simply down-to-earth high school students with a passion for technology, laying the groundwork for their future careers? Well, certainly all of the above! Scroll through to learn more about who we are, what we do, and what we stand for.",
  imageSrc: "https://i.ibb.co/rsmcCM9/about2.jpg",
  link: {
    href: "/about/teams",
    name: "See our teams",
  },
};

const where = {
  title: "Where do we come from?",
  content:
    "2381 is based in Ottawa, Ontario, from Colonel By Secondary school, a school in our region known for its rigorous IB program. As a result, many of our members come from all over Ottawa, oftentimes ending up with teammates over an hour away from one another, which proves to be tricky for collaboration. However, this does not deter us from connecting with our team as much as possible, especially during the pandemic. In fact, this often proves to be to our advantage. Having team members in all corners of our city offers different perspectives and ideas, as accessibility of extracurriculars and opportunities vary.",
};

const whatWeDo = {
  title: "What do we do?",
  content:
    "Robots! All 2381 teams participate in Vex Robotics. Each team is responsible for building and programming a robot for a new game that VEX releases annually. Robotics is an excellent opportunity for members to develop communication and leadership skills where members have to work together to produce a functional robot.Within Canada, VEX offers a variety of regional competitions that teams can participate in the early season. As the season progresses, teams that qualify can participate in provincials, and lastly, the Worlds Championship.",
};

const why = {
  title: "Why robotics?",
  content:
    "It’s fun! Robotics is an excellent experience for people that want to learn a variety of different skills! By learning aspects of hardware and software, members learn important STEM related skills such as programming and product design. Robotics also encourages students to develop critical thinking and problem solving skills, perseverance, and creativity, all important skills for the real world, in addition to crucial transferable skills such as teamwork, collaboration, planning and organization.",
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
  title: "Alumni Network",
  content:
    "2381 has a special alumni network where students who have graduated continue to offer guidance to members of all skill levels. Despite university, our alumni selflessly dedicate their time to help 2381 grow and learn.",
  items: [
    {
      imageSrc: "https://i.ibb.co/gMXzK48/anni.png",
      title: "Anthony Luo",
      description:
        "Overall Mentor, Alumni Supervisor — As the co-founder of the 2381 Robotics Organization, Anthony has been a part of 2381 since the 2017 In the Zone season as a part of team 2381X. He served as the president for 2 years and has been a mentor for 2381 for 2 years. He has played a crucial role in teaching both experienced and new members programming and building skills.",
    },
    {
      imageSrc: "https://i.ibb.co/tXjGtFQ/victor.png",
      title: "Victor Wang",
      description:
        "Build Mentor — As the co-founder of the 2381 Robotics Organization, Victor has been a part of 2381 since the 2017 In the Zone season as a part of team 2381C. As a mentor, he focuses on teaching members about building and designing.",
    },
    {
      imageSrc: "https://i.ibb.co/nkMD0sL/seen.png",
      title: "Sean D'Souza",
      description:
        "Programming Mentor — As the co-founder of the 2381 Robotics Organization, Sean has been a part of 2381 since the 2017 In the Zone season as a part of team 2381C. His experience in programming has been very useful in teaching new members about the fundamentals of robotics programming.",
    },
  ],
};

const teacher = {
  title: "Our Teacher Supervisor",
  content: `As the teacher supervisor for 2381, Mr. Hudson has stuck around for the entire history of 2381, volunteering and supervising every single competition that our teams have participated in. Without Mr. Hudson, our organization would not exist and we greatly appreciate him for his support and guidance!`,
  imageSrc: "https://i.ibb.co/nR9vbHx/hudson.jpg",
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
      <SectionText {...whatWeDo} />
      <SectionText {...why} />
      <SectionText {...where} />
      <SectionList {...values} />
      <SectionImage {...mission} reverse={true} />
      <Details {...club} />
      <SectionTeam {...mentors} />
      <div className="mt-5 pt-5" />
      <SectionImage {...teacher} />
      <Related {...related} />
    </>
  );
}
