// pages/index.tsx

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-10">
      <h1 className="text-4xl font-bold mb-4">Welcome to Next.js with TypeScript and Tailwind CSS!</h1>
      <p className="text-lg">This is your starter project setup.</p>
    </main>
  );
};

export default Home;
