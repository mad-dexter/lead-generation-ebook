import { Book, Rocket, Target } from "lucide-react";
import { motion } from "motion/react";

function Process() {
  return (
    <section className="bg-[#E0F2F1] py-16" id="about">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center font-header text-5xl font-bold tracking-wider text-[#004D40]">
          What You&apos;ll Learn
        </h2>
        <motion.div
          initial={{ x: 1000, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            x: { type: "spring", stiffness: 200, damping: 50 },
            opacity: { duration: 0.8 },
          }}
          viewport={{ once: true }}
          className="grid gap-12 md:grid-cols-3"
        >
          <div className="text-center">
            <Book className="mx-auto mb-4 h-12 w-12 text-[#004D40]" />
            <h3 className="mb-2 text-xl font-semibold">Foundation</h3>
            <p>Master the basics of digital marketing</p>
          </div>
          <div className="text-center">
            <Target className="mx-auto mb-4 h-12 w-12 text-[#004D40]" />
            <h3 className="mb-2 text-xl font-semibold">Strategy</h3>
            <p>Learn advanced targeting techniques</p>
          </div>
          <div className="text-center">
            <Rocket className="mx-auto mb-4 h-12 w-12 text-[#004D40]" />
            <h3 className="mb-2 text-xl font-semibold">Execution</h3>
            <p>Implement winning campaigns</p>
          </div>
        </motion.div>

        <div className="mt-8 flex items-center justify-center">
          <motion.a
            whileHover={{ scale: 1.1, backgroundColor: "#00352d" }}
            whileTap={{ scale: 1, backgroundColor: "#00352d" }}
            className="mt-2 w-fit rounded-lg bg-[#004D40] px-6 py-2 text-lg font-semibold text-white shadow-sm transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#45a049] focus:ring-offset-2 focus:ring-offset-slate-50"
            href="#form"
          >
            Explore Our Book
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default Process;
