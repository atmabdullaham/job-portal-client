import React from "react";
import { motion } from "motion/react";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            animate={{
              scale: 0.8,
              color: "#FF0000",

              transition: { duration: 5 },
            }}
            className="text-5xl font-bold"
          >
            Job News!
          </motion.h1>
          <p className="py-6">
            Discover the latest job opportunities and career advice tailored to
            your needs. Join us to stay updated with the job market trends and
            find your dream job!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
