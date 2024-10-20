import React, { Suspense } from "react";
import PostsList from "@/components/posts-lists";

export default async function page() {
  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl font-bold md:text-5xl mb-5">All Posts</h1>
      
      <Suspense fallback="Loading...">
      <PostsList/>
      </Suspense>

    </main>
  );
}
