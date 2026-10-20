"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog-data";
import { EASE_OUT_EXPO, fadeUp } from "@/lib/animations";
import GlowCard from "@/components/ui/GlowCard";

export default function BlogIndexPage() {
    return (
        <main className="relative isolate min-h-screen overflow-hidden pt-28 pb-36 sm:pt-36">
            {/* Background Aurora */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute top-10 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600/15 via-cyan-400/15 to-indigo-600/10 blur-[160px] motion-safe:animate-aurora" />
            </div>

            {/* HERO SECTION */}
            <section className="px-6 text-center">
                <div className="mx-auto max-w-4xl">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
                    >
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-600 uppercase dark:text-cyan-400">
                            <BookOpen size={14} /> Le Blog & Ressources Floticar
                        </div>

                        <h1 className="mb-6 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
                            Ressources & Astuces pour{" "}
                            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
                                votre flotte.
                            </span>
                        </h1>

                        <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-300">
                            Décryptage de la réglementation, conseils d&apos;optimisation du TCO et guides pratiques pour les gestionnaires et chefs d&apos;entreprise.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ARTICLES GRID */}
            <section className="mt-16 px-6">
                <div className="mx-auto max-w-6xl">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {BLOG_POSTS.map((post, idx) => (
                            <motion.div
                                key={post.slug}
                                initial={{ opacity: 0, y: 25 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.08 * idx, duration: 0.6, ease: EASE_OUT_EXPO }}
                            >
                                <Link href={`/blog/${post.slug}`} className="group block h-full">
                                    <GlowCard
                                        glowColor="rgba(59, 130, 246, 0.25)"
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

                                            <h2 className="mb-3 text-xl leading-snug font-bold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-cyan-400">
                                                {post.title}
                                            </h2>

                                            <p className="line-clamp-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                                                {post.excerpt}
                                            </p>
                                        </div>

                                        <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-5 dark:border-white/5">
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
        </main>
    );
}
