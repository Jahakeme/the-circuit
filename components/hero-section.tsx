"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

const variants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black text-center px-4">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1565514020176-dbf2277810d3?q=80&w=2070&auto=format&fit=crop')", // Industrial Refinery
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
      </div>

      <div className="z-10 w-full max-w-5xl pt-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="space-y-8"
        >
          <motion.h1
            variants={variants}
            className="text-5xl font-bold tracking-tight text-primary sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Your Path To <br />
            <span className="text-primary">Engineering Excellence</span>
          </motion.h1>

          <motion.p
            variants={variants}
            className="mx-auto max-w-2xl text-lg text-white/90 sm:text-xl font-light"
          >
            The Circuit connects engineering students with experienced MEP
            professionals for guidance, learning support, and career clarity.
            Start your journey today.
          </motion.p>

          <motion.div
            variants={variants}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 pt-8"
          >
            <Link
              href="/onboarding"
              className="inline-flex h-14 w-full sm:w-auto min-w-[200px] items-center justify-center rounded-md bg-primary px-8 text-lg font-bold text-black transition-all hover:bg-primary/90 hover:scale-105"
            >
              Find a Mentor
            </Link>
            <Link
              href="/onboarding"
              className="inline-flex h-14 w-full sm:w-auto min-w-[200px] items-center justify-center rounded-md border-2 border-zinc-700 bg-black/40 px-8 text-lg font-bold text-white transition-all hover:bg-zinc-800 hover:border-zinc-500 hover:scale-105 backdrop-blur-sm"
            >
              Become a Mentor
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
