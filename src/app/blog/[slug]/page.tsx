import { Metadata } from "next";
import { getPostBySlug } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";

// Génération dynamique des balises SEO (Title, Meta Description, OpenGraph)
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    
    if (!post) {
        return { title: "Article introuvable | Floticar" };
    }

    return {
        title: `${post.title} | Blog Floticar`,
        description: post.excerpt,
        alternates: {
            canonical: `https://floticar.com/blog/${post.slug}`
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
            authors: [post.author],
        }
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen pt-24 pb-16">
            <article className="mx-auto max-w-3xl px-6">
                {/* BACK LINK */}
                <div className="mb-10">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                        <ArrowLeft size={16} /> Retour aux articles
                    </Link>
                </div>

                {/* HEADER */}
                <header className="mb-12">
                    <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <span className="rounded-full bg-blue-50 px-3 py-1 font-semibold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                            {post.category}
                        </span>
                        <div className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</div>
                        <div className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime} de lecture</div>
                    </div>
                    
                    <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl dark:text-white">
                        {post.title}
                    </h1>
                    
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        {post.excerpt}
                    </p>
                </header>

                <hr className="my-10 border-gray-200 dark:border-gray-800" />

                <div 
                    className="mx-auto max-w-none [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:text-gray-900 dark:[&>h2]:text-white [&>p]:text-gray-600 dark:[&>p]:text-gray-400 [&>p]:mb-4 [&>p]:leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </article>

            <div className="mt-20">
                <FinalCTA />
            </div>
        </main>
    );
}
