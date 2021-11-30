import { getFiles, getPostBySlug } from "../../lib/utils";
import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";
const BlogPost = ({ meta, markdownBody }: any) => {
  if (!meta) return <></>;

  return (
    <div>
      <ReactMarkdown
        components={{
          link: (props: any) => <Link {...props} />,
        }}
      >
        {markdownBody}
      </ReactMarkdown>
    </div>
  );
};

export async function getStaticPaths() {
  const posts = await getFiles("blog");

  const paths = posts.map((filename: string) => ({
    params: {
      slug: filename.replace(/\.md/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { meta, markdownBody } = await getPostBySlug("blog", params.slug);

  return {
    props: {
      meta,
      markdownBody,
    },
  };
}
export default BlogPost;
