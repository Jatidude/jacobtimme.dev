import Link from "next/link";
import { PostMeta } from "../types/Blog";

interface IProps {
  posts: { meta: PostMeta; slug: string }[];
}

const BlogPosts = ({ posts }: IProps) => {
  return (
    <div className="posts">
      {!posts && <div>No posts!</div>}
      <ul>
        {posts &&
          posts
            .sort(
              (a, b) =>
                new Date(b.meta.publishedDate).getTime() -
                new Date(a.meta.publishedDate).getTime()
            )
            .map((post) => {
              return (
                <article key={post.slug} className="post-title">
                  <Link href={{ pathname: `/blog/${post.slug}` }}>
                    <a>{post.meta.title}</a>
                  </Link>{" "}
                  - {post.meta.description}
                  <p>[ {post.meta.tags.join(", ")} ]</p>
                </article>
              );
            })}
      </ul>
    </div>
  );
};

export default BlogPosts;
