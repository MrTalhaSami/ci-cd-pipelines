 import { test, expect } from '@playwright/test';

   test('homepage loads successfully', async ({ page }) => {
     await page.goto('/form');
     await expect(page).toHaveTitle("My Portfolio | Contact"); // adjust to your actual title
    
   });

   test("verfiy contact submission", async({ page}) =>{
    await page.goto('/form');
    await page.getByRole('link', { name: 'Contact', exact: true }).click();
    await page.locator("#contact-name").fill('talha malik');
    await page.locator("#contact-email").fill('mrtalhsami19@gmail.com');
    await page.locator("#contact-message").fill('Test Case 1');
    await page.getByRole('button', { name: 'Send Message' }).click();
    await expect(page.getByRole('heading', { name: 'Message Sent!' })).toBeVisible();
   }); 