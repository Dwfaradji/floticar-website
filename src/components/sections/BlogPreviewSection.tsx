"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog-data";
import { EASE_OUT_EXPO, fadeUp } from "@/lib/animations";
import GlowCard from "@/components/ui/GlowCard";

export default function BlogPreviewSection() {
    // Les 3 articles les plus récents
    const recentPosts = BLOG_POSTS.slice(-3).reverse();

    return (
        <section aria-label="Guides et articles de blog" className="relative overflow-hidden py-28 sm:py-36">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mx-auto mb-16 flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
                        className="max-w-2xl"
                    >
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-600 uppercase dark:text-blue-400">
                            <BookOpen size={14} />
                            Guides & Ressources
                        </div>
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
                            L&apos;actualité et les conseils pour{" "}
                            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
                                piloter votre flotte.
                            </span>
                        </h2>
                        <p className="mt-4 text-base text-gray-600 sm:text-lg dark:text-gray-400">
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
                            className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-6 py-3.5 text-sm font-bold text-gray-800 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-blue-500/40 hover:text-blue-600 dark:border-white/10 dark:bg-gray-950 dark:text-gray-200 dark:hover:border-cyan-400/40 dark:hover:text-white"
                        >
                            <span>Voir tous les articles</span>
                            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </motion.div>
                </div>

                {/* Articles Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {recentPosts.map((post, idx) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.7, ease: EASE_OUT_EXPO }}
                        >
                            <Link href={`/blog/${post.slug}`} className="group block h-full">
                                <GlowCard
                                    glowColor="rgba(59, 130, 246, 0.2)"
                                    className="flex h-full flex-col justify-between !p-8 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-blue-500/40"
                                >
                                    <div>
                                        <div className="mb-4 flex items-center justify-between text-xs font-bold tracking-wider text-blue-600 uppercase dark:text-cyan-400">
                                            <span className="rounded-lg bg-blue-50 px-2.5 py-1 dark:bg-blue-900/30">
                                                {post.category}
                                            </span>
                                            <span className="flex items-center gap-1 font-medium text-gray-400">
                                                <Clock size={13} /> {post.readTime}
                                            </span>
                                        </div>

                                        <h3 className="mb-3 text-xl leading-snug font-bold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-cyan-400">
                                            {post.title}
                                        </h3>

                                        <p className="line-clamp-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                                            {post.excerpt}
                                        </p>
                                    </div>

                                    <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5 dark:border-white/5">
                                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                                            {post.date}
                                        </span>
                                        <span className="flex items-center gap-1 text-xs font-bold text-blue-600 transition-transform duration-300 group-hover:translate-x-1 dark:text-cyan-400">
                                            Lire l&apos;article <ArrowRight size={14} />
                                        </span>
                                    </div>
                                </GlowCard>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
