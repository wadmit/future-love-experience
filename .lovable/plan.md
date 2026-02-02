

## Add Drone Image & Fix Emoji Display in Giveaway Section

Two updates to the "Win a Drone" section: add the drone image with background blending and remove the rocket emoji that's showing as a square box.

### What will change

**1. Fix the Emoji Box Issue**
The rocket emoji (🚀) in the headline "Win a ₹45k Drone! 🚀" is displaying as a square box on some systems. This will be removed.

**2. Add Drone Image**
The uploaded drone image will be added below the subtext ("The more you engage..."), positioned to blend naturally with the dark navy background. The image will be semi-transparent/faded at edges to create a smooth blend effect.

### Visual Layout (After Changes)

```text
┌─────────────────────────────────────────┐
│           [Gift Icon Circle]            │
│                                         │
│        Win a ₹45k Drone!                │
│  The more you engage, the more chances  │
│           you get to win!               │
│                                         │
│         [Drone Image Here]              │
│    (blended with dark background)       │
│                                         │
│    [4 Step Cards in Grid]               │
│                                         │
│      [Join the Giveaway Button]         │
└─────────────────────────────────────────┘
```

### Implementation

**Step 1: Copy drone image to project assets**
- Copy `drone-prize-DOiLy5E1.png` → `src/assets/drone-giveaway.png`

**Step 2: Update `src/components/landing/GiveawaySection.tsx`**

1. Add import for the drone image at the top
2. Remove the 🚀 emoji from line 61:
   - Change: `Win a ₹45k Drone! 🚀`
   - To: `Win a ₹45k Drone!`

3. Add drone image between the headline section and steps grid (after line 66):
   ```tsx
   {/* Drone Image */}
   <div className="flex justify-center mb-8 opacity-0-initial animate-fade-up delay-300">
     <img 
       src={droneImage} 
       alt="Drone Prize" 
       className="w-72 md:w-96 object-contain drop-shadow-2xl"
       style={{
         filter: 'drop-shadow(0 0 30px rgba(255, 255, 255, 0.2))',
       }}
     />
   </div>
   ```

The image already has a transparent/blurred background, so it will naturally blend with the dark navy (#001D46) section background. The drop-shadow effect will add a subtle glow to make it stand out while still feeling integrated.

### Files affected
- `src/assets/drone-giveaway.png` (new file)
- `src/components/landing/GiveawaySection.tsx` (update imports, remove emoji, add image)

