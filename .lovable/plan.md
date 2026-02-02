

## Change Giveaway Section Background Color

A simple styling update to change the background of the "Win a ₹45k Drone" section to the specified dark navy color.

### What will change

The giveaway section currently uses `bg-primary` as its background. I'll replace this with an inline style to set the exact hex color `#001D46`.

### Implementation

**File: `src/components/landing/GiveawaySection.tsx`**

Update line 32 to use inline styling for the background:

```tsx
// Before
<section id="giveaway" className="section-padding bg-primary text-primary-foreground relative overflow-hidden">

// After  
<section id="giveaway" className="section-padding text-white relative overflow-hidden" style={{ backgroundColor: '#001D46' }}>
```

The text color will also be updated from `text-primary-foreground` to `text-white` since we're using a custom dark background, and I'll update any child elements that reference `text-primary-foreground` to use `text-white` for consistency.

