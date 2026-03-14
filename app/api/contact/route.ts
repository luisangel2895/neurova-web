import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as ContactPayload | null;

  if (!body) {
    return NextResponse.json(
      { error: "Invalid request payload." },
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
      { error: "Please complete all fields with valid information." },
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
