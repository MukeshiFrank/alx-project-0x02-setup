import React from "react";
import Card from "../components/common/Card";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of our Next.js project.</p>

      <Card title="Card Title 1" content="This is the content for card 1." />
      <Card title="Card Title 2" content="This is the content for card 2." />
      <Card title="Card Title 3" content="This is the content for card 3." />
    </div>
  );
};

export default Home;
