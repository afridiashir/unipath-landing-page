import { fetchBlogPosts } from "@/lib/contentful";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function BlogPage() {
  const posts = await fetchBlogPosts();

  return (
    <>
      <Navbar />
      <div className="pt-32 pb-24 px-4 md:px-20 xl:px-40 min-h-screen bg-white">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Blog</h1>
          <p className="text-lg text-gray-600 max-w-[600px] mx-auto">
            Insights, guides, and tips to help you navigate the college admissions journey.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">No blog posts found.</p>
            <p className="text-sm text-gray-400 mt-2">Did you add your Contentful Space ID and Access Token to .env.local?</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any) => {
              const { title, slug, excerpt, coverImage, publishDate, author } = post.fields;
              const imageUrl = coverImage?.fields?.file?.url ? `https:${coverImage.fields.file.url}` : null;
              const date = publishDate ? new Date(publishDate).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              }) : "";

              return (
                <Link href={`/blog/${slug}`} key={post.sys.id} className="group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
                  {imageUrl ? (
                    <div className="relative w-full h-64 overflow-hidden bg-gray-100">
                      <img src={imageUrl} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  ) : (
                    <div className="relative w-full h-64 bg-gray-100 flex items-center justify-center">
                      <span className="text-gray-400">No image</span>
                    </div>
                  )}
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-sm text-secondary font-medium mb-3">{date}</p>
                    <h2 className="text-xl font-bold text-primary mb-3 line-clamp-2 group-hover:text-secondary transition-colors">{title}</h2>
                    <p className="text-gray-600 line-clamp-3 mb-6 flex-grow">{excerpt}</p>
                    {author && (
                      <p className="text-sm text-gray-500 font-medium">By {author}</p>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
