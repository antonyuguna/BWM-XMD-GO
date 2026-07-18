## 2024-07-18 - Missing ARIA labels and focus states on icon-only buttons
**Learning:** Icon-only buttons (like FABs or close/send icons) in the components often lack descriptive ARIA labels, making them inaccessible to screen readers, and they frequently lack clear `focus-visible` styles for keyboard navigation.
**Action:** Always ensure any icon-only interactive element has an `aria-label` attribute describing its function, and apply `focus-visible:ring-2 focus-visible:ring-indigo-500` (or similar depending on theme) utility classes to ensure keyboard accessibility.
