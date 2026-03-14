import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { SupportForm } from "@/components/marketing/support-form";

const push = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push,
  }),
}));

describe("SupportForm", () => {
  beforeEach(() => {
    push.mockReset();
    vi.restoreAllMocks();
  });

  it("shows spanish validation messages when submitted empty", async () => {
    const user = userEvent.setup();
    render(<SupportForm locale="es" />);

    await user.click(
      screen.getByRole("button", { name: "Enviar mensaje" }),
    );

    expect(screen.getByText("Por favor escribe tu nombre.")).toBeInTheDocument();
    expect(screen.getByText("Por favor escribe tu email.")).toBeInTheDocument();
    expect(screen.getByText("Por favor escribe un asunto.")).toBeInTheDocument();
    expect(screen.getByText("Cuéntanos que paso.")).toBeInTheDocument();
  });

  it("renders english labels and redirects to the localized success route", async () => {
    const user = userEvent.setup();
    vi.spyOn(global, "fetch").mockResolvedValue(
      new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    );

    render(<SupportForm locale="en" />);

    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Send message" })).toBeInTheDocument();

    await user.type(screen.getByLabelText("Name"), "Angel");
    await user.type(screen.getByLabelText("Email"), "angel@example.com");
    await user.type(screen.getByLabelText("Subject"), "Sync issue");
    await user.type(
      screen.getByLabelText("Message"),
      "A new deck does not appear on my other device even after waiting and reopening the app.",
    );
    await user.click(screen.getByRole("button", { name: "Send message" }));

    await waitFor(() => {
      expect(push).toHaveBeenCalledWith("/en/support/success");
    });
  });
});
