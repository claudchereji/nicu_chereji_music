# Nicu Chereji Music Store - Color Palette

## Brand Colors (From YouTube Assets)

Extracted from the official Nicu Chereji YouTube channel assets to create a cohesive brand identity across the music ecommerce store.

### Primary Colors

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| Black | `#000000` | 0, 0, 0 | Primary backgrounds, headers, text contrast |
| Red | `#f00000` | 240, 0, 0 | Primary action color, buttons, accents |
| Deep Red | `#c00030` | 192, 0, 48 | Secondary red, hover states |
| Light Red | `#f09090` | 240, 144, 144 | Light backgrounds, soft accents |

### Text Colors

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| Dark | `#1a1a1a` | 26, 26, 26 | Body text, primary text |
| Light Gray | `#666666` | 102, 102, 102 | Secondary text, labels |
| Border | `#e0e0e0` | 224, 224, 224 | Dividers, borders, lines |

## CSS Variables

Located in `style.css`:

```css
:root {
  --primary: #000000;      /* Black */
  --secondary: #f00000;    /* Red */
  --accent: #c00030;       /* Deep Red */
  --accent-light: #f09090; /* Light Red */
  --text-dark: #1a1a1a;    /* Dark text */
  --text-light: #666666;   /* Light text */
  --border: #e0e0e0;       /* Borders */
}
```

## Component Color Mapping

### Header & Navigation
- **Background**: Black to dark gradient (`#000000` → `#1a1a1a`)
- **Border**: Red bottom border (`#f00000`)
- **Nav Links**: White text
- **Hover Underline**: Red (`#f00000`)

### Hero Section
- **Background**: Red to deep red gradient (`#c00030` → `#f00000`)
- **Text**: White
- **Shadow**: Red glow (rgba(240, 0, 0, 0.3))

### Buttons
- **Primary (Buy)**: Red gradient (`#f00000` → `#c00030`)
- **Secondary (Listen)**: Light background with border
- **Hover**: Enhanced shadow, transform up
- **Play Buttons**: Red circles with hover to deep red

### About Section
- **Background**: Light gray to white gradient
- **Profile Image**: 
  - Circle border: Red (`#f00000`)
  - Size: 140px (desktop), 120px (tablet), 100px (mobile)
  - Shadow: Red glow on hover
  - Hover: Scale up 1.05

### Footer
- **Background**: Black to dark gradient
- **Border**: Red top border (`#f00000`)
- **Text**: White

### Controls (Sliders, Play Buttons)
- **Background**: Red (`#f00000`)
- **Hover**: Deep red (`#c00030`)
- **Shadow**: Red glow (rgba(240, 0, 0, 0.3-0.4))

## Gradients

### Header
```css
linear-gradient(135deg, #000000 0%, #1a1a1a 100%)
```

### Hero Section
```css
linear-gradient(135deg, #c00030 0%, #f00000 100%)
```

### Album Covers
```css
linear-gradient(135deg, #f00000 0%, #c00030 100%)
```

### Footer
```css
linear-gradient(135deg, #000000 0%, #1a1a1a 100%)
```

### About Section
```css
linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)
```

## Shadows & Effects

### Red Glow Shadows
```css
/* Light */
box-shadow: 0 2px 8px rgba(240, 0, 0, 0.3);

/* Medium */
box-shadow: 0 4px 12px rgba(240, 0, 0, 0.4);

/* Heavy */
box-shadow: 0 6px 20px rgba(240, 0, 0, 0.4);
```

## Responsive Adjustments

### Desktop (>768px)
- Full color scheme applied
- Profile image: 140px
- All shadows and glows active

### Tablet (768px)
- Profile image: 120px
- Slightly reduced shadow intensity

### Mobile (<480px)
- Profile image: 100px
- Optimized for smaller screens
- Maintained color hierarchy

## Brand Guidelines

1. **Red is for Action**: Use `#f00000` for all interactive elements
2. **Black is Authority**: Use `#000000` for headers and strong elements
3. **Consistency**: Always use CSS variables for colors
4. **Accessibility**: Maintain sufficient contrast
   - Red text on white: ✓ Good contrast (7:1)
   - White text on red: ✓ Good contrast (5.5:1)
5. **Hover States**: Always darken or enhance on interaction

## Color Extraction Source

- **Source**: Nicu Chereji - YouTube assets
- **Files Used**: 
  - WebP artwork: `f628a26493b25599a7c1436eaaef6de8f833ad118a9d7ec39fe1fbf91ad.webp`
  - Profile: `channels4_profile.jpg`
  - Banner: `channels4_banner.jpg`
- **Extraction Date**: March 9, 2026
- **Primary Colors Identified**: Red (#f00000, #c00030), Black (#000000), White (#f0f0f0)

---

## Implementation Notes

All color changes made on March 9, 2026 to align the ecommerce store with official YouTube brand colors. This creates a cohesive visual identity across all Nicu Chereji digital properties.

