// components/layout/Header.tsx
import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-center gap-6">
      <Link href="/home">
        <a className="hover:underline">Home</a>
      </Link>
      <Link href="/about">
        <a className="hover:underline">About</a>
      </Link>
      <Link href="/posts">
        <a className="hover:underline">Posts</a>
      </Link>
    </header>
  );
};

export default Header;
