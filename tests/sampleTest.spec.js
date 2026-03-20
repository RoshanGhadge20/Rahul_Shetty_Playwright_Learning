import { test, expect } from '@playwright/test'

// Launching the page with the help of browser context
test.only("With Browser Context", async ({ browser }) => {
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();
    await page.goto("https://www.google.com/");
    const Store = await page.title();
    console.log("Title of the page is :- ", Store);
    await expect(page).toHaveTitle("Google");
});

// Launching the page with the help of page 
test("First Test In Playwright", async ({ page }) => {
    await page.goto("https://www.google.com/");
    const pageTitle = await page.title();
    console.log("Title of the page is :- ", pageTitle);
    await expect(page).toHaveTitle("Google");
});