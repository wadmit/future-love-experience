

## Remove Gradient Between Hero and Experience Sections

A simple fix to remove the faded/gradient transition between the Hero section and the Experience China section.

### What will change

The Hero section currently has a gradient overlay at the bottom (lines 99-100) that creates a fade effect. This will be removed to create a clean, solid break between sections.

### Implementation

**File: `src/components/landing/HeroSection.tsx`**

Delete the following block (lines 99-100):

```tsx
{/* Bottom Gradient */}
<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
```

This will result in a clean, sharp transition from the Hero section directly to the Experience China section.

