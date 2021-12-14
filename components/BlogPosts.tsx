import Link from "next/link";
import { PostMeta } from "../types/Blog";
import BlogPost from "./BlogPost";
interface IProps {
  posts: { meta: PostMeta; slug: string }[];
  className?: string;
}

const BlogPosts = ({ posts, className }: IProps) => {
  return (
    <div className={className}>
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
              return <BlogPost key={post.slug} post={post} />;
            })}
      </ul>
    </div>
  );
};

export default BlogPosts;
