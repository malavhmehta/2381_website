import fs from "fs";
import matter from "gray-matter";
import path from "path";

const posts_dir = path.join(process.cwd(), "posts");
type PostMetadata = {
  post: string;
  title: string;
  date: string;
  summary: string;
  image: string;
}

export const getSortedPostsData = () => {
  const posts = fs.readdirSync(posts_dir);
  const postsData = posts.map((post) => {
    const id = post.replace(/\.md$/, "");

    const postPath = path.join(posts_dir, post);
    const postContent = fs.readFileSync(postPath, "utf-8");
    const metadata = matter(postContent);

    return {
      post: id,
      ...metadata.data,
    };
  });

  return postsData.sort((a: PostMetadata, b: PostMetadata) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
};

export const getAllPostIds = () => {
  const posts = fs.readdirSync(posts_dir).map((post) => ({
      params: {
        post: post.replace(/\.md$/, ""),
      },
    }
  ));
  return posts;
};

export const getPostData = async (post: string) => {
  const post_path = path.join(posts_dir, `${post}.md`);
  const contents = fs.readFileSync(post_path, "utf-8");
  const metadata = matter(contents);

  return {
    post,
    htmlContent: metadata.content,
    ...metadata.data,
  };
};
