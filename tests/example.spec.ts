 import { test, expect } from '@playwright/test';

   test('homepage loads successfully', async ({ page }) => {
     await page.goto('/form');
     await expect(page).toHaveTitle("My Portfolio | Contact"); // adjust to your actual title
    
   });