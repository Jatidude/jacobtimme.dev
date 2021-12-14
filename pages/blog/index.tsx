import { getAllPostsFrontMatter } from "../../lib/utils";
import SiteContainer from "../../components/SiteContainer";
import BlogPosts from "../../components/BlogPosts";
import { PostMeta } from "../../types/Blog";

interface IProps {
  posts: { meta: PostMeta; slug: string }[];
  title: string;
  description: string;
}

export default function Blog({ posts, title, description }: IProps) {
  return (
    <SiteContainer title={title} description={description}>
      <div>
        <section className="blog-posts">
          <p>
            Lots of long text so I can see how long things are across the screen
            at maximum oh yeah woohoo it needs to go further I wonder when the
            line wrapping will come into play
          </p>
          <h3>✍🏼 Blog posts on my experience as a software engineer</h3>
          <BlogPosts posts={posts} />
        </section>
      </div>
    </SiteContainer>
  );
}

export async function getStaticProps() {
  const posts = await getAllPostsFrontMatter("blog");

  return {
    props: {
      posts,
      title: "Blog",
      description: "Posts on software engineering",
    },
  };
}
