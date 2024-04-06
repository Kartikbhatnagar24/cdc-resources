"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Interview Preparation
          </h1>
          {/* DESC */}
          {/* //mek the test for intervie preparation */}
          <p className="md:text-xl"> 
            Prepare for your next interview with our resources and guides.
          </p>
          <div className="w-full flex gap-4 items-center justify-center">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              Explore Now
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
