import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function MentorCTASection() {
  return (
    <section className="bg-black py-24 px-6 md:px-12 border-t border-zinc-900 overflow-hidden">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8 relative z-10">
          <div className="inline-block rounded-full bg-zinc-900 px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wider border border-zinc-800">
            For Professionals
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Share Your Expertise, <br />
            <span className="text-primary">Shape Futures</span>
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-lg">
            Join a community of MEP professionals dedicated to mentoring the
            next generation. The Circuit makes it easy to give back without
            overwhelming time commitments.
          </p>

          <ul className="space-y-4 pt-2">
            {[
              "Set your own availability and capacity",
              "Guide students in your field of expertise",
              "View student quiz results to personalize guidance",
              "Lightweight async communication via chat",
              "Make an impact on the next generation of engineers",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-zinc-300">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 fill-primary/10" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="pt-6">
            <Link
              href="/become-mentor"
              className="inline-flex h-14 items-center justify-center rounded-md bg-primary px-8 font-bold text-black transition-all hover:bg-primary/90 hover:scale-105 shadow-lg shadow-primary/20"
            >
              Become a Mentor
            </Link>
          </div>
        </div>

        {/* Right Content - Mentor Card Simulator */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-20 pointer-events-none" />

          <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl backdrop-blur-sm">
            {/* Header */}
            <div className="flex items-start justify-between mb-8">
              <div className="flex gap-4">
                <div className="h-16 w-16 rounded-full bg-zinc-800 overflow-hidden border-2 border-primary">
                  {/* Placeholder Avatar - Using Unsplash Source */}
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop"
                    alt="Mentor"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Salman Omolaja
                  </h3>
                  <p className="text-sm text-zinc-400 font-medium">
                    Senior Mechanical Engineer
                  </p>
                  <div className="mt-3 flex gap-2">
                    <span className="rounded bg-zinc-900 px-2 py-0.5 text-[10px] font-bold text-zinc-300 border border-zinc-800">
                      12 Yrs Exp
                    </span>
                    <span className="rounded bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary border border-primary/20">
                      HVAC Specialist
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              <p className="text-sm text-zinc-300 italic leading-relaxed border-l-2 border-primary/50 pl-4 py-1">
                "Passionate about sustainable building systems and mentoring
                junior engineers on practical site developments."
              </p>

              <div className="flex items-center gap-2 text-xs font-semibold text-primary bg-primary/5 w-fit px-3 py-1.5 rounded-full border border-primary/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Accepting 3 more students
              </div>
            </div>

            <button className="w-full rounded-lg bg-primary py-3.5 text-sm font-bold text-black hover:bg-primary/90 transition-all hover:scale-[1.02]">
              Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
