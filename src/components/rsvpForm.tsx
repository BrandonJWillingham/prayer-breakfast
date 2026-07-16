"use client";

import { useActionState } from "react";
import { submitRsvp, type RsvpState } from "@/app/actions/rsvp";

const initialState: RsvpState = {
  success: false,
  message: "",
};

const fieldStyles =
  "w-full rounded-md border border-stone-300 bg-stone-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 disabled:cursor-not-allowed disabled:opacity-60";

const labelStyles =
  "mb-2 block text-sm font-semibold text-[#08234b]";

export default function RsvpForm() {
  const [state, formAction, pending] = useActionState(
    submitRsvp,
    initialState
  );

  return (
    <form action={formAction} className="space-y-5">
      <div>
        <label htmlFor="fullName" className={labelStyles}>
          Full name
        </label>

        <input
          id="fullName"
          name="fullName"
          type="text"
          autoComplete="name"
          placeholder="Enter your full name"
          disabled={pending}
          className={fieldStyles}
          required
        />
      </div>

      <div>
        <label htmlFor="email" className={labelStyles}>
          Email address
        </label>

        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          placeholder="you@example.com"
          disabled={pending}
          className={fieldStyles}
          required
        />
      </div>

      <div>
        <label htmlFor="phone" className={labelStyles}>
          Phone number
          <span className="ml-1 font-normal text-slate-400">
            Optional
          </span>
        </label>

        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          placeholder="(555) 555-5555"
          disabled={pending}
          className={fieldStyles}
        />
      </div>

      <div>
        <label htmlFor="guestCount" className={labelStyles}>
          Number attending
        </label>

        <select
          id="guestCount"
          name="guestCount"
          defaultValue="1"
          disabled={pending}
          className={`${fieldStyles} cursor-pointer`}
          required
        >
          <option value="1">1 person</option>
          <option value="2">2 people</option>
          <option value="3">3 people</option>
          <option value="4">4 people</option>
          <option value="5">5 people</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="flex min-h-12 w-full items-center justify-center rounded-md bg-amber-400 px-6 py-3 font-serif text-lg font-bold uppercase tracking-[0.08em] text-[#03152c] shadow-md transition hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Submitting..." : "RSVP Now"}
      </button>

      {state.message && (
        <p
          role="status"
          aria-live="polite"
          className={`rounded-md border px-4 py-3 text-center text-sm font-medium ${
            state.success
              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
              : "border-red-200 bg-red-50 text-red-700"
          }`}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}