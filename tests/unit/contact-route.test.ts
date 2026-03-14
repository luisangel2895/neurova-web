import { POST } from "@/app/api/contact/route";

describe("POST /api/contact", () => {
  it("returns a spanish error for malformed payloads", async () => {
    const response = await POST(
      new Request("http://localhost/api/contact", {
        method: "POST",
        body: "{not-json",
      }),
    );

    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toEqual({
      error: "Solicitud invalida.",
    });
  });

  it("returns localized validation errors for english support submissions", async () => {
    const response = await POST(
      new Request("http://localhost/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          locale: "en",
          name: "Angel",
          email: "invalid-email",
          subject: "Bug",
          message: "Too short",
        }),
      }),
    );

    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toEqual({
      error: "Please complete all fields with valid information.",
    });
  });

  it("accepts valid support payloads", async () => {
    const response = await POST(
      new Request("http://localhost/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          locale: "es",
          name: "Angel",
          email: "angel@example.com",
          subject: "Problema de sincronizacion",
          message:
            "La sincronizacion no refleja un deck nuevo en otro dispositivo despues de varios minutos.",
        }),
      }),
    );

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({
      ok: true,
      message: "Support request received.",
    });
  });
});
