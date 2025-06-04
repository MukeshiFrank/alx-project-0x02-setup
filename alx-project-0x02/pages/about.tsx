// pages/about.tsx
import React from 'react';
import Header from '../components/layout/Header';
import Button from '../components/common/Button';

const About = () => {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>
        <p className="mb-6">
          This page demonstrates a reusable Button component with different sizes and shapes.
        </p>

        <div className="flex flex-col gap-4">
          <Button
            label="Small & Rounded"
            size="small"
            shape="rounded-sm"
            onClick={() => alert('Small & Rounded clicked')}
          />

          <Button
            label="Medium & Rounded-md"
            size="medium"
            shape="rounded-md"
            onClick={() => alert('Medium & Rounded-md clicked')}
          />

          <Button
            label="Large & Rounded-full"
            size="large"
            shape="rounded-full"
            onClick={() => alert('Large & Rounded-full clicked')}
          />
        </div>
      </main>
    </>
  );
};

export default About;
