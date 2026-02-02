

## Redesign Giveaway Section - Two Column Layout (Simplified)

Transforming the "Win a 45k Drone" section to match the reference design with text/steps on the left and drone image on the right, keeping only Instagram and the original 4 steps.

### Layout Structure

```text
+------------------------------------------------------------------+
|                                                                  |
|  [Mega Giveaway Badge]                                           |
|                                                                  |
|  Win a 45k Drone! 🚀                      +------------------+   |
|                                           |                  |   |
|  More effort = More chances!              |   DRONE IMAGE    |   |
|                                           |   (new gray one) |   |
|  How to Enter:                            |                  |   |
|  +---------------------------+            |  +------------+  |   |
|  | 💕 Follow WiseAdmit       |            |  | ₹45,000    |  |   |
|  | Follow @wiseadmit on IG   |            |  +------------+  |   |
|  +---------------------------+            +------------------+   |
|  | 📲 Share the Event        |                                   |
|  | Share event on your story |                                   |
|  +---------------------------+                                   |
|  | 💬 Comment & Tag          |                                   |
|  | Tag 3 friends to attend   |                                   |
|  +---------------------------+                                   |
|  | 👥 Take WiseScore         |                                   |
|  | Complete at the event     |                                   |
|  +---------------------------+                                   |
|                                                                  |
|  [Instagram Button Only]                                         |
|                                                                  |
|  [Join the Giveaway]                                             |
|                                                                  |
+------------------------------------------------------------------+
```

### Key Changes

| Current | New |
|---------|-----|
| Drone on left, text on right | Text/steps on LEFT, drone on RIGHT |
| Current webp drone image | New gray drone PNG image |
| 2x2 steps grid | Vertical stacked step cards (left aligned) |
| Simple headline | "Mega Giveaway" badge + headline with 🚀 emoji |
| No social buttons | Instagram button only |
| No price badge | "₹45,000 Grand Prize Value" badge on image |

### 4 Steps to Enter (Original Steps)

1. **Follow WiseAdmit** - Follow @wiseadmit on Instagram
2. **Share the Event** - Share the event post on your story  
3. **Comment & Tag** - Tag 3 friends who should attend
4. **Take WiseScore** - Take the WiseScore assessment at the event

### Implementation Details

**Step 1: Copy new drone image**
- Copy `user-uploads://c108f7561fdb680e96523c11e959c1cf.png` to `src/assets/drone-giveaway-new.png`

**Step 2: Update GiveawaySection.tsx**

1. **Import new drone image** instead of current webp

2. **Keep original 4 steps** (already defined in file):
   - Follow WiseAdmit
   - Share the Event
   - Comment & Tag
   - Take WiseScore

3. **Create two-column layout**
   - Left column: Badge, headline, description, "How to Enter", vertical steps, Instagram button, CTA
   - Right column: New drone image with glow and price badge overlay

4. **Add UI elements**
   - "Mega Giveaway" orange/gold badge at top left
   - Rocket emoji back in headline
   - "How to Enter:" section heading
   - Vertical step cards with emojis on left
   - Single Instagram button (no Facebook/Twitter)
   - Price badge overlay on drone image

5. **Styling**
   - Keep the blue background (#001D46)
   - Keep decorative floating dots
   - Step cards: semi-transparent background, left-aligned
   - Price badge: gold with "₹45,000" and "Grand Prize Value"

### Files to Modify
- `src/assets/drone-giveaway-new.png` (new - copy from upload)
- `src/components/landing/GiveawaySection.tsx`

