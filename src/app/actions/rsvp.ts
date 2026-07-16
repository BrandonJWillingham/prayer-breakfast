"use server";

import { supabaseAdmin } from "@/lib/supabase/admin";

export type RsvpState = {
  success: boolean;
  message: string;
};

const initialError: RsvpState = {
  success: false,
  message: "Something went wrong.",
};

export async function submitRsvp(
  previousState: RsvpState,
  formData: FormData
): Promise<RsvpState> {
  const fullName = formData.get("fullName")?.toString().trim();
  const email = formData
    .get("email")
    ?.toString()
    .trim()
    .toLowerCase();

  const phone = formData.get("phone")?.toString().trim() || null;
  const guestCount = Number(formData.get("guestCount"));

  if (!fullName || !email) {
    return {
      success: false,
      message: "Please enter your full name and email address.",
    };
  }

  if (!email.includes("@")) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    };
  }

  if (
    !Number.isInteger(guestCount) ||
    guestCount < 1 ||
    guestCount > 10
  ) {
    return {
      success: false,
      message: "Please select a valid number of attendees.",
    };
  }

  const { error } = await supabaseAdmin.from("rsvps").insert({
    full_name: fullName,
    email,
    phone,
    guest_count: guestCount,
  });

  if (error) {
    console.error("Supabase RSVP error:", error);

    if (error.code === "23505") {
      return {
        success: false,
        message: "An RSVP has already been submitted with this email.",
      };
    }

    return initialError;
  }

  return {
    success: true,
    message: "Thank you! Your RSVP has been received.",
  };
}