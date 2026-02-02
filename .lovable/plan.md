

## Add Drone Image to Giveaway Section

Enhancing the "Win a 45k Drone" section with the provided drone image and improving the overall UI layout.

### Current Layout
The section currently shows:
1. Gift icon (gold circle)
2. Headline text
3. 4-step participation grid
4. CTA button

### Proposed New Layout

The drone image will be featured prominently as the hero element of this section, with a modern split layout:

```text
+--------------------------------------------------+
|                                                  |
|     [DRONE IMAGE]           WIN A ₹45K DRONE!    |
|     (floating effect)       The more you engage, |
|     (glow effect)           the more chances...  |
|                                                  |
+--------------------------------------------------+
|                                                  |
|  [Step 1]  [Step 2]  [Step 3]  [Step 4]         |
|                                                  |
+--------------------------------------------------+
|              [Join the Giveaway]                 |
|         200+ participants • Feb 14               |
+--------------------------------------------------+
```

### UI Enhancements

1. **Drone Image Display**
   - Add the drone image with a floating animation effect
   - Apply a subtle golden glow behind it to match the prize theme
   - Position on left side (desktop) or centered above text (mobile)

2. **Split Hero Layout**
   - Desktop: Side-by-side layout with drone on left, text on right
   - Mobile: Stacked layout with drone above text

3. **Visual Polish**
   - Remove the small gift icon (drone image replaces it)
   - Also remove the rocket emoji from headline (fixes the square box issue)
   - Add glow effect around drone for premium feel

### Implementation Details

**Step 1: Copy drone image to assets**
- Copy `user-uploads://dronr.webp` to `src/assets/drone-giveaway.webp`

**Step 2: Update GiveawaySection.tsx**
- Import the drone image
- Replace the gift icon circle with the drone image
- Create a flex layout for desktop (image left, text right)
- Add floating animation and glow styling to the image
- Remove the 🚀 emoji from the headline

### Files to Modify
- `src/assets/drone-giveaway.webp` (new - copy from upload)
- `src/components/landing/GiveawaySection.tsx`

