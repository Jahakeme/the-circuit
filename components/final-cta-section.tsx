import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section className="relative overflow-hidden border-t border-zinc-900 bg-black py-24 sm:py-32">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Circuit Lines subtle background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white mb-6 sm:text-5xl md:text-6xl">
          Ready to Power Up Your <br />
          <span className="text-primary">Engineering Career?</span>
        </h2>
        <p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join The Circuit today and connect with mentors who can help you
          navigate your path to success in MEP engineering.
        </p>

        <Link
          href="/signup"
          className="inline-flex h-14 items-center justify-center rounded-md bg-primary px-10 text-lg font-bold text-black transition-all hover:scale-105 hover:bg-primary/90 shadow-xl shadow-primary/20 group"
        >
          Get Started{" "}
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
