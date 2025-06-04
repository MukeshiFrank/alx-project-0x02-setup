// pages/posts.tsx
import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Fetch example posts from JSONPlaceholder
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((data: Post[]) => setPosts(data));
  }, []);

  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-6">Posts</h1>
        {posts.length === 0 ? (
          <p>Loading posts...</p>
        ) : (
          <ul className="space-y-4">
            {posts.map((post) => (
              <li key={post.id} className="border p-4 rounded-md shadow-md">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
};

export default Posts;
