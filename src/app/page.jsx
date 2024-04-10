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
      <div className="h-full flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 justify-center items-center">
        <div className="h-1/2 lg:h-full w-full flex flex-col gap-8 items-center justify-center">
          <div>
            <Image src={"/career.png"} width={200} height={200} alt="Logo" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold">
            Career Bridge
          </h1>
          <p className="md:text-xl text-center">
            {"Carrier Bridge offers a comprehensive platform for data, machine learning, and software resources. Connect directly with startup HR contacts for career opportunities. Whether you're a novice or an expert, unlock your potential with our tailored tools and insights."}
          </p>
          <div className="w-full flex gap-4 items-center justify-center">
            <Link href="/resources" className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              Explore Now
            </Link>
            <Link href="/contact" className="p-4 rounded-lg ring-1 ring-black">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
