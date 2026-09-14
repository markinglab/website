# CSS Style Guide - MarkingLab Website

## Overview
This website uses a **modern CSS design system** built on custom CSS variables for colors, shadows, and animations. The styling emphasizes a clean, professional aesthetic with subtle animations, gradients, and glass-morphism effects. This guide can be implemented using pure CSS without any framework dependencies.

---

## 1. COLOR PALETTE

### Primary Colors
- **Primary (Dark Navy Blue)**: `hsl(212, 67%, 17%)` - #0E2947
  - Used for buttons, accents, text hierarchy
  - Conveys trust, professionalism, and technology
  - Backgrounds and accent elements

- **Secondary (Light Gray)**: `hsl(0, 0%, 96%)` - #F5F5F5
  - Used for subtle backgrounds and low-emphasis elements
  - Creating visual hierarchy

- **Accent**: Same as Primary - `hsl(212, 67%, 17%)`
  - Highlights important CTAs and interactive elements
  - Gradient overlays and emphasis

### Semantic Colors
- **Background**: `hsl(0, 0%, 100%)` - Pure white (light mode)
- **Foreground**: `hsl(214, 55%, 16%)` - Dark navy text
- **Card Background**: `hsl(0, 0%, 100%)` - White
- **Muted**: `hsl(0, 0%, 96%)` - Light gray for disabled/secondary content
- **Muted Foreground**: `hsl(212, 20%, 45%)` - Subdued text color
- **Border**: `hsl(0, 0%, 90%)` - Light gray borders
- **Destructive**: `hsl(0, 84%, 60%)` - Red for error states

### Dark Mode
- **Dark Background**: `hsl(214, 55%, 8%)` - Very dark navy
- **Dark Foreground**: `hsl(0, 0%, 98%)` - Off-white text
- **Dark Card**: `hsl(214, 55%, 10%)` - Slightly lighter than background
- **Dark Border**: `hsl(214, 40%, 18%)` - Visible borders on dark background

### CSS Variables
All colors are managed through CSS variables in `:root` selector:
```css
--background: 0 0% 100%;
--foreground: 214 55% 16%;
--primary: 212 67% 17%;
--secondary: 0 0% 96%;
--accent: 212 67% 17%;
--border: 0 0% 90%;
```

---

## 2. TYPOGRAPHY

### Font Families
- **Body Text**: `Inter` (sans-serif)
  - Clean, readable body copy and UI text
  - Weight: Regular (400), Medium (500), Semibold (600), Bold (700)

- **Display/Headings**: `Space Grotesk` (sans-serif)
  - Large headings and hero text
  - Creates visual hierarchy and modern feel
  - Used on h1, h2, h3 elements

### Font Sizes & Scale
- **Extra Large**: 7xl (56px) - Hero headings
- **Large**: 5xl (48px), 4xl (36px) - Section titles
- **Medium**: 2xl (24px), xl (20px) - Subheadings
- **Body**: lg (18px), base (16px) - Main content
- **Small**: sm (14px) - Secondary text, captions
- **Extra Small**: xs (12px) - Labels, tags

### Text Styles
- **Font Weight Classes**:
  - `font-bold` (700) - Primary headings, emphasis
  - `font-semibold` (600) - Subheadings, important text
  - `font-medium` (500) - Labels, button text
  - `font-normal` (400) - Body text

- **Text Emphasis**:
  - `.text-foreground` - Primary text (dark navy)
  - `.text-muted-foreground` - Secondary text (gray)
  - `.text-primary` - Accent color text
  - `.gradient-text` - Gradient colored text with background clip

### Letter Spacing
- `.tracking-wide` - Used on uppercase labels and badges
- Default (normal) - Body text and most UI elements

---

## 3. SPACING & LAYOUT

### Spacing Scale
- **Tight**: 8px (0.5rem), 12px (0.75rem)
- **Regular**: 16px (1rem), 24px (1.5rem)
- **Comfortable**: 32px (2rem), 40px (2.5rem)
- **Spacious**: 64px (4rem), 80px (5rem)
- **Extra Spacious**: 96px (6rem), 128px (8rem)

### Section Padding
- **Horizontal**: `padding: 1rem 2rem; /* mobile */`
  - Tablet+: `padding: 1rem 1.5rem;`
  - Desktop: `padding: 1rem 2rem;`
- **Vertical**: `padding: 5rem 0;` (80px) standard for sections
- **Container Max Width**: `max-width: 1400px;` with `margin: 0 auto;`

### Component Padding
- **Card**: `padding: 2rem;` (32px) - Interior padding
- **Card Header**: `padding: 1.5rem;` (24px)
- **Button**: 
  - Default: `padding: 0.5rem 1rem;`
  - Large: `padding: 0.75rem 2rem;`
  - XL: `padding: 0.875rem 2.5rem;`

### Responsive Design Breakpoints
```css
/* Mobile First: base styles are for small screens */

/* Tablet and up: 640px */
@media (min-width: 640px) { }

/* Tablet: 768px */
@media (min-width: 768px) { }

/* Desktop: 1024px */
@media (min-width: 1024px) { }

/* Large Desktop: 1280px */
@media (min-width: 1280px) { }

/* Extra Large: 1400px */
@media (min-width: 1400px) { }
```

### Responsive Example
```css
/* Mobile */
.hero-title {
  font-size: 2rem;
  padding: 1rem;
}

/* Tablet */
@media (min-width: 640px) {
  .hero-title {
    font-size: 3rem;
    padding: 1.5rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .hero-title {
    font-size: 3.5rem;
    padding: 2rem;
  }
}
```

---

## 4. BORDER RADIUS

### Border Radius Scale
- **Small**: 4px - Small buttons and compact elements
- **Medium**: 6px - Medium buttons and inputs
- **Large**: 12px - Cards and standard containers (base radius)
- **Extra Large**: 16px+ - Large containers and feature cards
- **Full Circle**: 50% or `border-radius: 9999px;` - Circular elements

### CSS Implementation
```css
:root {
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 12px;      /* var(--radius) */
  --radius-xl: 16px;
}

button {
  border-radius: var(--radius-lg);
}

/* Card containers */
.card {
  border-radius: calc(var(--radius-lg) + 4px);  /* 16px */
}

/* Icon backgrounds */
.icon-background {
  border-radius: var(--radius-xl);
}

/* Fully circular decorative elements */
.circle {
  border-radius: 50%;
}
```

### Usage Examples
- Buttons and small UI: `border-radius: 12px;`
- Cards and containers: `border-radius: 16px;`
- Icon backgrounds: `border-radius: 16px;`
- Full circle decorative elements: `border-radius: 50%;`

---

## 5. SHADOWS

### Shadow System
All shadows are defined as CSS custom properties and applied with consistent, subtle styling:

#### Shadow Styles
- **Soft Shadow**: `0 4px 24px -4px hsla(212, 55%, 17%, 0.08)`
  - Used on cards, buttons, and light elevation
  - `box-shadow: var(--shadow-soft);`

- **Medium Shadow**: `0 8px 32px -8px hsla(212, 55%, 17%, 0.12)`
  - Used on hover states and elevated elements
  - `box-shadow: var(--shadow-medium);`

- **Strong Shadow**: `0 16px 48px -12px hsla(212, 55%, 17%, 0.18)`
  - Used on modals, dropdowns, and full elevation
  - `box-shadow: var(--shadow-strong);`

- **Glow Shadow**: `0 0 60px -12px hsla(212, 67%, 17%, 0.3)`
  - Used on accent elements and CTAs for emphasis
  - Creates a subtle "glowing" effect

### Tailwind Shadow Classes
- `.shadow-soft` - General element shadows
- `.shadow-medium` - Hover states, elevated surfaces
- `.shadow-strong` - Maximum elevation
- `.shadow-glow` - Premium interactive elements
- `.shadow-sm` - Minimal shadow for subtle elevation

### Transition Effects on Shadows
Shadows smoothly transition on hover:
```
transition-shadow duration-300
```

---

## 6. GRADIENTS

### Gradient Definitions
All gradients are CSS custom properties for consistency and easy modification:

#### Hero Gradient
```css
--gradient-hero: linear-gradient(135deg, hsl(212 67% 17%) 0%, hsl(212 60% 22%) 50%, hsl(212 55% 28%) 100%);
```
- Deep blue to lighter blue diagonal
- Used on hero sections and hero buttons
- Creates depth and movement

#### Accent Gradient
```css
--gradient-accent: linear-gradient(135deg, hsl(212 67% 17%) 0%, hsl(212 60% 24%) 100%);
```
- Subtle blue gradient
- Used on buttons, feature icons, and highlights
- Applied as background with text-opacity adjustments

#### Glass Gradient
```css
--gradient-glass: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
```
- Semi-transparent white gradient
- Creates frosted glass effect overlay

#### Card Gradient
```css
--gradient-card: linear-gradient(180deg, hsl(0 0% 100%) 0%, hsl(0 0% 98%) 100%);
```
- Vertical subtle white gradient
- Adds depth to card backgrounds

### Gradient Classes
- `.hero-gradient` - Full hero gradient
- `.accent-gradient` - Primary accent gradient
- `.gradient-text` - Text with gradient as background (uses `bg-clip-text` and `text-transparent`)

---

## 7. ANIMATIONS & TRANSITIONS

### Custom Animations

#### Fade-In Variations
- **fade-in**: Fade in with slight upward movement
  - Duration: 0.6s ease-out
  - Transform: translateY(20px → 0)
  
- **fade-in-left**: Fade in from left side
  - Duration: 0.6s ease-out
  - Transform: translateX(-20px → 0)
  
- **fade-in-right**: Fade in from right side
  - Duration: 0.6s ease-out
  - Transform: translateX(20px → 0)

#### Scale-In
- Fade in with scale effect
- Duration: 0.4s ease-out
- Transform: scale(0.95 → 1)

#### Floating Animation
- Continuous subtle vertical floating motion
- Duration: 6s ease-in-out infinite
- Used on decorative background elements
- `.floating` - Base delay
- `.floating-delayed` - 2s animation delay for staggered effect

#### Pulse Animation
- **pulse-slow**: Custom slow pulse
- Duration: 4s ease-in-out infinite
- Used on status indicators and loaders

#### Accordion Animations
- **accordion-down**: Expand animation
  - Duration: 0.2s ease-out
  
- **accordion-up**: Collapse animation
  - Duration: 0.2s ease-out

### Standard Transitions
- **Duration**: `duration-300` (300ms) standard
- **Easing**: `ease-out` for entrance animations
- **Properties**: 
  - `transition-all` - All properties
  - `transition-shadow` - Shadow only (for hover effects)
  - `transition-colors` - Color changes
  - `transition-opacity` - Opacity changes

### Animation Patterns
- Staggered intro delays using inline styles
- `.animate-fade-in` with `style={{ animationDelay: '0.1s' }}` pattern
- Applied to hero sections for sequential reveal effect

---

## 8. COMPONENT STYLES

### Buttons

#### Base Button Styling
```css
button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  white-space: nowrap;
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 300ms ease-out;
  outline: none;
  padding: 0.625rem 1rem;
}

button:disabled {
  opacity: 0.5;
  pointer-events: none;
}

button:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--background),
              0 0 0 4px var(--ring);
}

button svg {
  pointer-events: none;
  width: 1rem;
  height: 1rem;
}
```

#### Button Variants

**Default Button**
```css
.btn-default {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  box-shadow: var(--shadow-soft);
  transition: all 300ms ease-out;
}

.btn-default:hover {
  background-color: hsla(212, 67%, 17%, 0.9);
  box-shadow: var(--shadow-medium);
}

.btn-default:active {
  transform: scale(0.98);
}
```

**Accent Button** (Primary CTA)
```css
.btn-accent {
  background: var(--gradient-accent);
  color: hsl(var(--accent-foreground));
  font-weight: 600;
  box-shadow: var(--shadow-soft);
  transition: all 300ms ease-out;
}

.btn-accent:hover {
  box-shadow: var(--shadow-glow);
  transform: scale(1.05);
}

.btn-accent:active {
  transform: scale(1);
}
```

**Hero Button**
```css
.btn-hero {
  background: var(--gradient-hero);
  color: hsl(var(--accent-foreground));
  font-weight: 600;
  box-shadow: var(--shadow-medium);
}

.btn-hero:hover {
  box-shadow: var(--shadow-glow);
  transform: scale(1.05);
}
```

**Outline Button**
```css
.btn-outline {
  border: 1px solid hsl(var(--input));
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
  transition: all 300ms ease-out;
}

.btn-outline:hover {
  background-color: hsl(var(--accent));
  color: hsl(var(--accent-foreground));
}
```

**Ghost Button**
```css
.btn-ghost {
  background-color: transparent;
  color: hsl(var(--foreground));
  transition: all 300ms ease-out;
}

.btn-ghost:hover {
  background-color: hsl(var(--accent));
  color: hsl(var(--accent-foreground));
}
```

**Link Button**
```css
.btn-link {
  background-color: transparent;
  color: hsl(var(--primary));
  text-decoration: none;
  text-decoration-offset: 4px;
  transition: text-decoration 300ms ease-out;
}

.btn-link:hover {
  text-decoration: underline;
}
```

**Secondary Button**
```css
.btn-secondary {
  background-color: hsl(var(--secondary));
  color: hsl(var(--secondary-foreground));
  transition: all 300ms ease-out;
}

.btn-secondary:hover {
  background-color: hsla(0, 0%, 96%, 0.8);
}
```

#### Button Sizes
```css
/* Small */
.btn-sm {
  height: 2.25rem;
  border-radius: 8px;
  padding: 0.75rem;
  font-size: 0.875rem;
}

/* Default */
.btn-default {
  height: 2.5rem;
  padding: 0.5rem 1rem;
}

/* Large */
.btn-lg {
  height: 3rem;
  border-radius: 12px;
  padding: 0.75rem 2rem;
  font-size: 1rem;
}

/* XL */
.btn-xl {
  height: 3.5rem;
  border-radius: 12px;
  padding: 0.875rem 2.5rem;
  font-size: 1.125rem;
}

/* Icon Button */
.btn-icon {
  height: 2.5rem;
  width: 2.5rem;
  padding: 0;
}
```

### Cards

**Base Card**
```css
.card {
  border-radius: 12px;
  border: 1px solid hsl(var(--border));
  background-color: hsl(var(--card));
  color: hsl(var(--card-foreground));
  box-shadow: var(--shadow-sm);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
```

**Feature Card with Hover Effects**
```css
.feature-card {
  position: relative;
  background-color: hsl(var(--card));
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid hsl(var(--border));
  transition: all 300ms ease-out;
}

.feature-card:hover {
  border-color: hsla(212, 67%, 17%, 0.3);
  box-shadow: var(--shadow-medium);
}

/* Hover gradient overlay */
.feature-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 16px;
  background: linear-gradient(to bottom right,
    hsla(212, 67%, 17%, 0.05),
    transparent
  );
  opacity: 0;
  transition: opacity 300ms ease-out;
  pointer-events: none;
}

.feature-card:hover::before {
  opacity: 1;
}
```

**Pricing Card with Emphasis**
```css
.pricing-card {
  border-radius: 12px;
  border: 1px solid hsl(var(--border));
  background-color: hsl(var(--card));
  overflow: hidden;
}

/* Highlighted/Featured pricing card */
.pricing-card.featured {
  border-color: hsl(var(--accent));
  box-shadow: var(--shadow-glow);
}

/* Badge for highlighted card */
.pricing-card.featured::before {
  content: 'Most Popular';
  position: absolute;
  top: -1rem;
  left: 50%;
  transform: translateX(-50%);
  background: var(--gradient-accent);
  color: hsl(var(--accent-foreground));
  padding: 0.25rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
}
```

**Card Subcomponents**
```css
.card-header {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  padding: 1.5rem;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1;
  text-align: center;
}

.card-description {
  font-size: 0.875rem;
  color: hsl(var(--muted-foreground));
}

.card-content {
  padding: 1.5rem;
  padding-top: 0;
}

.card-footer {
  display: flex;
  align-items: center;
  padding: 1.5rem;
  padding-top: 0;
}
```

### Glass Morphism Card

```css
.glass-card {
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: var(--shadow-soft);
}
```

**Browser Support Note**: Backdrop filter may require vendor prefixes for broader compatibility. Fallback to solid background color for older browsers.

### Badges & Labels

**Badge Style**
```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.375rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  background: var(--gradient-accent);
  color: hsl(var(--accent-foreground));
}

/* Alternative badge with border */
.badge-outline {
  display: inline-flex;
  align-items: center;
  padding: 0.375rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  border: 1px solid hsl(var(--primary), 0.2);
  background-color: hsl(var(--background));
  color: hsl(var(--primary));
}

/* Badge with icon and status indicator */
.badge-with-icon {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.625rem 1.25rem;
  border-radius: 9999px;
  background-color: hsl(var(--background));
  border: 1px solid hsl(var(--primary), 0.2);
}

.badge-icon {
  display: flex;
  gap: -0.5rem;
  margin-right: 0.5rem;
}

.status-indicator {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: rgb(34, 197, 94);
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

---

## 9. SPECIFIC COMPONENT PATTERNS

### Hero Section
```css
.hero-section {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: hsl(var(--background));
}

/* Decorative floating circle backgrounds */
.hero-decoration {
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: hsla(212, 67%, 17%, 0.05);
  filter: blur(80px);
  animation: floating 6s ease-in-out infinite;
}

.hero-decoration:nth-child(1) {
  top: 25%;
  left: 40px;
}

.hero-decoration:nth-child(2) {
  bottom: 25%;
  right: 40px;
  animation-delay: 2s;
}

/* SVG grid pattern background */
.hero-grid {
  position: absolute;
  inset: 0;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230a2747' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-size: 60px 60px;
}

/* Hero content container */
.hero-content {
  position: relative;
  z-index: 10;
  max-width: 56rem;
  margin: 0 auto;
  padding: 5rem 1rem;
  text-align: center;
}

.hero-content-inner {
  max-width: 64rem;
  margin: 0 auto;
  padding: 3rem 0;
}

@keyframes floating {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(20px); }
}
```

### Feature Cards Grid
```css
.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 4rem;
}

@media (min-width: 768px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}

.feature-card {
  position: relative;
  background-color: hsl(var(--card));
  border: 1px solid hsl(var(--border));
  border-radius: 16px;
  padding: 2rem;
  transition: all 300ms ease-out;
}

.feature-card:hover {
  border-color: hsla(212, 67%, 17%, 0.3);
  box-shadow: var(--shadow-medium);
}

.feature-icon {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background: var(--gradient-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: box-shadow 300ms ease-out;
  color: hsl(var(--accent-foreground));
}

.feature-card:hover .feature-icon {
  box-shadow: var(--shadow-glow);
}

.feature-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: hsl(var(--foreground));
  margin-bottom: 0.75rem;
}

.feature-description {
  color: hsl(var(--muted-foreground));
  line-height: 1.625;
}
```

### Section Header
```css
.section-header {
  max-width: 48rem;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 4rem;
}

@media (min-width: 1024px) {
  .section-header {
    margin-bottom: 5rem;
  }
}

.section-label {
  display: inline-block;
  color: hsl(var(--accent));
  font-weight: 500;
  font-size: 0.875rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.section-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.875rem;
  line-height: 1.2;
  font-weight: 700;
  color: hsl(var(--foreground));
  margin-bottom: 1.5rem;
}

@media (min-width: 640px) {
  .section-title {
    font-size: 2.25rem;
  }
}

@media (min-width: 1024px) {
  .section-title {
    font-size: 3rem;
  }
}

.section-description {
  font-size: 1.125rem;
  color: hsl(var(--muted-foreground));
}
```

### Background Decorations
```css
.section-decoration {
  position: absolute;
  pointer-events: none;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background-color: hsla(212, 67%, 17%, 0.05);
  filter: blur(80px);
}

@media (min-width: 1024px) {
  .section-decoration {
    width: 800px;
    height: 800px;
  }
}
```

---

## 10. INTERACTIVE STATES

### Hover States
```css
/* Button hover - scale effect */
button:hover {
  transform: scale(1.05);
  transition: all 300ms ease-out;
}

/* Card hover - border and shadow enhancement */
.card:hover {
  border-color: hsla(212, 67%, 17%, 0.3);
  box-shadow: var(--shadow-medium);
}

/* Link hover - underline effect */
a:hover {
  text-decoration: underline;
}

/* Icon in card hover - glow effect */
.card:hover .icon {
  box-shadow: var(--shadow-glow);
}
```

### Focus States
```css
button:focus-visible,
input:focus-visible,
a:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--background),
              0 0 0 4px hsl(var(--ring));
}
```

### Active States
```css
button:active {
  transform: scale(1);
}

/* Pressed appearance for buttons */
button:active {
  box-shadow: var(--shadow-soft);
}
```

### Disabled States
```css
button:disabled,
input:disabled {
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;
}
```

---

## 11. RESPONSIVE DESIGN PATTERNS

### Mobile-First Approach
Base styles apply to mobile (small screens). Then use media queries to enhance for larger screens.

```css
/* Mobile (base) */
.title {
  font-size: 2rem;
  padding: 1rem;
}

/* Tablet: 640px and up */
@media (min-width: 640px) {
  .title {
    font-size: 2.5rem;
    padding: 1.5rem;
  }
}

/* Medium screens: 768px and up */
@media (min-width: 768px) {
  .title {
    font-size: 3rem;
  }
}

/* Tablet-Large: 1024px and up */
@media (min-width: 1024px) {
  .title {
    font-size: 3.5rem;
    padding: 2rem;
  }
}

/* Desktop: 1280px and up */
@media (min-width: 1280px) {
  .title {
    font-size: 4rem;
  }
}

/* Large Desktop: 1400px and up */
@media (min-width: 1400px) {
  .title {
    font-size: 4.5rem;
  }
}
```

### Common Responsive Patterns

**Text Scaling**
```css
.hero-title {
  font-size: 2rem;/* mobile */
}

@media (min-width: 640px) {
  .hero-title { font-size: 2.5rem; }
}

@media (min-width: 1024px) {
  .hero-title { font-size: 4rem; }
}
```

**Padding & Spacing Adjustments**
```css
.section {
  padding: 1rem;                   /* mobile */
}

@media (min-width: 640px) {
  .section { padding: 1.5rem; }
}

@media (min-width: 1024px) {
  .section { padding: 2rem; }
}
```

**Grid Layout Changes**
```css
.grid {
  display: grid;
  grid-template-columns: 1fr;      /* mobile - single column */
  gap: 1rem;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);  /* tablet - 2 columns */
    gap: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);  /* desktop - 3 columns */
    gap: 2rem;
  }
}
```

**Flex Direction Changes**
```css
.flex-container {
  display: flex;
  flex-direction: column;           /* mobile - stack vertically */
  gap: 1rem;
}

@media (min-width: 768px) {
  .flex-container {
    flex-direction: row;            /* tablet+ - arrange horizontally */
    gap: 1.5rem;
  }
}
```

**Width Adjustments**
```css
.button {
  width: 100%;                      /* mobile - full width */
}

@media (min-width: 640px) {
  .button {
    width: auto;                    /* tablet+ - auto width */
  }
}
```

---

## 12. DARK MODE

### Dark Mode Implementation
Use a `.dark` class on the root element to activate dark mode:

```html
<!-- Light mode (default) -->
<html>
  <!-- Light mode styles applied -->
</html>

<!-- Dark mode -->
<html class="dark">
  <!-- Dark mode styles applied -->
</html>
```

### CSS Variables Override
```css
:root {
  /* Light mode defaults */
  --background: 0 0% 100%;
  --foreground: 214 55% 16%;
  /* ... other light variables ... */
}

.dark {
  /* Dark mode overrides */
  --background: 214 55% 8%;
  --foreground: 0 0% 98%;
  --card: 214 55% 10%;
  --card-foreground: 0 0% 98%;
  
  /* Primary remains consistent */
  --primary: 212 67% 17%;
  --primary-foreground: 0 0% 100%;
  
  --secondary: 212 40% 15%;
  --secondary-foreground: 0 0% 98%;
  
  --muted: 212 40% 15%;
  --muted-foreground: 212 20% 65%;
  
  --border: 214 40% 18%;
  --input: 214 40% 18%;
}
```

### Dark Mode Colors Summary
- Background shifts from white to very dark navy
- Text shifts from dark navy to off-white
- All semantic colors have dark equivalents
- Borders become lighter for visibility on dark backgrounds
- Primary accent color remains consistent for brand continuity

### Applying Styles with Dark Mode
```css
body {
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
  transition: background-color 300ms ease,
              color 300ms ease;
}

/* No need for separate selectors - variables automatically update */
```

### Detecting System Preference (Optional)
```css
/* Automatically enable dark mode if user prefers dark color scheme */
@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
  
  /* Optionally auto-enable dark mode variables */
  :root {
    --background: 214 55% 8%;
    --foreground: 0 0% 98%;
    /* ... */
  }
}

@media (prefers-color-scheme: light) {
  html {
    color-scheme: light;
  }
}
```

---

## 13. BEST PRACTICES & GUIDELINES

### 1. Color Usage
- Always use semantic color names (primary, secondary, accent)
- Never hardcode hex colors - use CSS variables
- Ensure proper contrast for accessibility
- Light text on dark backgrounds, dark text on light

### 2. Typography
- Use `font-display` for headings
- Use `font-sans` for body text
- Maintain consistent hierarchy with font weights
- Proper line-height for readability (typically 1.5-1.6)

### 3. Spacing
- Use consistent spacing scale
- Never deviate from the standard scale (use Tailwind utilities)
- Mobile-first responsive spacing

### 4. Animations
- Use animations sparingly for impact
- Keep animations between 0.3-0.6 seconds
- Always provide `forwards` fill mode for entrance animations
- Test animations on actual devices for performance

### 5. Components
- Build components with purpose
- Use variant patterns for flexibility
- Ensure components are accessible (focus states, ARIA)
- Document component props and usage

### 6. Accessibility
- Maintain color contrast ratios (WCAG AA minimum)
- Include focus states for keyboard navigation
- Use semantic HTML elements
- Add aria-labels where needed
- Don't rely on color alone to convey information

### 7. Performance
- Minimize use of complex shadows
- Optimize animations (use transform and opacity)
- Defer animations to viewport visibility
- Use CSS variables for maintainability

### 8. Consistency
- Use the exact variables and classes defined
- Follow naming conventions
- Apply patterns consistently across components
- Update all component variants together

---

## 14. CSS VARIABLE REFERENCE

### Colors (Light Mode)
```css
--background: 0 0% 100%;              /* White */
--foreground: 214 55% 16%;             /* Dark navy text */
--primary: 212 67% 17%;                /* Deep blue */
--secondary: 0 0% 96%;                 /* Light gray */
--accent: 212 67% 17%;                 /* Same as primary */
--border: 0 0% 90%;                    /* Light gray border */
--ring: 212 67% 17%;                   /* Focus ring color */
--muted: 0 0% 96%;                     /* Muted background */
--muted-foreground: 212 20% 45%;       /* Muted text */
--destructive: 0 84% 60%;              /* Alert red */
```

### Colors (Dark Mode)
```css
--background: 214 55% 8%;              /* Very dark blue */
--foreground: 0 0% 98%;                /* Off-white text */
--primary: 212 67% 17%;                /* Remains same (consistent accent) */
--secondary: 212 40% 15%;              /* Dark blue-gray */
--muted: 212 40% 15%;                  /* Dark muted */
--muted-foreground: 212 20% 65%;       /* Light muted text */
--border: 214 40% 18%;                 /* Visible dark border */
```

### Layout
```css
--radius: 0.75rem;                     /* 12px base border radius */
```

### Shadows
```css
--shadow-soft: 0 4px 24px -4px hsla(212, 55%, 17%, 0.08);
--shadow-medium: 0 8px 32px -8px hsla(212, 55%, 17%, 0.12);
--shadow-strong: 0 16px 48px -12px hsla(212, 55%, 17%, 0.18);
--shadow-glow: 0 0 60px -12px hsla(212, 67%, 17%, 0.3);
```

### Gradients
```css
--gradient-hero: linear-gradient(135deg, hsl(212 67% 17%) 0%, hsl(212 60% 22%) 50%, hsl(212 55% 28%) 100%);
--gradient-accent: linear-gradient(135deg, hsl(212 67% 17%) 0%, hsl(212 60% 24%) 100%);
--gradient-glass: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
--gradient-card: linear-gradient(180deg, hsl(0 0% 100%) 0%, hsl(0 0% 98%) 100%);
```

---

## 16. COMMON CSS PATTERNS

### Hero Button
```css
.btn-hero {
  background: var(--gradient-hero);
  color: hsl(var(--accent-foreground));
  font-weight: 600;
  box-shadow: var(--shadow-soft);
  padding: 0.875rem 2.5rem;
  border-radius: 12px;
  font-size: 1.125rem;
  border: none;
  cursor: pointer;
  transition: all 300ms ease-out;
}

.btn-hero:hover {
  box-shadow: var(--shadow-glow);
  transform: scale(1.05);
}
```

### Feature Card
```css
.feature-card {
  position: relative;
  background-color: hsl(var(--card));
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid hsl(var(--border));
  transition: all 300ms ease-out;
}

.feature-card:hover {
  border-color: hsla(212, 67%, 17%, 0.3);
  box-shadow: var(--shadow-medium);
}

.feature-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 16px;
  background: linear-gradient(to bottom right,
    hsla(212, 67%, 17%, 0.05),
    transparent
  );
  opacity: 0;
  transition: opacity 300ms ease-out;
  pointer-events: none;
}

.feature-card:hover::before {
  opacity: 1;
}
```

### Section Header
```css
.section-header {
  max-width: 48rem;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 4rem;
}

.section-header .label {
  display: inline-block;
  color: hsl(var(--accent));
  font-weight: 500;
  font-size: 0.875rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.section-header h2 {
  font-size: 3rem;
  font-weight: 700;
  color: hsl(var(--foreground));
  margin-bottom: 1.5rem;
}

.section-header p {
  font-size: 1.125rem;
  color: hsl(var(--muted-foreground));
}
```

### Glass Card
```css
.glass-card {
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: var(--shadow-soft);
}
```

### Gradient Text
```css
.gradient-text {
  background: var(--gradient-accent);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}
```

---

## 15. IMPLEMENTATION GUIDE

### Setting Up the Design System

**1. Create Base CSS File**
```css
/* styles/base.css */

:root {
  /* Color System */
  --background: 0 0% 100%;
  --foreground: 214 55% 16%;
  --primary: 212 67% 17%;
  --primary-foreground: 0 0% 100%;
  /* ... all other variables ... */
  
  /* Typography */
  --font-sans: 'Inter', sans-serif;
  --font-display: 'Space Grotesk', sans-serif;
  
  /* Spacing */
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 12px;
  --radius-xl: 16px;
}

* {
  border-color: hsl(var(--border));
}

body {
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
}
```

**2. Create Component CSS Files**
- `components/button.css` - Button styles
- `components/card.css` - Card styles
- `components/badge.css` - Badge styles
- `components/form.css` - Form elements

**3. Create Animation CSS File**
```css
/* styles/animations.css */

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes floating {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(20px); }
}

/* ... more animations ... */

.fade-in {
  animation: fade-in 0.6s ease-out forwards;
}
```

**4. Link All CSS Files**
```html
<link rel="stylesheet" href="styles/base.css">
<link rel="stylesheet" href="styles/animations.css">
<link rel="stylesheet" href="components/button.css">
<link rel="stylesheet" href="components/card.css">
<!-- ... other component CSS files ... -->
```

### CSS Organization Structure
```
styles/
├── base.css              # Root variables, global styles
├── animations.css        # All @keyframes and animation classes
├── responsive.css        # Media query utilities (optional)
└── variables.css         # Alternative: variables-only file

components/
├── button.css
├── card.css
├── badge.css
├── form.css
└── layout.css

pages/
├── hero.css
├── features.css
└── pricing.css
```

### Using CSS Variables in Stylesheets
```css
/* Access and use variables throughout your CSS */
.button {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  border: 1px solid hsl(var(--border));
  border-radius: var(--radius-lg);
  padding: 0.625rem 1rem;
}

.button:hover {
  box-shadow: var(--shadow-medium);
}
```

### Cross-Browser Compatibility
- **Backdrop Filter**: Add vendor prefix `-webkit-backdrop-filter`
- **CSS Variables**: Supported in all modern browsers (IE 11 not supported)
- **Grid**: Well-supported; provide fallback layouts if needed
- **Flexbox**: Fully supported across all modern browsers

---

## Summary

This website employs a sophisticated, modern CSS design system built on:

1. **Professional Navy Blue** primary color scheme (#0E2947)
2. **Soft, subtle shadows** for elevation without heaviness
3. **Custom gradients** for visual interest and branding
4. **Smooth animations** exclusively for entrance effects and micro-interactions
5. **Semantic color naming** via CSS variables for maintainability
6. **Mobile-first responsive approach** using standard CSS media queries
7. **Component-based styling** with reusable CSS classes
8. **Accessibility-conscious** design with proper contrast and focus states
9. **Framework-agnostic** - pure CSS implementation, no dependencies

### Key Implementation Features
- **CSS Variables** for colors, shadows, spacing, and gradients
- **Flexbox & Grid** for layouts
- **CSS Animations** for smooth transitions
- **Media Queries** for responsive design
- **Backdrop Filters** for glass-morphism effects
- **Transform & Opacity** for performant interactions

### Design Philosophy
The overall aesthetic is **modern, professional, and approachable** - suitable for an educational technology platform that values both aesthetic appeal and usability. The design system is flexible enough to be implemented in any web project regardless of framework or build tool, using only standard CSS.
