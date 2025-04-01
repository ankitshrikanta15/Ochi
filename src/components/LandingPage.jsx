import { motion } from "framer-motion";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.3" className="w-full h-screen bg-[#F1F1F1] pt-1 relative">
      <div className="hero-text mt-40 px-14 text-[#212121]">
        <div className="masker uppercase font-body">
          <h1 className="text-[9vw] leading-[6.4vw]">we create</h1>
        </div>
        <div className="masker uppercase font-body flex">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "9vw" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
            className="w-[9vw] h-[5.7vw] relative mt-[0.8vw] rounded-md mr-[10px] overflow-hidden"
          >
            <img
              className="h-full w-full object-cover"
              src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
              alt="ochi cards"
            />
          </motion.div>
          <h1 className="text-[9vw] leading-[6.4vw]">eye-opening</h1>
        </div>
        <div className="masker uppercase font-body">
          <h1 className="text-[9vw] leading-[6.4vw]">presentations</h1>
        </div>
      </div>
      <div className="border-t-[1px] border-zinc-400 mt-28 px-14 flex justify-between items-center py-5">
        <p className="text-[1.1vw] font-regular font-display text-zinc-600 tracking-tight leading-none">
          For public and private companies
        </p>
        <p className="text-[1.1vw] font-regular font-display text-zinc-600 tracking-tight leading-none">
          From the first pitch to IPO
        </p>
        <div className="flex items-center gap-2">
          <button className="text-[1.1vw] font-regular font-display text-zinc-600 tracking-tight leading-none border-[1.5px] rounded-full border-zinc-800 px-4 py-2 uppercase">
            Start the project
          </button>
          <MdArrowOutward className="text-4xl py-2 px-2 border-[1.5px] border-zinc-800 rounded-full" />
        </div>
      </div>
      <h4 className="text-[1.1vw] text-zinc-400 absolute bottom-6 left-[50%] ">
        Scroll down
      </h4>
    </div>
  );
};

export default LandingPage;
