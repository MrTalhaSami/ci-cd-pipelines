 import { test, expect } from '@playwright/test';

   test('homepage loads successfully', async ({ page }) => {
     await page.goto('/form');
     await expect(page).toHaveTitle("My Portfolio | Contact"); // adjust to your actual title
    
   });

   test("verfiy contact submission", async({ page}) =>{
    await page.goto('/form');
    await page.goto('https://portfolio-drab-five-50.vercel.app/');
    await page.getByRole('link', { name: 'Contact', exact: true }).click();
    await page.getByPlaceholder('first name').click();
    await page.getByPlaceholder('first name').fill('talha');
    await page.getByPlaceholder('last name').click();
    await page.getByPlaceholder('last name').fill('sami');
    await page.getByRole('spinbutton', { name: 'Username' }).click();
    await page.getByRole('spinbutton', { name: 'Username' }).fill('00000012345');
    await page.getByPlaceholder('email').click();
    await page.getByPlaceholder('email').fill('mrtalhsami19@gmail.com');
    await page.getByPlaceholder('Enter your message').click();
    await page.getByPlaceholder('Enter your message').fill('lkkalaf');
    await page.getByRole('button', { name: 'Send' }).click();
    await expect(page.getByRole('heading', { name: 'Form Submitted. Thank you!' })).toBeVisible();
   }); 