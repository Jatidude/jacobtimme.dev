import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import avatar from "../public/Avatar.jpg";
import SiteContainer from "../components/SiteContainer";
import { getMostRecentPosts } from "../lib/utils";
import { PostMeta } from "../types/Blog";
import BlogPosts from "../components/BlogPosts";

interface IProps {
  posts: { meta: PostMeta; slug: string }[];
  title: string;
  description: string;
}

const Home = ({ posts, title, description }: IProps) => {
  console.log(posts);
  return (
    <div className="container">
      <Head>
        <title>Jacob Timme</title>
        <meta name="description" content="It's my website and stuff" />
      </Head>
      <main>
        <SiteContainer title={title} description={description}>
          <div className="mx-auto w-80 h-80 relative">
            <Image
              src={avatar}
              layout="fill"
              objectFit="cover"
              alt="Profile Picture"
              className="rounded-full"
            />
          </div>
          <p>This site is under construction</p>
          <h2 className="pt-10">Most recent blog post:</h2>
          <BlogPosts className="pt-4" posts={posts} />
        </SiteContainer>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const posts = await getMostRecentPosts("blog", 3);
  console.log(posts);
  return {
    props: {
      posts,
      title: "Jacob Timme",
      description: "",
    },
  };
}

export default Home;
