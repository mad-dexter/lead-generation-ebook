import { motion } from "motion/react";

function Hero() {
  return (
    <section className="bg-[#004D40] py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
        <div className="flex flex-col items-center gap-4 md:items-baseline">
          <h1 className="font-header text-5xl font-bold leading-normal text-white md:text-7xl md:leading-tight">
            Be Master of <br /> Digital Marketing
          </h1>
          <p className="text-xl text-[#4CAF50]">
            A Complete Guide for Modern Marketers
          </p>

          <motion.a
            whileHover={{ scale: 1.1, backgroundColor: "#45a049" }}
            whileTap={{ scale: 1, backgroundColor: "#45a049" }}
            className="mt-6 w-fit rounded-2xl bg-[#4CAF50] px-5 py-3 text-xl font-semibold text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#45a049] focus:ring-offset-2 focus:ring-offset-slate-50 md:px-7 md:py-5 md:font-bold"
            href="#form"
          >
            Get Free E-Book
          </motion.a>
        </div>
        <div className="flex justify-center">
          <img
            // src="/assets/hero.jpg"
            src="/assets/DigitalMarketing_Hero.svg"
            alt="Ebook Cover"
            className="scale-x-125 scale-y-125"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
