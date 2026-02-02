

## Update Speakers Section Styling

Making three changes to the Speakers & Mentors section: white background, visible text colors, and removing the closing line.

### Changes

**File: `src/components/landing/SpeakersSection.tsx`**

1. **Background color** - Change from `bg-secondary` to `bg-white` (line 56)

2. **Text colors** - Update all `text-secondary-foreground` references to use dark colors visible on white:
   - Line 64-65: "Speakers & " heading → `text-foreground` (dark text)
   - Line 68: Subtitle → `text-muted-foreground` 
   - Line 93: Non-featured speaker names → `text-foreground`
   - Line 96: Speaker roles → `text-muted-foreground`
   - Lines 104, 110, 116: Social icon backgrounds → `bg-gray-100`
   - Lines 106, 112, 118: Social icon colors → `text-muted-foreground`

3. **Remove closing line** - Delete the "Don't listen to us. Go test yourself." block (lines 125-130)

### Technical Details

The current `text-secondary-foreground` is white (designed for dark navy background). Changing to:
- `text-foreground` for headings (dark, high contrast)
- `text-muted-foreground` for subtitles and secondary text (medium gray)
- `bg-gray-100` for social icon button backgrounds (light gray, visible on white)

