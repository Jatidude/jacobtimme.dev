import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import avatar from "../public/Avatar.jpg";
import SiteContainer from "../components/SiteContainer";
const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Jacob Timme</title>
        <meta name="description" content="It's my website and stuff" />
      </Head>
      <main>
        <SiteContainer title={"Jacob Timme"} description={""}>
          <div className="mx-auto w-80 h-80 relative">
            <Image
              src={avatar}
              layout="fill"
              objectFit="cover"
              alt="Profile Picture"
              className="rounded-full"
            />
          </div>
          <p>
            Hey it&apos;s me ya boy jacob timme. I&apos;m a pretty cool dude I
            think.
          </p>
        </SiteContainer>
      </main>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
    </div>
  );
};

export default Home;
