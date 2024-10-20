import React from "react";
import Link from "next/link";
import prisma from "@/lib/db";

export default async function PostsList() {

  const posts = await prisma.post.findMany();

  console.log(posts);
  

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id} className="mb-3">
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
