# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: contact.spec.ts >> verfiy contact submission
- Location: tests\contact.spec.ts:9:8

# Error details

```
Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - link "Talha Malik" [ref=e4] [cursor=pointer]:
        - /url: /
        - strong [ref=e5]:
          - heading "Talha Malik" [level=2] [ref=e6]
      - text: 
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
      - generic [ref=e27]: 
      - heading "Message Sent!" [level=1] [ref=e28]
      - paragraph [ref=e29]: Thanks for reaching out — I'll get back to you as soon as possible.
      - link "Back to Home" [ref=e30] [cursor=pointer]:
        - /url: /
  - contentinfo [ref=e31]:
    - generic [ref=e32]:
      - generic [ref=e33]: Talha Malik
      - generic [ref=e34]: © 2026 · Built with care
```