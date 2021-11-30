import { getAllPostsWithFrontMatter } from "../../lib/utils";
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
          <p>This is a test</p>
          <h3>✍🏼 Blog posts on my experience as a software engineer</h3>
          <BlogPosts posts={posts} />
        </section>
      </div>
    </SiteContainer>
  );
}

export async function getStaticProps() {
  const posts = await getAllPostsWithFrontMatter("blog");

  return {
    props: {
      posts,
      title: "Blog",
      description: "Posts on software engineering",
    },
  };
}
