import {
  UserPlus,
  Search,
  MessageSquarePlus,
  BookOpenCheck,
} from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Your Profile",
    desc: "Sign up and tell us about your engineering interests, academic level, and goals.",
  },
  {
    icon: Search,
    title: "Browse Mentors",
    desc: "Explore verified MEP professionals filtered by field, experience, and availability.",
  },
  {
    icon: MessageSquarePlus,
    title: "Send a Request",
    desc: "Found the right mentor? Send a personalized request to start your connection.",
  },
  {
    icon: BookOpenCheck,
    title: "Start Learning",
    desc: "Once accepted, chat directly with your mentor and accelerate your career growth.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative py-24 bg-black border-t border-zinc-900"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070')",
          }} // Warehouse/Industrial
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 text-center">
        <h2 className="mb-20 text-3xl font-bold text-white sm:text-4xl">
          How <span className="text-primary">The Circuit</span> Works
          <p className="mt-4 text-sm font-normal text-zinc-400">
            Get connected with your ideal mentor in four simple steps
          </p>
        </h2>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center group"
            >
              {/* Connector Line */}
              {idx !== steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[1px] bg-zinc-700 opacity-50" />
              )}

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-black font-bold transform transition-transform group-hover:scale-110 shadow-lg shadow-primary/20">
                <step.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-white">
                {step.title}
              </h3>
              <p className="text-sm text-zinc-400 max-w-[200px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
