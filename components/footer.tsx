"use client";

import Link from "next/link";
import { Mail, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-900 bg-black px-6 py-12 md:py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4 lg:gap-16">
        {/* Brand */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-xl tracking-tight text-white">
              The <span className="text-primary">Circuit</span>
            </span>
          </Link>
          <p className="text-sm text-zinc-400">
            Empowering the next generation of engineers through mentorship,
            guidance, and real-world connection.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 transition-colors hover:bg-primary hover:text-black"
            >
              <Twitter className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 transition-colors hover:bg-primary hover:text-black"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-zinc-500">
            Platform
          </h3>
          <ul className="space-y-3 text-sm text-zinc-400">
            <li>
              <Link
                href="/mentors"
                className="hover:text-primary transition-colors"
              >
                Find a Mentor
              </Link>
            </li>
            <li>
              <Link
                href="/become-mentor"
                className="hover:text-primary transition-colors"
              >
                Become a Mentor
              </Link>
            </li>
            <li>
              <Link
                href="/how-it-works"
                className="hover:text-primary transition-colors"
              >
                How It Works
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="hover:text-primary transition-colors"
              >
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-zinc-500">
            Resources
          </h3>
          <ul className="space-y-3 text-sm text-zinc-400">
            <li>
              <Link
                href="/blog"
                className="hover:text-primary transition-colors"
              >
                Engineering Blog
              </Link>
            </li>
            <li>
              <Link
                href="/career"
                className="hover:text-primary transition-colors"
              >
                Career Guide
              </Link>
            </li>
            <li>
              <Link
                href="/community"
                className="hover:text-primary transition-colors"
              >
                Community Setup
              </Link>
            </li>
            <li>
              <Link
                href="/help"
                className="hover:text-primary transition-colors"
              >
                Help Center
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
            Stay Connected
          </h3>
          <p className="text-sm text-zinc-400">
            Join our newsletter for the latest industry insights and mentorship
            tips.
          </p>
          <div className="flex w-full gap-2">
            <input
              type="email"
              placeholder="Enter email"
              className="w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-white placeholder-zinc-600 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button className="flex items-center justify-center rounded-md bg-primary px-3 py-2 text-black font-bold transition-colors hover:bg-primary/90">
              <Mail className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-zinc-800 pt-8 text-xs text-zinc-600 sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} The Circuit. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
