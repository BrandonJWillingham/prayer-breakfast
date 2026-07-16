import Image from "next/image";
import {
  BookOpen,
  HandHeart,
  Music2,
  Sparkles,
  Sunrise,
} from "lucide-react";

const pushMeaning = [
  {
    letter: "P",
    title: "Pursue God’s Presence",
  },
  {
    letter: "U",
    title: "Understand God’s Will",
  },
  {
    letter: "S",
    title: "Surrender Completely",
  },
  {
    letter: "H",
    title: "Hold On in Faith",
  },
];

const programItems = [

  {
    number: "01",
    label: "Gathering",
    title: "Opening Prayer",
    description: "Inviting God`s presence and preparing our hearts.",
    icon: HandHeart,
  },
  {
    number: "02",
    label: "The Word",
    title: "Scripture",
    description: "Receiving encouragement and direction through God’s Word.",
    icon: BookOpen,
  },
  {
    number: "03",
    label: "Worship",
    title: "Praise & Worship",
    description: "Lifting our voices together in gratitude and adoration.",
    icon: Music2,
  },
  {
    number: "04",
    label: "Prayer Theme",
    title: "P.U.S.H.",
    description:
      "Pursue God’s presence, understand God’s will, surrender completely, and hold on in faith.",
    icon: Sparkles,
    featured: true,
  },
  {
    number: "05",
    label: "Closing",
    title: "Benediction",
    description: "Departing with God’s blessing, peace, and protection.",
    icon: Sunrise,
  },
];

export default function ProgramSection() {
  return (
    <section
      id="program"
      className="relative isolate overflow-hidden bg-[#03152c] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-amber-400/10 blur-3xl" />

        <div className="absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-20">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-amber-400/70" />

            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-400">
              Order of Service
            </p>

            <span className="h-px w-10 bg-amber-400/70" />
          </div>

          <h2 className="font-serif text-5xl font-semibold uppercase tracking-tight sm:text-6xl lg:text-7xl">
            The Program
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            A gathering centered around worship, the Word, and a deeper pursuit
            of God’s presence.
          </p>
        </div>

        <div className="grid items-stretch gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* Program timeline */}
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 shadow-2xl shadow-black/20 backdrop-blur-sm sm:p-8 lg:p-10">
            <div className="relative">
              <div className="absolute bottom-6 left-[27px] top-6 w-px bg-gradient-to-b from-amber-400/70 via-amber-400/20 to-transparent sm:left-[31px]" />

              <div className="space-y-3">
                {programItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.number}
                      className={`group relative grid grid-cols-[56px_1fr] gap-4 rounded-2xl p-3 transition-all duration-300 sm:grid-cols-[64px_1fr] sm:gap-5 sm:p-4 ${
                        item.featured
                          ? "border border-amber-400/30 bg-amber-400/[0.09] shadow-lg shadow-amber-950/20"
                          : "border border-transparent hover:border-white/10 hover:bg-white/[0.04]"
                      }`}
                    >
                      <div
                        className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border sm:h-16 sm:w-16 ${
                          item.featured
                            ? "border-amber-300 bg-amber-400 text-[#03152c]"
                            : "border-amber-400/25 bg-[#071c38] text-amber-400"
                        }`}
                      >
                        <Icon className="h-6 w-6" strokeWidth={1.7} />
                      </div>

                      <div className="min-w-0 py-1">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                          <span className="text-[10px] font-semibold tracking-[0.25em] text-amber-400/70">
                            {item.number}
                          </span>

                          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-400">
                            {item.label}
                          </p>
                        </div>

                        <h3
                          className={`mt-1 font-serif font-semibold ${
                            item.featured
                              ? "text-3xl tracking-[0.14em] text-amber-300 sm:text-4xl"
                              : "text-xl text-white sm:text-2xl"
                          }`}
                        >
                          {item.title}
                        </h3>

                        <p className="mt-2 max-w-lg text-sm leading-6 text-white/50">
                          {item.description}
                        </p>

                        {item.featured && (
                          <div className="mt-5 grid gap-2 sm:grid-cols-2">
                            {pushMeaning.map((item) => (
                              <div
                                key={item.letter}
                                className="flex items-center gap-3 rounded-xl border border-amber-400/15 bg-[#03152c]/40 p-3"
                              >
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-400 font-serif text-base font-bold text-[#03152c]">
                                  {item.letter}
                                </span>

                                <p className="text-xs font-medium leading-5 text-white/75">
                                  {item.title}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative min-h-[600px] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-black/30 lg:min-h-full">
            <Image
              src="/raisedHands.jpg"
              alt="Congregation raising their hands during worship"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#03152c] via-[#03152c]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#03152c]/20 to-transparent" />

            <div className="absolute right-5 top-5 rounded-full border border-white/15 bg-[#03152c]/50 px-4 py-2 backdrop-blur-md">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-300">
                Prayer Gathering
              </p>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9 lg:p-10">
              <div className="mb-5 h-px w-16 bg-amber-400" />

              <p className="font-serif text-4xl font-semibold tracking-[0.15em] text-amber-400 sm:text-5xl">
                P.U.S.H.
              </p>

              <p className="mt-3 max-w-md font-serif text-2xl font-semibold leading-tight text-white sm:text-3xl">
                A call to seek God with purpose, surrender, and unwavering
                faith.
              </p>

              <div className="mt-7 space-y-3">
                {pushMeaning.map((item) => (
                  <div key={item.letter} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-amber-400/40 bg-amber-400/10 font-serif font-semibold text-amber-300 backdrop-blur-sm">
                      {item.letter}
                    </span>

                    <p className="text-sm font-medium text-white/80">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}