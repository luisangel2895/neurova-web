import { expect, test } from "@playwright/test";

test("renders the spanish home and switches to english", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("html")).toHaveAttribute("lang", "es");

  await expect(
    page.getByRole("heading", {
      name: /Convierte tus apuntes en sesiones de estudio de alta retencion/i,
    }),
  ).toBeVisible();

  await expect(
    page.getByRole("link", { name: /Descargar Neurova en App Store/i }).first(),
  ).toBeVisible();

  const englishSwitch = page.locator('header a[href="/en"]').last();
  await expect(englishSwitch).toBeVisible();
  await Promise.all([
    page.waitForURL("**/en"),
    englishSwitch.click(),
  ]);

  await expect(page).toHaveURL(/\/en$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(
    page.getByRole("heading", {
      name: /Turn notes into high-retention study sessions/i,
    }),
  ).toBeVisible();
});

test("shows an optimized mobile navigation panel", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const openNavigationButton = page.getByRole("button", {
    name: /Abrir navegacion/i,
  });

  await expect(openNavigationButton).toBeVisible();
  await openNavigationButton.click();

  await expect(page.getByText(/Explora Neurova/i)).toBeVisible();
  await expect(page.getByRole("link", { name: /Funciones/i })).toBeVisible();

  await Promise.all([
    page.waitForURL("**/support"),
    page.getByRole("link", { name: /Soporte/i }).first().click(),
  ]);

  await expect(page).toHaveURL(/\/support$/);
});
