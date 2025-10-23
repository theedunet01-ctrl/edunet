
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { blogPosts } from '@/data/blogPosts';
import NotFound from './NotFound';
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return <NotFound />;
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <Link to="/blog" className="inline-flex items-center gap-2 text-[#0165b6] hover:text-[#d32f2f] mb-6 font-semibold">
          <ArrowLeft size={16} />
          Back to Blog
        </Link>
        <article>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0165b6] mb-2">{post.title}</h1>
          <p className="text-sm text-gray-500 mb-6">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="rounded-xl w-full max-h-[500px] object-cover mb-8 bg-gray-100"
            />
          )}
           <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
                h3: ({node, ...props}) => <h3 className="text-2xl font-bold mt-6 mb-3 text-[#d32f2f]" {...props} />,
                p: ({node, ...props}) => <p className="text-gray-700 mb-4 leading-relaxed" {...props} />,
                a: ({node, ...props}) => <a className="text-[#0165b6] hover:underline" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc list-inside space-y-2 my-4" {...props} />,
                li: ({node, ...props}) => <li className="text-gray-700 ml-4" {...props} />,
            }}
          >
            {post.content}
          </ReactMarkdown>
        </article>
      </div>
    </Layout>
  );
};

export default BlogPostPage;
