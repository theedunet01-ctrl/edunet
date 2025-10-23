
import React from "react";
import Layout from "@/components/Layout";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <Layout>
      <div className="bg-white min-h-screen">
        <section className="max-w-5xl mx-auto mt-12 mb-12 px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center drop-shadow-sm">
            Blog
          </h1>
          <div className="grid md:grid-cols-2 gap-8">
            {[...blogPosts].sort((a, b) => b.date.localeCompare(a.date)).map((post) => (
              <Link to={`/blog/${post.id}`} key={post.id} className="block group">
                <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col h-full group-hover:scale-[1.02] transition-transform duration-300 border border-yellow-200">
                  {post.image && (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="rounded-lg w-full h-44 object-cover mb-4 bg-gray-100"
                    />
                  )}
                  <div className="flex flex-col flex-grow">
                    <h2 className="text-xl font-bold mb-2 text-yellow-600">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-3">{post.summary}</p>
                    <div className="mt-auto flex justify-between items-center">
                      <span className="text-xs text-gray-400">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      <span className="text-sm font-semibold text-gray-900 group-hover:underline">Read More &rarr;</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Blog;
