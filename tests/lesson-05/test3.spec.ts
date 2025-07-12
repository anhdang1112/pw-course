import { expect, test } from "@playwright/test";

test("Add todo item", async ({ page }) => {
  await test.step("Access Playwright.com site", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step("Access Todo page", async () => {
    await page.locator("//a[text()='Bài học 3: Todo page']").click();
  });

  await test.step("Add 100 todo item", async () => {
    for (let i = 1; i <= 100; i++) {
      // Add to do
      await page.locator("//input[@id='new-task']").fill("Todo " + i);
      await page.locator("//button[@id='add-task']").click();

      // Remove the Todo items which are odd number
      if (i % 2 !== 0 || i == 1) {
        if (i === 1) {
          await page.waitForTimeout(500);
        }
        const deleteBtn = page.locator("//button[@id='todo-" + i + "-delete']");
        await expect(deleteBtn).toBeVisible();
        await page.once("dialog", async (dialog) => {
          // Kiểm tra nội dung
          expect(dialog.message()).toBe(
            "Are you sure you want to delete this task?"
          );
          await dialog.accept();
        });
        await deleteBtn.click();
      }
    }
  });
});
