import { test } from "@playwright/test";

test("Register New User", async ({ page }) => {
  await test.step("Access to Playwright.com site", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });
  await test.step("Open Registration page", async () => {
    await page
      .locator("//a[text()='Bài học 1: Register Page (có đủ các element)']")
      .click();
  });
  await test.step("Input all information", async () => {
    await page.locator("//input[@id='username']").fill("Tuan Anh");
    await page
      .locator("//input[@id='email']")
      .fill("tuananhplaywright@example.com");
    await page.locator("//input[@id='male']").setChecked(true);
    await page.locator("//input[@id='reading']").setChecked(true);
    await page.locator("//select[@id='interests']").selectOption("Art");
    await page
      .locator("//select[@id='country']")
      .selectOption("United Kingdom");
    await page
      .locator(
        "//label[text()='Date of Birth:']/following-sibling::input[@type='date']"
      )
      .pressSequentially("07121993");
    await page
      .locator("//input[@type='file']")
      .setInputFiles("test-data/1721876592322.png");
    await page.locator("//textarea[@id='bio']").fill("My Bio");
    await page.locator("//input[@id='rating']").fill("5");

    const enableFeatureToggle = page.locator("//span[@class='slider round']");
    if (!(await enableFeatureToggle.isChecked())) {
      await enableFeatureToggle.check();
    }
    await page.locator("//input[@id='customDate']").click();
    await page
      .locator("//input[@id='customDate']")
      .pressSequentially("07122025");
    await page.locator("//button[text()='Register']").click();
  });
});
