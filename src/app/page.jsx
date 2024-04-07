"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

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
          <h1 className="text-4xl md:text-6xl font-bold">
            Interview Preparation
          </h1>
          <p className="md:text-xl"> 
            Prepare for your next interview with our resources and guides.
          </p>
          <div className="w-full flex gap-4 items-center justify-center">
            <Link  href="/resources" className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              Explore Now
            </Link>
            <Link  href="/contact" className="p-4 rounded-lg ring-1 ring-black">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
