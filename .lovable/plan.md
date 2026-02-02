

## Update Experience China Section Cards

Replacing two of the cultural experience cards with new service-focused content while keeping the same visual layout.

### Changes Overview

| Current Card | New Card | New Description |
|--------------|----------|-----------------|
| Mini Chinese Lesson | On-spot Admissions & Scholarships | Apply on the spot and get expert guidance on scholarships and eligibility. |
| Photo & Reel Corners | Student & Parent Counseling | Personalized academic advice and dedicated support for parents. |

### Implementation Details

**File: `src/components/landing/ExperienceSection.tsx`**

1. **Update icons import** (line 1)
   - Replace `BookOpen` with `GraduationCap` for admissions card
   - Replace `Camera` with `Users` for counseling card

2. **Update Card 3** (lines 24-31)
   - Change title from "Mini Chinese Lesson" to "On-spot Admissions & Scholarships"
   - Change description to "Apply on the spot and get expert guidance on scholarships and eligibility."
   - Change icon from `BookOpen` to `GraduationCap`
   - Update tags to reflect admissions services (e.g., "Apply Now", "Scholarship Review", "Eligibility Check")

3. **Update Card 4** (lines 32-39)
   - Change title from "Photo & Reel Corners" to "Student & Parent Counseling"
   - Change description to "Personalized academic advice and dedicated support for parents."
   - Change icon from `Camera` to `Users`
   - Update tags to reflect counseling services (e.g., "Career Guidance", "University Selection", "Parent Support")

### Visual Result

The section will still show 4 cards with the alternating image-text layout:
1. Chinese Calligraphy (unchanged)
2. Paper Cutting (unchanged)
3. **On-spot Admissions & Scholarships** (new)
4. **Student & Parent Counseling** (new)

### Files to Modify
- `src/components/landing/ExperienceSection.tsx`

