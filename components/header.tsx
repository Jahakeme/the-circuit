"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { User, Menu, X, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "/#features" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "For Mentors", href: "/mentors" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-md h-16 border-b border-white/10"
            : "bg-transparent h-20"
        }`}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-bold text-xl tracking-tight text-white">
              The <span className="text-primary">Circuit</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-300 transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link
              href="/onboarding/login"
              className="hidden sm:flex text-sm font-medium text-white hover:text-primary transition-colors"
            >
              Login
            </Link>
            <Link
              href="/onboarding"
              className="hidden sm:flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-bold text-black transition-transform hover:scale-105"
            >
              Get Started
            </Link>
            <button
              className="flex md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] flex flex-col bg-black md:hidden"
          >
            <div className="flex items-center justify-end p-6">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-primary"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col items-center gap-8 p-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold text-white hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
              <hr className="w-full border-zinc-800" />
              <Link
                href="/onboarding/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-medium text-white hover:text-primary"
              >
                Login
              </Link>
              <Link
                href="/onboarding"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex w-full items-center justify-center rounded-full bg-primary py-4 text-black font-bold"
              >
                Get Started
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
