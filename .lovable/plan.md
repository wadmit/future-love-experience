

## Add Service Cards to Experience China Section

Adding two new service-focused cards at the top of the Experience China section to highlight the on-spot admissions support and counseling services.

### New Cards to Add

| Card | Title | Features |
|------|-------|----------|
| 1 | On-spot Admissions & Scholarship Support | Admission processing, Scholarship eligibility review, Document verification |
| 2 | Student & Parent Counseling Desk | Career pathway counseling, University selection support, Parent guidance on finances |

### Design Approach

Since these are service cards (not image-based cultural experiences), I will create a separate card grid at the top of the section using a clean card design with:
- Icon for each service
- Title
- Bullet list of features
- Matching visual style with the rest of the section

### Implementation

**File: `src/components/landing/ExperienceSection.tsx`**

1. **Add new icons** - Import `GraduationCap` and `Users` from lucide-react for the two cards

2. **Create service cards data array** with the two new services:
   ```tsx
   const serviceCards = [
     {
       icon: GraduationCap,
       title: "On-spot Admissions & Scholarship Support",
       features: [
         "On-spot admission processing and application assistance",
         "Scholarship eligibility review and guidance",
         "Document verification and readiness assessment"
       ]
     },
     {
       icon: Users,
       title: "Student & Parent Counseling Desk",
       features: [
         "Academic and career pathway counseling",
         "Program and university selection support",
         "Dedicated guidance for parents on planning and finances"
       ]
     }
   ];
   ```

3. **Add card grid** above the existing experience items:
   - 2-column grid layout on desktop
   - Full-width cards on mobile
   - Card styling with border, rounded corners, and hover effect
   - Each card contains: icon, title, and bullet list of features

### Visual Layout

```text
+--------------------------------------------------+
|            Experience China (header)             |
+--------------------------------------------------+
|  +---------------------+  +---------------------+ |
|  | [icon]              |  | [icon]              | |
|  | Admissions &        |  | Student & Parent    | |
|  | Scholarship Support |  | Counseling Desk     | |
|  | - Feature 1         |  | - Feature 1         | |
|  | - Feature 2         |  | - Feature 2         | |
|  | - Feature 3         |  | - Feature 3         | |
|  +---------------------+  +---------------------+ |
+--------------------------------------------------+
|         [Existing experience cards...]           |
+--------------------------------------------------+
```

### Files to Modify
- `src/components/landing/ExperienceSection.tsx`

