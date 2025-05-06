import React from "react";
import { motion } from "motion/react";
import imgteam from "../assets/team.png";
import imgsingle from "../assets/single.png";

const Banner = () => {
  return (
    <div className="hero bg-blue-300 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            src={imgteam}
            className="border-l-4 border-b-4 border-base-100 max-w-sm rounded-t-[40px] rounded-br-[40px] shadow-2xl"
            animate={{ y: [50, 20, 50] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
          <motion.img
            src={imgsingle}
            alt=""
            className="border-l-4 border-b-4 border-base-100 max-w-sm rounded-t-[40px] rounded-br-[40px] shadow-2xl "
            animate={{ x: [50, 20, 50] }}
            transition={{ duration: 15, repeat: Infinity }}
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
          <motion.p
            animate={{ y: [20, 30, 20] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="py-6"
          >
            Discover the latest job opportunities and career advice tailored to
            your needs. Join us to stay updated with the job market trends and
            find your dream job!
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
