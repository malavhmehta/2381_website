import CardImage from "../../../components/card/image";
import Head from "next/head";
import Hero from "../../../components/hero/pattern";
import Link from "next/link";
import React from "react";
import Related from "../../../components/related";
import SectionText from "../../../components/section/text";
import { getSortedPostsData } from "../../../util/posts";

const hero = {
  heading: "Posts",
  lead: "Sell all of 2381 Robotics' posts on the page below.",
  imageSrc: "https://i.ibb.co/zXC0sMQ/Screen-Shot-2020-12-07-at-5-51-27-PM.png",
  primary: {
    href: "/join",
    name: "Join Us",
  },
  secondary: {
    href: "/outreach",
    name: "Outreach Programs",
  },
};

const related = {
  links: [
    {
      name: "Outreach Programs",
      href: "/outreach",
    },
    {
      name: "Calendar",
      href: "/outreach/calendar",
    },
  ],
};

function Posts({ posts }) {
  return (
    <>
      <Head>
        <title>Posts - 2381 Robotics</title>
      </Head>
      <Hero {...hero} />

      <div className="mt-5 pt-2" />
      <SectionText title="2381 News" content="" />

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

      <Related {...related} />
    </>
  );
}

export async function getServerSideProps(context) {
  let posts = getSortedPostsData();
  return { props: { posts } };
}

export default Posts;
