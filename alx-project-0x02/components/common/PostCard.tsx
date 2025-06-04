// components/common/PostCard.tsx
import React from 'react';
import type { PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ title, body, userId }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white mb-4 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold">{title}</h2>
        <span className="text-sm text-gray-500">User #{userId}</span>
      </div>
      <p className="text-gray-700">{body}</p>
    </div>
  );
};

export default PostCard;
