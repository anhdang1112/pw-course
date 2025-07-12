import { test } from "@playwright/test";

test("Add product", async ({ page }) => {
  await test.step("Access Playwright.com site", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });
  await test.step("Open Product page", async () => {
    await page.locator("//a[text()='Bài học 2: Product page']").click();
  });

  await test.step("Add to cart", async () => {
    const product1 = page.locator(
      "//div[@class='product-info']/div[text()='Product 1']"
    );
    await product1.dblclick();
    const product2 = page.locator(
      "//div[@class='product-info']/div[text()='Product 2']"
    );
    await product2.dblclick();
    await product2.click();

    const product3 = page.locator(
      "//div[@class='product-info']/div[text()='Product 3']"
    );
    await product3.click();
  });
});
