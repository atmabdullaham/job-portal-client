import React from "react";
import Banner from "../components/Banner";
import HotJobs from "../components/HotJobs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <h2>This is home</h2>
      <div>
        <HotJobs></HotJobs>
      </div>
    </div>
  );
};

export default Home;
