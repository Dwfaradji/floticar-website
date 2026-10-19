"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog-data";
import { fadeUp, stagger } from "@/lib/animations";

export default function BlogPreviewSection() {
  // Take the 3 most recently added articles
  const recentPosts = BLOG_POSTS.slice(-3).reverse();

  return (
    <section 
      aria-label="Guides et articles de blog"
      className="relative overflow-hidden bg-white py-32 dark:bg-[#030409]"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mx-auto mb-16 flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
          <motion.div 
            variants={fadeUp} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-700 uppercase shadow-sm backdrop-blur-sm dark:border-blue-800/60 dark:bg-blue-950/40 dark:text-blue-300">
              <BookOpen size={14} className="text-blue-600 dark:text-blue-400" />
              Guides & Ressources
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
              L&apos;actualité et les conseils pour{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                piloter votre flotte.
              </span>
            </h2>
            <p className="mt-4 text-base text-gray-500 sm:text-lg dark:text-gray-400">
              Réglementation, astuces d&apos;optimisation du TCO et retours d&apos;expérience concrets pour les gestionnaires et chefs d&apos;entreprise.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="shrink-0"
          >
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 shadow-sm transition-all duration-200 hover:border-blue-400 hover:text-blue-600 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-200 dark:hover:border-blue-500 dark:hover:text-white"
            >
              Voir tous les articles
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* ARTICLES GRID */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {recentPosts.map((post) => (
            <motion.article
              key={post.slug}
              variants={fadeUp}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-gray-200/80 bg-gray-50/50 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] dark:border-white/5 dark:bg-white/[0.02] dark:hover:border-blue-500/30 dark:hover:bg-white/[0.04] dark:hover:shadow-[0_20px_50px_rgba(59,130,246,0.05)]"
            >
              <div className="p-8">
                <div className="mb-4 flex items-center justify-between text-xs font-bold tracking-wider text-blue-600 uppercase dark:text-blue-400">
                  <span className="rounded-full bg-blue-50 px-2.5 py-1 dark:bg-blue-900/30">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 font-medium text-gray-400">
                    <Clock size={13} /> {post.readTime}
                  </span>
                </div>

                <h3 className="mb-3 text-xl leading-snug font-bold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                  <Link href={`/blog/${post.slug}`} className="before:absolute before:inset-0">
                    {post.title}
                  </Link>
                </h3>

                <p className="line-clamp-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-gray-200/60 bg-white/50 px-8 py-5 dark:border-white/5 dark:bg-white/[0.01]">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  {post.date}
                </span>
                <span className="flex items-center gap-1 text-xs font-bold text-blue-600 transition-transform group-hover:translate-x-1 dark:text-blue-400">
                  Lire l&apos;article <ArrowRight size={14} />
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
