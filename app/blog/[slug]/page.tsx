import { fetchBlogPostBySlug, fetchBlogPosts } from "@/lib/contentful";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  const posts = await fetchBlogPosts();
  return posts.map((post: any) => ({
    slug: post.fields.slug,
  }));
}

// Custom rendering options for Contentful rich text
const renderOptions: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => (
      <strong className="font-bold text-primary">{text}</strong>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="mb-6 text-lg text-gray-700 leading-relaxed">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className="mt-12 mb-6 text-4xl font-bold text-primary leading-tight">
        {children}
      </h1>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="mt-10 mb-5 text-3xl font-bold text-primary">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 className="mt-8 mb-4 text-2xl font-bold text-primary">{children}</h3>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
        {children}
      </ul>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol className="list-decimal pl-6 mb-6 space-y-2 text-lg text-gray-700">
        {children}
      </ol>
    ),
    [BLOCKS.QUOTE]: (node, children) => (
      <blockquote className="border-l-4 border-secondary pl-6 italic my-8 text-xl text-gray-600 bg-gray-50 py-4 rounded-r-lg">
        {children}
      </blockquote>
    ),
    [INLINES.HYPERLINK]: (node, children) => (
      <a
        href={node.data.uri}
        className="text-secondary hover:underline underline-offset-4"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const url = node.data?.target?.fields?.file?.url;
      const title = node.data?.target?.fields?.title;
      if (!url) return null;
      return (
        <div className="my-10 rounded-2xl overflow-hidden shadow-md">
          <img
            src={`https:${url}`}
            alt={title || "Blog Image"}
            className="w-full h-auto object-cover"
          />
        </div>
      );
    },
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await fetchBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { title, coverImage, content, publishDate, author } =
    post.fields as any;
  const imageUrl = coverImage?.fields?.file?.url
    ? `https:${coverImage.fields.file.url}`
    : null;
  const date = publishDate
    ? new Date(publishDate).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "";

  return (
    <>
      <Navbar />
      <article className="pt-32 pb-24 px-4 md:px-20 min-h-screen bg-white">
        <div className="max-w-[800px] mx-auto">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center text-secondary hover:text-primary transition-colors mb-10 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
          </Link>

          {/* Header */}
          <div className="mb-10">
            <p className="text-secondary font-medium mb-4 text-sm uppercase tracking-wider">
              {date}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              {title}
            </h1>
            {author && (
              <p className="text-gray-500 font-medium text-lg">By {author}</p>
            )}
          </div>

          {/* Cover Image */}
          {imageUrl && (
            <div className="w-full rounded-3xl overflow-hidden mb-12 shadow-lg border border-gray-100">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-auto object-cover max-h-[500px]"
              />
            </div>
          )}

          {/* Content */}
          <div className="max-w-none">
            {documentToReactComponents(content, renderOptions)}
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
