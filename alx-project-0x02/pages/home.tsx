// pages/home.tsx
import React from "react";
import Header from "@/components/layout/Header";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Home Page</h1>
        <p>This is the home page of our Next.js project.</p>
      </main>
    </>
  );
};

export default Home;
