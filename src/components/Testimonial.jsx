import { ChevronLeft, ChevronRight } from "lucide-react";
// import { motion } from "motion/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "This ebook completely transformed my digital marketing strategy. The ROI has been incredible.",
    name: "Sarah Johnson",
    title: "Marketing Director",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100",
  },
  {
    quote:
      "A must-read for any modern marketer. Clear, actionable insights that deliver results.",
    name: "Michael Chen",
    title: "Growth Lead",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100",
  },
  {
    quote: "Read this book to become the best of the best.",
    name: "John Doe",
    title: "CEO",
    image: "https://mighty.tools/mockmind-api/content/human/122.jpg",
  },
];

// const variants = {
//   enter: (direction) => {
//     console.log(direction ? true : false);
//     return {
//       x: direction > 0 ? 1000 : -1000,
//       opacity: 0,
//       display: "block",
//     };
//   },
//   center: {
//     zIndex: 1,
//     x: 0,
//     opacity: 1,
//     display: "block",
//   },
//   exit: (direction) => {
//     return {
//       zIndex: 0,
//       x: direction < 0 ? 1000 : -1000,
//       opacity: 0,
//       display: "none",
//     };
//   },
// };

function Testimonial() {
  const [[currentTestimonial, direction], setCurrentTestimonial] = useState([
    0, 0,
  ]);

  const variants = {
    enter: (direction) => {
      console.log(direction ? true : false);
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        display: "block",
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      display: "block",
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        display: "none",
      };
    },
  };

  return (
    <section className="bg-[#004D40] py-14 pt-20" id="testimonials">
      <div className="mx-auto max-w-7xl px-6 md:px-16">
        <div className="relative">
          <div className="font-fontSansSerif text-8xl text-[#4CAF50]">
            &ldquo;
          </div>
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={currentTestimonial}
              variants={variants}
              custom={direction}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 200, damping: 30 },
                opacity: { duration: 0.1 },
                display: { duration: 0 },
              }}
            >
              <div className="mb-8 text-xl font-thin italic tracking-wider text-white">
                {testimonials[currentTestimonial].quote}
              </div>
              <div className="flex items-center">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="mr-4 h-12 w-12 rounded-full"
                />
                <div>
                  <div className="font-semibold text-white">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-[#4CAF50]">
                    {testimonials[currentTestimonial].title}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex space-x-14">
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#45a049" }}
              whileTap={{ scale: 1, backgroundColor: "#45a049" }}
              onClick={() =>
                setCurrentTestimonial((prev) =>
                  prev[0] === 0
                    ? [testimonials.length - 1, -1]
                    : [prev[0] - 1, -1],
                )
              }
              className="rounded-full bg-[#4CAF50] p-2 text-white transition-all duration-100 focus:outline-none focus:ring-2 focus:ring-[#45a049] focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <ChevronLeft className="h-6 w-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#45a049" }}
              whileTap={{ scale: 1, backgroundColor: "#45a049" }}
              onClick={() =>
                setCurrentTestimonial((prev) =>
                  prev[0] === testimonials.length - 1
                    ? [0, 1]
                    : [prev[0] + 1, 1],
                )
              }
              className="rounded-full bg-[#4CAF50] p-2 text-white transition-all duration-100 focus:outline-none focus:ring-2 focus:ring-[#45a049] focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <ChevronRight className="h-6 w-6" />
            </motion.button>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-center">
          <motion.a
            whileHover={{ scale: 1.1, backgroundColor: "#45a049" }}
            whileTap={{ scale: 1, backgroundColor: "#45a049" }}
            className="mt-4 w-fit rounded-lg bg-[#4CAF50] px-6 py-2 text-lg font-semibold text-white shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#45a049] focus:ring-offset-2 focus:ring-offset-slate-50"
            href="#form"
          >
            Start Reading
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
