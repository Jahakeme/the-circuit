"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function OnboardingWelcomePage() {
  return (
    <div className="flex min-h-screen bg-black text-white font-sans">
      {/* Left Panel */}
      <div className="relative hidden lg:flex lg:w-[45%] flex-col items-center justify-center p-16 bg-black overflow-hidden text-center">
        {/* Vertical gold divider */}
        <div className="absolute right-0 top-0 bottom-0 w-px bg-primary/60" />
        {/* Circuit grid background */}
        <div className="absolute inset-0 circuit-grid opacity-30 pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <h1 className="text-6xl font-bold text-primary leading-tight mb-6">
            The Circuit
          </h1>
          <p className="text-white/60 text-sm max-w-xs leading-relaxed">
            Connecting engineering students with experienced MEP professionals
            for guidance and support.
          </p>
        </motion.div>
      </div>

      {/* Right Panel */}
      <div className="flex flex-1 flex-col items-center justify-center px-8 py-16 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="w-full max-w-md"
        >
          {/* Mobile logo */}
          <div className="lg:hidden mb-10 text-center">
            <h2 className="text-3xl font-bold text-primary">The Circuit</h2>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-3">
            Welcome to The Circuit
          </h2>
          <p className="text-white/60 text-sm mb-10">
            Connect with Engineering professionals, gain valuable guidance and
            build your future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Link
              href="/onboarding/signup"
              className="flex-1 flex items-center justify-center h-12 rounded-md border-2 border-primary bg-transparent text-primary font-semibold text-sm transition-all hover:bg-primary hover:text-black hover:scale-105"
            >
              Sign up with Email
            </Link>
            <button
              className="flex-1 flex items-center justify-center h-12 rounded-md border-2 border-primary bg-transparent text-primary font-semibold text-sm transition-all hover:bg-primary hover:text-black hover:scale-105"
              onClick={() => {}}
            >
              Sign up with Google
            </button>
          </div>

          <p className="text-white/50 text-xs text-center">
            Already have an account?{" "}
            <Link
              href="/onboarding/login"
              className="text-primary hover:underline font-medium"
            >
              Login
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
