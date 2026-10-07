import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  Share2, 
  MessageCircle, 
  CheckCircle, 
  ChevronRight, 
  Phone,
  Milk
} from "lucide-react";

import { BLOG_POSTS, BlogPost } from "@/data/blogPosts";
import { CONTACT_INFO } from "@/data/products";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import BlogClientWrapper from "./BlogClientWrapper";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Yazı Bulunamadı",
    };
  }

  return {
    title: `${post.title} | Alanya Günlük Süt`,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://www.alanyagunluksut.com/blog/${post.slug}`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    alternates: {
      canonical: `https://www.alanyagunluksut.com/blog/${post.slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  // Schema.org BlogPosting Structured Data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "datePublished": "2026-02-01",
    "author": {
      "@type": "Organization",
      "name": "Alanya Günlük Süt",
      "url": "https://www.alanyagunluksut.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Alanya Günlük Süt",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.alanyagunluksut.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.alanyagunluksut.com/blog/${post.slug}`
    }
  };

  return (
    <BlogClientWrapper post={post} relatedPosts={relatedPosts} articleSchema={articleSchema} />
  );
}
