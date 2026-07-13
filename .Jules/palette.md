## 2024-05-15 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found a systemic pattern across multiple components (AIChatAssistant, Fleet, Q&A) where icon-only buttons lack both `aria-label` attributes and visible keyboard focus states (`focus-visible`).
**Action:** Always ensure icon-only buttons include descriptive `aria-label` attributes and Tailwind `focus-visible` utility classes for accessibility.
