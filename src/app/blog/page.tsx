"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog-data";

export default function BlogIndexPage() {
    return (
        <main className="min-h-screen pt-20">
            {/* HERO SECTION */}
            <section className="relative bg-gray-50 px-6 py-20 dark:bg-gray-900">
                <div className="mx-auto max-w-4xl text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-900/50 dark:text-blue-300"
                    >
                        <BookOpen size={16} /> Le Blog Floticar
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white"
                    >
                        Ressources & Astuces pour votre flotte
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300"
                    >
                        Décryptage de l'actualité, conseils d'optimisation du TCO et guides pratiques pour les gestionnaires de parc automobile.
                    </motion.p>
                </div>
            </section>

            {/* ARTICLES GRID */}
            <section className="px-6 py-16 dark:bg-[#030409]">
                <div className="mx-auto max-w-6xl">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {BLOG_POSTS.map((post, idx) => (
                            <motion.article 
                                key={post.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * idx }}
                                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
                            >
                                <div className="p-6">
                                    <div className="mb-4 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                                        <span>{post.category}</span>
                                        <span className="flex items-center gap-1 text-gray-400"><Clock size={14} /> {post.readTime}</span>
                                    </div>
                                    <h2 className="mb-3 text-xl font-bold leading-tight text-gray-900 transition group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                                        <Link href={`/blog/${post.slug}`} className="before:absolute before:inset-0">
                                            {post.title}
                                        </Link>
                                    </h2>
                                    <p className="text-gray-600 line-clamp-3 dark:text-gray-400">
                                        {post.excerpt}
                                    </p>
                                </div>
                                <div className="border-t border-gray-100 bg-gray-50/50 p-6 flex items-center justify-between dark:border-gray-800 dark:bg-gray-900/20">
                                    <div className="text-sm text-gray-500 dark:text-gray-400">{post.date}</div>
                                    <div className="flex items-center gap-1 text-sm font-semibold text-blue-600 transition group-hover:translate-x-1 dark:text-blue-400">
                                        Lire la suite <ArrowRight size={16} />
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
