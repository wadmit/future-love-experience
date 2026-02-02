

## Hero Section Updates

Making three changes to simplify and improve the hero section layout.

### Changes Overview

| Change | Current | Updated |
|--------|---------|---------|
| "Explore China Awaits" text | Visible as h2 element | Removed completely |
| Date & Location text | `text-sm` (14px) | `text-base` (16px) |
| Button icons | Heart icon + Sparkles icon | Icons removed from both buttons |

### Implementation Details

**File: `src/components/landing/HeroSection.tsx`**

1. **Remove "Explore China Awaits"** (lines 53-55)
   - Delete the entire `<h2>` element containing this text

2. **Increase date and location text size** (lines 67, 71)
   - Change `text-sm` to `text-base` for both the date and location spans
   - Also increase icon size from `w-4 h-4` to `w-5 h-5` for better proportion

3. **Remove button icons** (lines 77-84)
   - Remove `<Heart className="w-5 h-5" />` from the "Register for Event" button
   - Remove `<Sparkles className="w-5 h-5" />` from the "Become Event Ambassador" button
   - Remove `gap-2` class from buttons since no icons

4. **Clean up imports** (line 2)
   - Remove `Heart` and `Sparkles` from the lucide-react import since they're no longer used in buttons
   - Keep `Calendar` and `MapPin` for the event details

