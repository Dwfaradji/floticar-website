import { Metadata } from "next";
import { getPostBySlug, BLOG_POSTS } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import BlogPostView from "@/components/blog/BlogPostView";

// Génération dynamique des balises SEO (Title, Meta Description, OpenGraph, Canonical)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Article introuvable | Floticar" };
  }

  return {
    title: `${post.title} | Blog Floticar`,
    description: post.excerpt,
    alternates: {
      canonical: `https://floticar.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      url: `https://floticar.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Related posts: exclude current post, prioritize same category
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug);
  const sameCategory = otherPosts.filter((p) => p.category === post.category);
  const diffCategory = otherPosts.filter((p) => p.category !== post.category);
  const relatedPosts = [...sameCategory, ...diffCategory].slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://floticar.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Floticar",
      url: "https://floticar.com",
      logo: {
        "@type": "ImageObject",
        url: "https://floticar.com/icon.svg",
      },
    },
    datePublished: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://floticar.com/blog/${post.slug}`,
    },
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BlogPostView post={post} relatedPosts={relatedPosts} />
    </main>
  );
}
