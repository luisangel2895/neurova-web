"use client";

import { startTransition, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { ArrowRightIcon } from "@/components/marketing/icons";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function validate(values: FormState) {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.subject.trim()) {
    errors.subject = "Please enter a subject.";
  } else if (values.subject.trim().length < 4) {
    errors.subject = "The subject should be a little more specific.";
  }

  if (!values.message.trim()) {
    errors.message = "Please tell us what happened.";
  } else if (values.message.trim().length < 20) {
    errors.message = "A few more details will help us answer faster.";
  }

  return errors;
}

export function SupportForm() {
  const router = useRouter();
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [serverError, setServerError] = useState("");

  const isSubmitting = status === "loading";
  const messageCount = useMemo(() => values.message.trim().length, [values.message]);

  function updateField<Key extends keyof FormState>(key: Key, value: FormState[Key]) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setServerError("");
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setStatus("loading");
    setServerError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(payload?.error || "Unable to submit your message.");
      }

      setStatus("idle");
      setValues(initialState);

      startTransition(() => {
        router.push("/support/success");
      });
    } catch (error) {
      setStatus("error");
      setServerError(
        error instanceof Error
          ? error.message
          : "Something went wrong while sending your message.",
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card space-y-5 p-7 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Name"
          htmlFor="name"
          value={values.name}
          error={errors.name}
          onChange={(value) => updateField("name", value)}
          placeholder="Your name"
        />
        <Field
          label="Email"
          htmlFor="email"
          type="email"
          value={values.email}
          error={errors.email}
          onChange={(value) => updateField("email", value)}
          placeholder="you@example.com"
        />
      </div>

      <Field
        label="Subject"
        htmlFor="subject"
        value={values.subject}
        error={errors.subject}
        onChange={(value) => updateField("subject", value)}
        placeholder="Brief summary of the issue"
      />

      <div>
        <div className="mb-2 flex items-center justify-between gap-4">
          <label htmlFor="message" className="text-sm font-semibold text-ink">
            Message
          </label>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-subtle">
            {messageCount} chars
          </span>
        </div>
        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Describe the problem, what you expected, and any steps to reproduce it."
          rows={7}
          className={cn("input-field min-h-40 resize-y", errors.message && "input-error")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? (
          <p id="message-error" className="mt-2 text-sm text-danger">
            {errors.message}
          </p>
        ) : null}
      </div>

      {serverError ? (
        <div className="rounded-[1.2rem] border border-danger/20 bg-danger/8 px-4 py-3 text-sm leading-7 text-danger">
          {serverError}
        </div>
      ) : null}

      <div className="flex flex-col gap-3 border-t border-line/70 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-7 text-subtle">
          The current implementation posts to a Next.js route handler so you can
          swap in Formspree, Resend, or your own email pipeline later.
        </p>
        <button type="submit" className="button-primary" disabled={isSubmitting}>
          <span>{isSubmitting ? "Sending..." : "Send message"}</span>
          <ArrowRightIcon className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  htmlFor: keyof FormState;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: React.HTMLInputTypeAttribute;
};

function Field({
  label,
  htmlFor,
  value,
  error,
  onChange,
  placeholder,
  type = "text",
}: FieldProps) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold text-ink">
        {label}
      </label>
      <input
        id={htmlFor}
        name={htmlFor}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className={cn("input-field", error && "input-error")}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${htmlFor}-error` : undefined}
      />
      {error ? (
        <p id={`${htmlFor}-error`} className="mt-2 text-sm text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}
