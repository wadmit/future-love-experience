

## Update Experience Section Images

Replacing the images for the Paper Cutting and Chinese Calligraphy cards with the new uploaded images.

### What will change

| Card | Current Image | New Image |
|------|---------------|-----------|
| Chinese Calligraphy | `experience-calligraphy.jpg` | New calligraphy image (person writing Chinese characters with brush) |
| Paper Cutting (剪纸) | `experience-paper-cutting.jpg` | New paper cutting image (man holding intricate red paper art) |

### Implementation

**Step 1: Copy uploaded images to project assets**
- Copy `Chinese-Paper-Cutting-A-Traditional-Popular-Art-5.webp` → `src/assets/experience-paper-cutting-new.webp`
- Copy `theline-4qMlm0RJN5w-unsplash.jpg` → `src/assets/experience-calligraphy-new.jpg`

**Step 2: Update `src/components/landing/ExperienceSection.tsx`**

1. Update imports (lines 2-3):
   ```tsx
   import calligraphyImg from "@/assets/experience-calligraphy-new.jpg";
   import paperCuttingImg from "@/assets/experience-paper-cutting-new.webp";
   ```

2. The `experiences` array already references these variables, so no other changes needed - the new images will automatically be used.

### Files affected
- `src/assets/experience-paper-cutting-new.webp` (new file)
- `src/assets/experience-calligraphy-new.jpg` (new file)
- `src/components/landing/ExperienceSection.tsx` (update imports)

