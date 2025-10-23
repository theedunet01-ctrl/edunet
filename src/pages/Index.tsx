
import React from "react";
import Layout from "@/components/Layout";
import CinematicHero from "@/components/CinematicHero";
import ServicesSection from "@/components/ServicesSection";
import PartnerUniversities from "@/components/PartnerUniversities";
import AnimatedEarthMap from "@/components/AnimatedEarthMap";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "react-router-dom";

// Enhanced 3D-style wrapper for sections
const SectionCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`relative z-10 bg-white/90 shadow-lg rounded-2xl backdrop-blur-[3px] border border-yellow-200/40 mb-16 p-6 md:p-12 ${className} transition-transform duration-700 hover:scale-[1.01] hover:shadow-[0_8px_32px_0_rgba(255,193,7,0.10)]`}>
    {children}
  </section>
);

export default function Index() {
  const latest = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 2);

  return (
    <Layout>
      <div className="bg-white">
        {/* Cinematic Hero Section */}
        <CinematicHero />

        {/* Services Section - with proper spacing */}
        <SectionCard className="mx-auto max-w-6xl mt-16 shadow-yellow-100/30 bg-white/95 backdrop-blur-sm relative z-10">
          <ServicesSection />
        </SectionCard>

        {/* Partner Universities - the autosliding section */}
        <SectionCard className="mx-auto max-w-6xl -mt-8 bg-white/90">
          <PartnerUniversities />
        </SectionCard>

        {/* Latest Update - MOVED AFTER Partner Universities */}
        <SectionCard className="mx-auto max-w-5xl -mt-12 md:-mt-24 shadow-yellow-100/30 bg-yellow-50/90">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Latest Update
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {latest.map((post) => (
              <Link
                to={`/blog/${post.id}`}
                key={post.id}
                className="rounded-lg bg-white/90 shadow-sm p-4 flex flex-col hover:shadow-lg transition group"
              >
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="rounded-md w-full h-32 object-cover mb-3 bg-gray-50"
                  />
                )}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-[1.17rem] font-bold text-gray-900">{post.title}</h3>
                  <p className="text-gray-600 mt-1 text-sm flex-grow">{post.summary}</p>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="text-xs text-gray-400">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                  <span className="text-sm font-semibold text-gray-900 group-hover:underline">Read More &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link to={`/blog`} className="text-gray-900 font-semibold underline hover:text-yellow-600 transition">View all Blog Updates</Link>
          </div>
        </SectionCard>
      </div>
    </Layout>
  );
}
