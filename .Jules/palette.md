## 2024-07-11 - Icon-only Buttons Missing Accessibility
**Learning:** Found a pattern where icon-only buttons in data tables (like Fleet Management) lack `aria-label`s and `focus-visible` indicators, making them invisible to screen readers and difficult to navigate via keyboard.
**Action:** Always add descriptive `aria-label` attributes (e.g., dynamic ones like "More actions for [item name]") and Tailwind `focus-visible` ring utilities to icon-only buttons across the application.
