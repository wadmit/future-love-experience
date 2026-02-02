

## Replace Navigation Bar Logo

Updating the navigation bar to use the new WiseAdmit logo (orange and navy blue design with "W" icon and text).

### What will change

| Location | Current | New |
|----------|---------|-----|
| Header Logo | Existing `wiseadmit-logo.svg` | New logo with orange/navy "W" icon and "WiseAdmit" text |

### Important Note

Since the new logo has a navy blue color scheme, it will be clearly visible when the header has a white background (after scrolling). However, when the header is transparent at the top of the page (against the dark hero section), the navy text may have lower contrast. This is typically fine as the orange portions remain visible.

### Implementation

**Step 1: Copy the new logo to project assets**
- Copy `Group_1597881817.png` → `src/assets/wiseadmit-logo-new.png`

**Step 2: Update `src/components/landing/Header.tsx`**

1. Update the import (line 4):
   ```tsx
   import logo from "@/assets/wiseadmit-logo-new.png";
   ```

2. The existing `<img>` tag will automatically use the new logo - no other changes needed.

### Files affected
- `src/assets/wiseadmit-logo-new.png` (new file)
- `src/components/landing/Header.tsx` (update import)

