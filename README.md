# Coup. - Frontend Assignment

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.2.0 | UI Framework |
| **TypeScript** | 5.9.3 | Type Safety |
| **Tailwind CSS** | 4.1.18 | Utility-First Styling |
| **Framer Motion** | 12.23.26 | Animations & Transitions |
| **Bun** | Latest | Package Manager |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Header/           # Navbar with logo, nav links, CTA, mobile menu
│   ├── Hero/             # Main hero content with CTA buttons
│   └── Background/       # Sky gradient, clouds, animated birds
│       ├── AnimatedBird.tsx   # Reusable entrance animation component
│       └── FlyingBird.tsx     # Diagonal flying bird animation
├── assets/
│   ├── icons/            # Logo, message badge, Apple logo SVGs
│   └── graphics/         # Bird & cloud SVG assets
├── App.tsx               # Main app with page fade-in wrapper
└── index.css             # Tailwind config & theme tokens
```

---

## ✨ Features Implemented

### Pixel-Perfect Design
- Exact spacing, typography, and colors matching Figma
- Inter font family for typography consistency

### Animations & Interactions
- **Page Fade-in**: Entire page animates in on load
- **Bird Entrance Animations**: Birds slide up with opacity transitions
- **Flying Birds**: Two birds fly diagonally across the screen
- **Clouds Animation**: Clouds rise from bottom on page load
- **Button Hover States**: Color transitions with shadow effects
- **Mobile Menu**: Animated hamburger toggle with dropdown

### Responsive Design
- Mobile-first approach with Tailwind breakpoints
- Responsive navbar with hamburger menu on tablet/mobile
- Adaptive typography and spacing across all screen sizes
- Birds repositioned on mobile to avoid text overlap

---

## 🚀 Getting Started

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

```

---

## 📝 Implementation Notes

1. **Framer Motion** - All animations use `framer-motion` for smooth, declarative animations
2. **Tailwind CSS v4** - Used for all styling
3. **Component Architecture** - Extracted reusable `AnimatedBird` and `FlyingBird` components
4. **Responsive Bird Positioning** - Different positions for mobile vs desktop to prevent text collision

---