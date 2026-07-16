import Image from "next/image";
import {
  CalendarDays,
  Clock3,
  MapPin,
  Coffee,
  Music,
  Mic2,
  UtensilsCrossed,
  HeartHandshake,
  GlassWater,
  Quote,
  HandHeart,
} from "lucide-react";

import Divider from "@/components/divider";
import RsvpForm from "@/components/rsvpForm";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-stone-50 text-slate-950">
      {/* HERO */}
      <section
        id="hero"
        className="relative flex min-h-[760px] items-center overflow-hidden bg-[#03152c] lg:min-h-screen"
      >
        <Image
          src="/hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_center] sm:object-[68%_center] lg:object-center"
        />

        {/* Dark overlay for readable text */}
        <div className="absolute inset-0 bg-[#03152c]/55 lg:bg-gradient-to-r lg:from-[#03152c] lg:via-[#03152c]/85 lg:to-transparent" />

        {/* Additional mobile overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#03152c] via-transparent to-[#03152c]/25 lg:hidden" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
          <div className="w-full max-w-xl text-center lg:text-left">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-amber-400 sm:text-sm">
              Liberty Covenant Sound Ministries
            </p>

            <h1 className="font-serif text-6xl font-medium uppercase leading-[0.82] tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-9xl">
              Prayer
            </h1>

            <p className="-mt-1 rotate-[-3deg] font-serif text-5xl italic leading-none text-amber-400 sm:text-6xl lg:text-7xl">
              Breakfast
            </p>

            <p className="mx-auto mt-7 max-w-md font-serif text-lg uppercase leading-relaxed tracking-[0.1em] text-white sm:text-xl lg:mx-0">
              A morning of prayer, faith, and fellowship
            </p>

            <ul className="mx-auto mt-9 max-w-md space-y-4 text-left text-sm font-medium text-white sm:text-base lg:mx-0">
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-amber-400 text-amber-400">
                  <CalendarDays className="h-5 w-5" />
                </span>

                <time dateTime="2026-07-18">July 18, 2026</time>
              </li>

              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-amber-400 text-amber-400">
                  <Clock3 className="h-5 w-5" />
                </span>

                <time dateTime="10:00">10:00 AM</time>
              </li>

              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-amber-400 text-amber-400">
                  <MapPin className="h-5 w-5" />
                </span>

                <address className="not-italic leading-relaxed">
                  Liberty Fellowship Deliverance Ministries, Inc.
                  <br />
                  4331 White Plains Road
                  <br />
                  Bronx, NY 10466
                </address>
              </li>
            </ul>

            <a
              href="#contact"
              className="mt-9 inline-flex min-h-12 items-center justify-center rounded-md bg-amber-400 px-8 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[#03152c] shadow-lg transition hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-[#03152c]"
            >
              RSVP to the Invite
            </a>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section
        id="menu"
        className="relative bg-stone-50 px-6 py-20 sm:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-5xl">
          <header className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
              Prayer Breakfast
            </p>

            <h2 className="mt-2 font-serif text-5xl font-semibold uppercase text-[#08234b] sm:text-6xl">
              Menu
            </h2>

            <div className="mx-auto mt-4 max-w-[170px]">
              <Divider />
            </div>
          </header>

          <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-0">
            {/* HOT BEVERAGES */}
            <article className="md:border-r md:border-amber-500/50 md:pr-12">
              <div className="mb-6 flex items-center justify-center gap-3 md:justify-start">
                <Coffee
                  className="h-9 w-9 text-amber-500"
                  strokeWidth={1.5}
                />

                <h3 className="font-serif text-2xl font-semibold uppercase text-[#08234b]">
                  Hot Beverages
                </h3>
              </div>

              <ul className="mx-auto max-w-xs space-y-3 md:mx-0">
                {[
                  "Regular tea",
                  "Herbal teas",
                  "Coffee",
                  "Hot chocolate",
                  "Sugar",
                  "Milk",
                  "Coffee creamer",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                    <span className="leading-relaxed text-slate-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </article>

            {/* COLD BEVERAGES */}
            <article className="md:pl-12">
              <div className="mb-6 flex items-center justify-center gap-3 md:justify-start">
                <GlassWater
                  className="h-9 w-9 text-amber-500"
                  strokeWidth={1.5}
                />

                <h3 className="font-serif text-2xl font-semibold uppercase text-[#08234b]">
                  Cold Beverages
                </h3>
              </div>

              <ul className="mx-auto max-w-xs space-y-3 md:mx-0">
                {[
                  "Orange juice",
                  "Assorted chilled juices",
                  "Cranberry juice",
                  "Water",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                    <span className="leading-relaxed text-slate-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          {/* FOOD */}
          <article className="mt-14 border-t border-amber-500/50 pt-12">
            <div className="mb-7 flex items-center justify-center gap-3">
              <UtensilsCrossed
                className="h-9 w-9 text-amber-500"
                strokeWidth={1.5}
              />

              <h3 className="font-serif text-2xl font-semibold uppercase text-[#08234b]">
                Food
              </h3>
            </div>

            <ul className="mx-auto grid max-w-2xl gap-3 text-center sm:grid-cols-2">
              {[
                "Hard dough bread or rolls",
                "Butter",
                "Muffins",
                "Eggs",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-lg bg-white px-5 py-3 text-slate-700 shadow-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* PROGRAM */}
      <section
        id="program"
        className="relative overflow-hidden bg-[#03152c] px-6 py-20 text-white sm:px-10 lg:py-24"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,156,44,0.15),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="flex items-center justify-center gap-4 lg:justify-start">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-amber-400 text-amber-400">
                <HandHeart className="h-8 w-8" strokeWidth={1.5} />
              </span>

              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-amber-400">
                  Order of Service
                </p>

                <h2 className="font-serif text-5xl font-semibold uppercase sm:text-6xl">
                  Program
                </h2>
              </div>
            </div>

            <div className="mx-auto mt-5 max-w-[180px] lg:mx-0">
              <Divider />
            </div>

            <ul className="mx-auto mt-10 max-w-sm space-y-6 lg:mx-0">
              <li className="flex items-center gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-400/10 text-amber-400">
                  <Music className="h-6 w-6" />
                </span>

                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-amber-400">
                    Welcome
                  </p>
                  <p className="text-lg font-semibold">
                    Praise and Worship
                  </p>
                </div>
              </li>

              <li className="flex items-center gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-400/10 text-amber-400">
                  <HandHeart className="h-6 w-6" />
                </span>

                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-amber-400">
                    Fellowship
                  </p>
                  <p className="text-lg font-semibold">Prayer</p>
                </div>
              </li>

              <li className="flex items-center gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-400/10 text-amber-400">
                  <Mic2 className="h-6 w-6" />
                </span>

                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-amber-400">
                    Message
                  </p>
                  <p className="text-lg font-semibold">Spoken Word</p>
                </div>
              </li>
            </ul>
          </div>

          <div
            className="relative mx-auto aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-3xl"
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 60%, rgba(0,0,0,.85) 75%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse at center, black 60%, rgba(0,0,0,.85) 75%, transparent 100%)",
            }}
          >
            <Image
              src="/raisedHands.jpg"
              alt="Congregation worshipping together"
              fill
              sizes="(max-width: 1024px) 90vw, 55vw"
              className="object-cover opacity-75"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#03152c]/60 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* RSVP */}
      <section
        id="contact"
        className="bg-stone-50 px-6 py-20 sm:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-2xl">
          <header className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
              Join Us
            </p>

            <h2 className="mt-2 font-serif text-4xl font-semibold uppercase leading-tight text-[#08234b] sm:text-5xl">
              RSVP to the Invite
            </h2>

            <div className="mx-auto mt-4 max-w-[180px]">
              <Divider />
            </div>

            <p className="mt-5 text-lg text-slate-600">
              We&apos;d love to have you join us!
            </p>
          </header>

          <div className="mt-10 rounded-2xl border border-stone-200 bg-white p-5 shadow-xl shadow-slate-900/5 sm:p-8">
            <RsvpForm />
          </div>

          <p className="mt-7 flex items-center justify-center gap-2 text-center text-sm font-medium text-[#08234b] sm:text-base">
            <HeartHandshake className="h-5 w-5 shrink-0 text-amber-500" />
            Together in Prayer. United in Purpose.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="footer"
        className="relative overflow-hidden bg-[#03152c] px-6 py-16 text-white sm:px-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(217,156,44,0.12),transparent_45%)]" />

        <div className="relative mx-auto max-w-3xl text-center">
          <Quote
            className="mx-auto h-9 w-9 text-amber-400"
            strokeWidth={1.5}
          />

          <blockquote className="mt-5 font-serif text-lg leading-relaxed text-stone-100 sm:text-xl">
            “If My people who are called by My name will humble themselves,
            and pray and seek My face, and turn from their wicked ways, then I
            will hear from heaven, and will forgive their sin and heal their
            land.”
          </blockquote>

          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-amber-400">
            2 Chronicles 7:14
          </p>

          <div className="mx-auto my-9 h-px w-24 bg-amber-400/70" />

          <h3 className="font-serif text-2xl font-semibold uppercase tracking-[0.08em]">
            Liberty Fellowship
          </h3>

          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
            Deliverance Ministries, Inc.
          </p>

          <p className="mt-7 text-xs text-slate-400">
            © 2026 Liberty Fellowship Deliverance Ministries, Inc.
          </p>
        </div>
      </footer>
    </main>
  );
}