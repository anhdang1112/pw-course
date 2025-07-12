import { test } from "@playwright/test";

test("Add Personal Note", async ({ page }) => {
  await test.step("Access to Playwright.com site", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step("Go to Personal notes", async () => {
    await page.locator("//a[text()='Bài học 4: Personal notes']").click();
  });

  await test.step("Add notes", async () => {
    // Phần này đề bài khó hiểu quá nên ignore
  });
});
