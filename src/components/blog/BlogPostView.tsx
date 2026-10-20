"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  Check,
  ArrowRight,
  BookOpen,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";
import type { BlogPost } from "@/lib/blog-data";
import GlowCard from "@/components/ui/GlowCard";
import FinalCTA from "@/components/sections/FinalCTA";

interface BlogPostViewProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export default function BlogPostView({ post, relatedPosts }: BlogPostViewProps) {
  const [copied, setCopied] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleShare = async () => {
    if (typeof window !== "undefined") {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } catch {
        // Fallback
      }
    }
  };

  return (
    <div className="relative isolate overflow-hidden">
      {/* Reading Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 right-0 left-0 z-50 h-1 origin-left bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600"
      />

      {/* Background Aurora */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/2 h-[550px] w-[850px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600/12 via-cyan-400/12 to-indigo-600/10 blur-[160px] motion-safe:animate-aurora" />
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-24 pb-20 sm:pt-32">
        {/* BREADCRUMB & BACK LINK */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
            <Link href="/" className="transition hover:text-blue-600 dark:hover:text-cyan-400">
              Accueil
            </Link>
            <span>/</span>
            <Link href="/blog" className="transition hover:text-blue-600 dark:hover:text-cyan-400">
              Blog
            </Link>
            <span>/</span>
            <span className="max-w-[200px] truncate text-gray-900 sm:max-w-xs dark:text-white">
              {post.category}
            </span>
          </nav>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-gray-200/80 bg-white/80 px-4 py-1.5 text-xs font-bold text-gray-700 shadow-sm backdrop-blur-md transition hover:border-blue-400 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:text-cyan-400"
          >
            <ArrowLeft size={14} /> Tous les articles
          </Link>
        </div>

        {/* HEADER */}
        <header className="mb-14">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1 text-xs font-bold tracking-wider text-blue-600 uppercase dark:text-cyan-400">
              <BookOpen size={12} /> {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400">
              <Calendar size={13} /> {post.date}
            </span>
            <span className="text-gray-300 dark:text-gray-700">•</span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400">
              <Clock size={13} /> {post.readTime} de lecture
            </span>
          </div>

          <h1 className="mb-8 text-3xl leading-[1.15] font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
            {post.title}
          </h1>

          <div className="flex flex-col gap-6 border-y border-gray-100 py-6 sm:flex-row sm:items-center sm:justify-between dark:border-white/10">
            <div className="flex items-center gap-3.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 font-bold text-white shadow-md shadow-blue-500/25">
                <User size={18} />
              </div>
              <div>
                <div className="text-sm font-bold text-gray-900 dark:text-white">
                  {post.author}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Experts de la mobilité & gestion de flotte
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-2 self-start rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-bold text-gray-700 shadow-sm transition hover:border-gray-300 hover:bg-gray-50 dark:border-white/10 dark:bg-white/5 dark:text-gray-200 dark:hover:bg-white/10"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400">Lien copié !</span>
                </>
              ) : (
                <>
                  <Share2 size={14} />
                  <span>Partager l&apos;article</span>
                </>
              )}
            </button>
          </div>

          {/* CHAPEAU / EXCERPT */}
          <div className="mt-8 rounded-3xl border border-blue-500/15 bg-blue-50/50 p-6 sm:p-8 dark:border-cyan-500/10 dark:bg-cyan-950/10">
            <p className="text-lg leading-relaxed font-medium text-blue-950 sm:text-xl dark:text-blue-100">
              {post.excerpt}
            </p>
          </div>
        </header>

        {/* MAIN ARTICLE BODY + SIDEBAR LAYOUT */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* CONTENT COLUMN (8 COLS) */}
          <article className="lg:col-span-8">
            <div
              className="prose prose-lg dark:prose-invert max-w-none 
                [&>h2]:mt-12 [&>h2]:mb-4 [&>h2]:text-2xl [&>h2]:font-extrabold [&>h2]:tracking-tight [&>h2]:text-gray-900 dark:[&>h2]:text-white
                [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-gray-900 dark:[&>h3]:text-white
                [&>ol]:my-6 [&>ol]:space-y-2.5 [&>ol]:pl-6 [&>ol>li]:text-gray-700
                dark:[&>ol>li]:text-gray-300 [&>p]:mb-5 [&>p]:leading-relaxed [&>p]:text-gray-700 dark:[&>p]:text-gray-300
                [&>strong]:font-bold [&>strong]:text-gray-900 dark:[&>strong]:text-white [&>ul]:my-6 [&>ul]:space-y-2.5
                [&>ul]:pl-6 [&>ul>li]:text-gray-700 dark:[&>ul>li]:text-gray-300"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* AUTHOR BIO CARD */}
            <div className="mt-16 rounded-3xl border border-gray-200/80 bg-white/70 p-8 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/[0.02]">
              <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25">
                  <User size={28} />
                </div>
                <div>
                  <div className="text-base font-bold text-gray-900 dark:text-white">
                    Rédigé par l&apos;{post.author}
                  </div>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Floticar conçoit des solutions logicielles et mobiles de gestion de flotte pour les PME, associations et structures médico-sociales en France.
                  </p>
                  <div className="mt-3 flex flex-wrap justify-center gap-3 sm:justify-start">
                    <Link
                      href="/demande-de-demo"
                      className="text-xs font-bold text-blue-600 hover:underline dark:text-cyan-400"
                    >
                      Demander une démonstration →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* STICKY SIDEBAR (4 COLS) */}
          <aside className="space-y-8 lg:sticky lg:top-28 lg:col-span-4">
            {/* CTA CARD */}
            <GlowCard glowColor="rgba(59, 130, 246, 0.3)" className="!p-7">
              <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 dark:bg-blue-900/40 dark:text-cyan-300">
                <Sparkles size={12} /> Solution Floticar
              </div>

              <h3 className="mb-2 text-xl font-extrabold text-gray-900 dark:text-white">
                Passez à la gestion de flotte moderne
              </h3>

              <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                Remplacez vos carnets papier et tableurs par une solution collaborative sans boîtier électronique.
              </p>

              <div className="mb-6 space-y-2 text-xs font-medium text-gray-700 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={15} className="text-emerald-500" />
                  <span>Prise en main QR Code en 30 sec</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap size={15} className="text-amber-500" />
                  <span>Alertes automatiques CT et entretiens</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={15} className="text-blue-500" />
                  <span>Sans engagement de durée</span>
                </div>
              </div>

              <Link
                href="/demande-de-demo"
                className="group relative flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 py-3.5 text-xs font-bold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02]"
              >
                <span>Demander une démo gratuite</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </GlowCard>

            {/* RELATED POSTS IN SIDEBAR */}
            {relatedPosts.length > 0 && (
              <div className="rounded-3xl border border-gray-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/[0.02]">
                <h4 className="mb-4 text-xs font-bold tracking-wider text-gray-900 uppercase dark:text-white">
                  Articles à lire également
                </h4>
                <div className="space-y-4">
                  {relatedPosts.slice(0, 3).map((rPost) => (
                    <Link
                      key={rPost.slug}
                      href={`/blog/${rPost.slug}`}
                      className="group block rounded-2xl p-2 transition hover:bg-gray-100/70 dark:hover:bg-white/5"
                    >
                      <span className="text-[10px] font-bold tracking-wider text-blue-600 uppercase dark:text-cyan-400">
                        {rPost.category}
                      </span>
                      <h5 className="mt-1 line-clamp-2 text-xs font-bold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-cyan-400">
                        {rPost.title}
                      </h5>
                      <span className="mt-1 block text-[11px] text-gray-400">
                        {rPost.readTime}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>

        {/* BOTTOM RELATED ARTICLES SECTION */}
        {relatedPosts.length > 0 && (
          <section className="mt-28 border-t border-gray-100 pt-20 dark:border-white/10">
            <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <span className="text-xs font-bold tracking-wider text-blue-600 uppercase dark:text-cyan-400">
                  Découvrez plus
                </span>
                <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
                  Articles recommandés pour vous
                </h2>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 transition hover:underline dark:text-cyan-400"
              >
                Consulter tous les articles <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {relatedPosts.slice(0, 3).map((rel) => (
                <Link key={rel.slug} href={`/blog/${rel.slug}`} className="group block h-full">
                  <GlowCard
                    glowColor="rgba(59, 130, 246, 0.25)"
                    className="flex h-full flex-col justify-between !p-7 transition-all duration-300 group-hover:-translate-y-1"
                  >
                    <div>
                      <div className="mb-3 flex items-center justify-between text-[11px] font-bold text-blue-600 uppercase dark:text-cyan-400">
                        <span>{rel.category}</span>
                        <span className="font-normal text-gray-400">{rel.readTime}</span>
                      </div>
                      <h3 className="mb-2 line-clamp-2 text-base font-bold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-cyan-400">
                        {rel.title}
                      </h3>
                      <p className="line-clamp-2 text-xs leading-relaxed text-gray-600 dark:text-gray-400">
                        {rel.excerpt}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center gap-1 text-xs font-bold text-blue-600 transition-transform group-hover:translate-x-1 dark:text-cyan-400">
                      Lire la suite <ArrowRight size={12} />
                    </div>
                  </GlowCard>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* FINAL CTA */}
      <FinalCTA />
    </div>
  );
}
