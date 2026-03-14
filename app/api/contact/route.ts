import { NextResponse } from "next/server";

import { defaultLocale, isLocale } from "@/lib/i18n";
import { getSiteCopy } from "@/lib/site-content";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  locale?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as ContactPayload | null;
  const locale = body?.locale && isLocale(body.locale) ? body.locale : defaultLocale;
  const errors = getSiteCopy(locale).support.form.serverErrors;

  if (!body) {
    return NextResponse.json(
      { error: errors.invalidPayload },
      { status: 400 },
    );
  }

  const name = body.name?.trim() || "";
  const email = body.email?.trim() || "";
  const subject = body.subject?.trim() || "";
  const message = body.message?.trim() || "";

  if (
    !name ||
    !email ||
    !subject ||
    !message ||
    !isValidEmail(email) ||
    message.length < 20
  ) {
    return NextResponse.json(
      { error: errors.invalidInfo },
      { status: 400 },
    );
  }

  await new Promise((resolve) => setTimeout(resolve, 700));

  // TODO: Replace this mock handler with your real delivery integration.
  // This is the handoff point for Resend, Formspree, or another email endpoint.
  return NextResponse.json({
    ok: true,
    message: "Support request received.",
  });
}
