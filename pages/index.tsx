import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Jacob Timme</title>
        <meta name="description" content="It's my website and stuff" />
      </Head>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
    </div>
  );
};

export default Home;
