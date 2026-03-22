const { test, expect } = require('@playwright/test');

test('@Web Client App login', async ({ page }) => {
    const email = "anshika@gmail.com";
    const productName = 'zara coat 3';
    const products = page.locator(".card-body");

    await page.goto("https://rahulshettyacademy.com/client", { waitUntil: 'load' });
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").type("Iamking@000");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();

    // It stores all the titles with matching locator into the form of string 
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
    await page.close();
});