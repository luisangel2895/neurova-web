"use client";

import { startTransition, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { ArrowRightIcon } from "@/components/marketing/icons";
import { localizedPath, type Locale } from "@/lib/i18n";
import { getSiteCopy } from "@/lib/site-content";
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

function validate(values: FormState, locale: Locale) {
  const copy = getSiteCopy(locale).support.form.validation;
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = copy.nameRequired;
  }

  if (!values.email.trim()) {
    errors.email = copy.emailRequired;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = copy.emailInvalid;
  }

  if (!values.subject.trim()) {
    errors.subject = copy.subjectRequired;
  } else if (values.subject.trim().length < 4) {
    errors.subject = copy.subjectShort;
  }

  if (!values.message.trim()) {
    errors.message = copy.messageRequired;
  } else if (values.message.trim().length < 20) {
    errors.message = copy.messageShort;
  }

  return errors;
}

export function SupportForm({ locale }: { locale: Locale }) {
  const formCopy = getSiteCopy(locale).support.form;
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

    const nextErrors = validate(values, locale);
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
        body: JSON.stringify({ ...values, locale }),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(payload?.error || formCopy.serverErrors.submitFailed);
      }

      setStatus("idle");
      setValues(initialState);

      startTransition(() => {
        router.push(localizedPath(locale, "/support/success"));
      });
    } catch (error) {
      setStatus("error");
      setServerError(
        error instanceof Error
          ? error.message
          : formCopy.serverErrors.unknown,
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card space-y-5 p-7 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label={formCopy.fields.name.label}
          htmlFor="name"
          value={values.name}
          error={errors.name}
          onChange={(value) => updateField("name", value)}
          placeholder={formCopy.fields.name.placeholder}
        />
        <Field
          label={formCopy.fields.email.label}
          htmlFor="email"
          type="email"
          value={values.email}
          error={errors.email}
          onChange={(value) => updateField("email", value)}
          placeholder={formCopy.fields.email.placeholder}
        />
      </div>

      <Field
        label={formCopy.fields.subject.label}
        htmlFor="subject"
        value={values.subject}
        error={errors.subject}
        onChange={(value) => updateField("subject", value)}
        placeholder={formCopy.fields.subject.placeholder}
      />

      <div>
        <div className="mb-2 flex items-center justify-between gap-4">
          <label htmlFor="message" className="text-sm font-semibold text-ink">
            {formCopy.fields.message.label}
          </label>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-subtle">
            {messageCount} {formCopy.counterLabel}
          </span>
        </div>
        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder={formCopy.fields.message.placeholder}
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
          {formCopy.helperText}
        </p>
        <button type="submit" className="button-primary" disabled={isSubmitting}>
          <span>{isSubmitting ? formCopy.sendingLabel : formCopy.submitLabel}</span>
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
