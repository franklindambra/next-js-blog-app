// app/posts/[id]/page.tsx

import prisma from "@/lib/db";
import { notFound } from "next/navigation";

// Main Post Component
export default async function PostPage({ params }: { params: { id: string } }) {
  const postId = parseInt(params.id, 10);
  const post = await prisma.post.findUnique({
    where: { id: postId },
  });

  if (!post) {
    notFound(); // Return 404 if post not found
  }

  return (
    <main className="px-7 pt-24 text-center">
      <h1 className="text-5xl font-semibold mb-7">{post.title}</h1>
      <p className="max-w-[700px] mx-auto">{post.body}</p>
    </main>
  );
}

// Generate static paths for posts with ISR
export async function generateStaticParams() {
  const posts = await prisma.post.findMany({
    select: { id: true },
  });

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

// Configure ISR-like behavior
export const revalidate = 60; 
