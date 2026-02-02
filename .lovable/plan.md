
## Make Navigation Bar Sticky with Corrected Section Links

Two changes to improve navigation: make the header sticky so it stays visible while scrolling, and fix the navigation links to match actual section IDs.

### What will change

**1. Sticky Header with Scroll-Aware Styling**
The header will become fixed/sticky and change appearance when scrolling:
- At top (in hero): Transparent background with white text
- After scrolling: White/solid background with dark text for readability

**2. Fixed Navigation Links**
Current nav links have issues:
- "Highlights" links to `#highlights` which doesn't exist
- Missing links to Registration and FAQ sections

Updated navigation:
| Current | New |
|---------|-----|
| Highlights → #highlights | Experience → #experience |
| Speakers → #speakers | Speakers → #speakers |
| Experience → #experience | Giveaway → #giveaway |
| Giveaway → #giveaway | Register → #register |

### Implementation

**File: `src/components/landing/Header.tsx`**

1. Add React `useState` and `useEffect` hooks to track scroll position
2. Change header from `absolute` to `fixed` positioning
3. Add conditional styling based on scroll state:
   - Background: transparent → white with shadow
   - Text: white → dark
   - Logo text: white → primary color
4. Update `navItems` array with correct section links:
   ```tsx
   const navItems = [
     { label: "Experience", href: "#experience" },
     { label: "Speakers", href: "#speakers" },
     { label: "Giveaway", href: "#giveaway" },
     { label: "Register", href: "#register" },
   ];
   ```
5. Add smooth transition for background/text color changes

### Technical Details

The scroll detection will use a threshold (e.g., 50px) to trigger the style change. This ensures the header remains readable on both dark (hero) and light (other sections) backgrounds.
