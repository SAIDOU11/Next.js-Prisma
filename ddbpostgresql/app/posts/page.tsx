import React from "react";
import prisma from "@/lib/db";
import Link from "next/link";

const PostPage = async () => {
  const posts = await prisma.post.findMany();
  return (
    <main className="flex flex-col items-center gap-y pt-24 text-center">
      <h1 className="text-3xl font-bold m-4">All Posts (0)</h1>
      <ul className="border-t border-b border-black/10 py-5 leading-8">
        {posts.map((post) => (
          <li key={post.id} className="flex items-center justify-between px-5">
            <Link href={`/posts//${post.id}`} className="text-blue-600">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default PostPage;
