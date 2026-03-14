import { expect, test } from "@playwright/test";

test("shows spanish validation messages and completes the support flow", async ({
  page,
}) => {
  await page.goto("/support");

  await page.getByRole("button", { name: "Enviar mensaje" }).click();

  await expect(page.getByText("Por favor escribe tu nombre.")).toBeVisible();
  await expect(page.getByText("Por favor escribe tu email.")).toBeVisible();

  await page.getByLabel("Nombre").fill("Angel");
  await page.getByLabel("Email").fill("angel@example.com");
  await page.getByLabel("Asunto").fill("Problema de OCR");
  await page
    .getByLabel("Mensaje")
    .fill(
      "El OCR no reconoce correctamente un bloque de texto desde una captura y queria reportarlo con detalle.",
    );

  await page.getByRole("button", { name: "Enviar mensaje" }).click();

  await expect(page).toHaveURL(/\/support\/success$/);
  await expect(
    page.getByRole("heading", {
      name: /Gracias, tu solicitud de soporte ya va en camino/i,
    }),
  ).toBeVisible();
});

test("renders the english support page", async ({ page }) => {
  await page.goto("/en/support");

  await expect(
    page.getByRole("heading", { name: /Need help with Neurova/i }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Send message" }),
  ).toBeVisible();
});
