import React from 'react'
import { motion } from "framer-motion";

const AnimatedName = () => {
  return (
    <section className="overflow-hidden">
      <Logos />
    </section>
  )
}

export default AnimatedName



const Logos = () => {
  return (
    <div className=" w-[80%] h-[10rem] absolute -rotate-90 scale-[1.01] -left-[29rem] -top-[2rem] overflow-hidden">
      <TranslateWrapper>
        <LogoItem />
        <LogoItem />
        <LogoItem />
        <LogoItem />
        <LogoItem />
        <LogoItem />
      </TranslateWrapper>
    </div>
  );
};

const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="flex px-2"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ Icon, name }) => {
  return (
    <span className="flex items-center justify-center gap-4 px-4 py-2 md:py-4">
      <span className="text-[5rem] font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl">
        Welcome
      </span>
    </span>
  );
};

