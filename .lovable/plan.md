

## Update Experience Section Tags and Image

Making tag modifications across four cards and replacing the image for the Student & Parent Counseling card.

### Changes Overview

| Card | Current Tags | Updated Tags |
|------|--------------|--------------|
| Chinese Calligraphy | "Practice & Art", "Take Paper", "Make a Wishing" | "Practice & Art", "Explore Creativity" |
| Paper Cutting | "Red Paper", "Fancy Patterns", "Festival Designs" | "Fun Patterns", "Festival Designs" |
| On-spot Admissions | "Apply Now", "Scholarship Review", "Eligibility Check" | "Scholarship Review", "Eligibility Check" |
| Student & Parent Counseling | (image change) | Replace `photoCornerImg` with counseling-related image |

### Implementation Details

**File: `src/components/landing/ExperienceSection.tsx`**

1. **Chinese Calligraphy tags** (line 11)
   - Remove "Take Paper"
   - Change "Make a Wishing" to "Explore Creativity"
   - Result: `["Practice & Art", "Explore Creativity"]`

2. **Paper Cutting tags** (line 18)
   - Remove "Red Paper"
   - Change "Fancy Patterns" to "Fun Patterns"
   - Result: `["Fun Patterns", "Festival Designs"]`

3. **On-spot Admissions tags** (line 25)
   - Remove "Apply Now"
   - Result: `["Scholarship Review", "Eligibility Check"]`

4. **Student & Parent Counseling image** (lines 4-5, 31)
   - The current image `photoCornerImg` shows a photo corner setup
   - Need a new counseling-related image to replace it
   - Will use an existing image that fits the counseling theme, or you can provide a new image to upload

### Note on Image

For the Student & Parent Counseling card, I can:
- Use the `experience-chinese-lesson.jpg` image (shows educational setting) as a placeholder
- Or you can upload a new image that specifically shows counseling/guidance theme

### Files to Modify
- `src/components/landing/ExperienceSection.tsx`

