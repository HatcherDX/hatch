# Claude Development Guidelines for Hatcher

## CSS Development Approach
**ALWAYS USE MOBILE-FIRST**: Start with mobile styles as default, then use min-width media queries for larger screens.

## Project-Specific Guidelines

### Search Button Mobile Design
- Mobile: 44x44px touch target, icon only, no keyboard shortcut
- Desktop: Full text with ⌘K shortcut
- Add margin-left on mobile for spacing from logo

### Mobile Navigation
- Hide keyboard shortcuts on mobile (not useful for touch)
- Use minimum 44px touch targets for all interactive elements
- Simplify UI for mobile - icons over text when possible

### Color Palette
- Golden accent: #c9962f (refined gold, not yellow)
- Warm gold for dark mode: #d4a847

### Hover Effects
- Keep them subtle and sophisticated
- Use single, clean effects rather than multiple overlapping ones
- Test alignment carefully, especially for pseudo-elements