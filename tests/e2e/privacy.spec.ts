import { expect, test } from "@playwright/test";

test("renders localized privacy pages in spanish and english", async ({ page }) => {
  await page.goto("/privacy");

  await expect(
    page.getByRole("heading", {
      name: /Informacion de privacidad clara y realmente util para Neurova/i,
    }),
  ).toBeVisible();

  await page.goto("/en/privacy");

  await expect(
    page.getByRole("heading", {
      name: /Clear, practical privacy information for Neurova/i,
    }),
  ).toBeVisible();
});
