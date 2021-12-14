import Link from "next/link";
import { PostMeta } from "../types/Blog";

interface IProps {
  post: { meta: PostMeta; slug: string };
  className?: string;
}

const BlogPost = ({ post, className }: IProps) => {
  return (
    <article className={className}>
      <Link href={{ pathname: `/blog/${post.slug}` }}>
        <a>{post.meta.title}</a>
      </Link>{" "}
      - {post.meta.description}
      <p>[ {post.meta.tags.join(", ")} ]</p>
    </article>
  );
};

export default BlogPost;
