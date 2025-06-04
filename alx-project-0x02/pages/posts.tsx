// pages/posts.tsx
import React from 'react';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import type { PostProps } from '@/interfaces';

interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-6">Posts</h1>

        {posts.length === 0 ? (
          <p>No posts available.</p>
        ) : (
          <div>
            {posts.map((post) => (
              <PostCard
                key={post.id}
                userId={post.userId}
                id={post.id}
                title={post.title}
                body={post.body}
              />
            ))}
          </div>
        )}
      </main>
    </>
  );
};

export default PostsPage;

export async function getStaticProps() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=10'
  );
  const data: PostProps[] = await res.json();

  return {
    props: {
      posts: data,
    },
  };
}
