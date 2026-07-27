# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: contact.spec.ts >> homepage loads successfully
- Location: tests\contact.spec.ts:3:8

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "My Portfolio | Contact"
Received: "My Portfolio| Contact"
Timeout:  5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    13 × unexpected value "My Portfolio| Contact"

```

```yaml
- navigation:
  - link "Talha Malik":
    - /url: /
    - strong:
      - heading "Talha Malik" [level=2]
  - list:
    - listitem:
      - link "Home":
        - /url: /
    - listitem:
      - link "Projects":
        - /url: /projects/
    - listitem:
      - link "Experience":
        - /url: /experience/
    - listitem:
      - link "Testimonials":
        - /url: /testimonials/
    - listitem:
      - link "Blog":
        - /url: /blog/
    - listitem:
      - link "Members":
        - /url: /members/
    - listitem:
      - link "Contact":
        - /url: /form/
- main:
  - text: Get in Touch
  - heading "Let's work together." [level=1]
  - paragraph: Open to QA automation roles and freelance testing engagements. Reach out directly or grab a copy of my résumé.
  - text:  mrtalhasami19@gmail.com  Lahore, Pakistan
  - link "↓ Download Résumé":
    - /url: /experience/
  - link "":
    - /url: ""
  - link "":
    - /url: https://www.linkedin.com/in/talha-malik-97ba10226/
  - link "":
    - /url: https://github.com/MrTalhaSami
  - text: Name
  - textbox "Name":
    - /placeholder: Jane Doe
  - text: Email
  - textbox "Email":
    - /placeholder: jane@company.com
  - text: Message
  - textbox "Message":
    - /placeholder: Tell me about the role or project...
  - button "Send Message"
- contentinfo: Talha Malik © 2026 · Built with care
```

# Test source

```ts
  1  |  import { test, expect } from '@playwright/test';
  2  | 
  3  |    test('homepage loads successfully', async ({ page }) => {
  4  |      await page.goto('/form');
> 5  |      await expect(page).toHaveTitle("My Portfolio | Contact"); // adjust to your actual title
     |                         ^ Error: expect(page).toHaveTitle(expected) failed
  6  |     
  7  |    });
  8  | 
  9  |    test("verfiy contact submission", async({ page}) =>{
  10 |     await page.goto('/form');
  11 |     await page.getByRole('link', { name: 'Contact', exact: true }).click();
  12 |     await page.locator("#contact-name").fill('talha malik');
  13 |     await page.locator("#contact-email").fill('mrtalhsami19@gmail.com');
  14 |     await page.locator("#contact-message").fill('Test Case 1');
  15 |     await page.getByRole('button', { name: 'Send Message' }).click();
  16 |     await expect(page.getByRole('heading', { name: 'Message Sent!' })).toBeVisible();
  17 |    }); 
```