# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: contact.spec.ts >> verfiy contact submission
- Location: tests\contact.spec.ts:9:8

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'Send Message' }) resolved to 2 elements:
    1) <button type="submit" class="btn btn-solid-cyan w-100 py-2">Send Message</button> aka getByRole('button', { name: 'Send Message', exact: true })
    2) <button type="button" id="chat-send" class="chat-send-btn" aria-label="Send message">…</button> aka getByRole('button', { name: 'Send message', exact: true })

Call log:
  - waiting for getByRole('button', { name: 'Send Message' })

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - link "Talha Malik" [ref=e4] [cursor=pointer]:
        - /url: /
        - strong [ref=e5]:
          - heading "Talha Malik" [level=2] [ref=e6]
      - text: 
      - list [ref=e8]:
        - listitem [ref=e9]:
          - link "Home" [ref=e10] [cursor=pointer]:
            - /url: /
        - listitem [ref=e11]:
          - link "Projects" [ref=e12] [cursor=pointer]:
            - /url: /projects/
        - listitem [ref=e13]:
          - link "Experience" [ref=e14] [cursor=pointer]:
            - /url: /experience/
        - listitem [ref=e15]:
          - link "Testimonials" [ref=e16] [cursor=pointer]:
            - /url: /testimonials/
        - listitem [ref=e17]:
          - link "Blog" [ref=e18] [cursor=pointer]:
            - /url: /blog/
        - listitem [ref=e19]:
          - link "Members" [ref=e20] [cursor=pointer]:
            - /url: /members/
        - listitem [ref=e21]:
          - link "Contact" [ref=e22] [cursor=pointer]:
            - /url: /form/
  - main [ref=e23]:
    - generic [ref=e25]:
      - generic [ref=e26]: Get in Touch
      - heading "Let's work together." [level=1] [ref=e27]
    - generic [ref=e30]:
      - generic [ref=e31]:
        - paragraph [ref=e32]: Open to QA automation roles and freelance testing engagements. Reach out directly or grab a copy of my résumé.
        - generic [ref=e33]:
          - generic [ref=e34]:
            - generic [ref=e36]: 
            - generic [ref=e37]: mrtalhasami19@gmail.com
          - generic [ref=e38]:
            - generic [ref=e40]: 
            - generic [ref=e41]: Lahore, Pakistan
        - link "↓ Download Résumé" [ref=e42] [cursor=pointer]:
          - /url: /experience/
        - generic [ref=e43]:
          - link "" [ref=e44] [cursor=pointer]:
            - /url: ""
            - generic [ref=e45]: 
          - link "" [ref=e46] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/talha-malik-97ba10226/
            - generic [ref=e47]: 
          - link "" [ref=e48] [cursor=pointer]:
            - /url: https://github.com/MrTalhaSami
            - generic [ref=e49]: 
      - generic [ref=e53]:
        - generic [ref=e54]:
          - generic [ref=e55]: Name
          - textbox "Name" [ref=e56]:
            - /placeholder: Jane Doe
            - text: talha malik
        - generic [ref=e57]:
          - generic [ref=e58]: Email
          - textbox "Email" [ref=e59]:
            - /placeholder: jane@company.com
            - text: mrtalhsami19@gmail.com
        - generic [ref=e60]:
          - generic [ref=e61]: Message
          - textbox "Message" [active] [ref=e62]:
            - /placeholder: Tell me about the role or project...
            - text: Test Case 1
        - button "Send Message" [ref=e64] [cursor=pointer]
  - contentinfo [ref=e65]:
    - generic [ref=e66]:
      - generic [ref=e67]: Talha Malik
      - generic [ref=e68]: © 2026 · Built with care
  - button "Open chat with AI assistant" [ref=e69] [cursor=pointer]:
    - generic [ref=e70]: 
  - dialog "Chat with Talha's AI assistant":
    - generic:
      - generic:
        - generic:
          - generic: 
        - generic:
          - generic: Talha's AI Assistant
          - generic: Online
      - button "Close chat":
        - generic: 
    - generic:
      - generic: Hi! I'm Talha's AI assistant. Ask me about his experience, skills, or projects.
    - generic:
      - textbox "Ask about Talha..."
      - button "Send message":
        - generic: 
```

# Test source

```ts
  1  |  import { test, expect } from '@playwright/test';
  2  | 
  3  |    test('homepage loads successfully', async ({ page }) => {
  4  |      await page.goto('/form');
  5  |      await expect(page).toHaveTitle("My Portfolio| Contact"); // adjust to your actual title
  6  |     
  7  |    });
  8  | 
  9  |    test("verfiy contact submission", async({ page}) =>{
  10 |     await page.goto('/form');
  11 |     await page.getByRole('link', { name: 'Contact', exact: true }).click();
  12 |     await page.locator("#contact-name").fill('talha malik');
  13 |     await page.locator("#contact-email").fill('mrtalhsami19@gmail.com');
  14 |     await page.locator("#contact-message").fill('Test Case 1');
> 15 |     await page.getByRole('button', { name: 'Send Message' }).click();
     |                                                              ^ Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'Send Message' }) resolved to 2 elements:
  16 |     await expect(page.getByRole('heading', { name: 'Message Sent!' })).toBeVisible();
  17 |     await page.screenshot({path:'test-results/screenshot.png', fullPage:true});
  18 |    }); 
```