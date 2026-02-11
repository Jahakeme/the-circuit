import {
  UserCheck,
  MessageSquare,
  BookOpen,
  TrendingUp,
  ShieldCheck,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: UserCheck,
    title: "Find Your Perfect Mentor",
    desc: "Browse experienced MEP professionals filtered by expertise in Mechanical, Electrical, or Plumbing engineering.",
  },
  {
    icon: MessageSquare,
    title: "Direct Chat Access",
    desc: "Once connected, enjoy private one-on-one conversations with your mentor for personalized guidance.",
  },
  {
    icon: BookOpen,
    title: "Learning Quizzes",
    desc: "Take short assessments to evaluate your understanding. Mentors can view results to guide sessions.",
  },
  {
    icon: TrendingUp,
    title: "Track Your Progress",
    desc: "Monitor your mentorship journey with connection status, quiz completions, and activity tracking.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Professionals",
    desc: "All mentors are verified industry professionals with real-world experience in their fields.",
  },
  {
    icon: Clock,
    title: "Flexible Engagement",
    desc: "Mentors set their availability, ensuring quality interactions without overwhelming time commitments.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-black py-24 px-6 md:px-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-center text-3xl font-bold text-primary sm:text-4xl">
          Everything You Need to Succeed
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 hover:bg-zinc-900 transition-colors"
            >
              <div className="mb-6 inline-flex rounded-xl bg-primary/20 p-3 text-primary">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">
                {feature.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
