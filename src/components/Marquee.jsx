import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.01" className="w-full py-10 bg-[#004D43] font-body rounded-t-2xl">
      <div className="text border-t-[2px] border-b-[2px] border-[#278477] flex whitespace-nowrap overflow-hidden text-[#FFFFFF]">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[25vw] -mt-10 leading-none uppercase pr-20"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[25vw] -mt-10 leading-none uppercase pr-20"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
