# PermaLink Component Documentation

## Overview
The PermaLink component displays a luxurious, minimalist permalink at the top of documentation pages, allowing users to easily share and copy the current page URL.

## Features

### 1. Two Display Modes

#### Regular Mode (Default)
Shows: `🔗 hatch.rs/current-page`
- Used for most documentation pages
- Shows the base domain + current path

#### Short Domain Mode
Shows: `🥚 autopilots.rs`
- Used for featured pages with their own short domains
- Displays custom icon and short domain

### 2. Automatic Icon Mapping

The component automatically selects SVG icons based on the current page:

| Path | Icon Type | Description |
|------|-----------|-------------|
| `/autopilots` | Drone | Quadcopter drone icon for autopilots section |
| `/philosophy`, `/pillars` | Chevron | Military chevron for philosophy/pillars |
| `/code-hat`, `/features-code` | Code | Code brackets for development sections |
| `/gen-hat`, `/features-gen` | Terminal | Terminal prompt for generative sections |
| `/visual-hat`, `/features-visual` | Eye | Eye icon for visual sections |
| `/time-graph` | Network | Connected nodes for time graph |
| Default | Link | Minimalist chain link icon |

### 3. Copy to Clipboard

- **Click to Copy**: Click anywhere on the permalink to copy the full URL
- **Visual Feedback**:
  - Hover: Shows copy icon
  - Success: Shows green checkmark (✓) for 2 seconds
  - Luxurious glow effect on interaction

### 4. Automatic Short Domain Configuration

The Layout component automatically configures short domains:

| Page | Short Domain | Localized Example | Status |
|------|--------------|-------------------|---------|
| `/autopilots` | `autopilots.rs` | `autopilots.rs/es` | ✅ Active |
| `/manifesto` | `manifesto.rs` | `manifesto.rs/fr` | 🔜 Coming Soon |
| `/philosophy` | `philosophy.rs` | `philosophy.rs/de` | 🔜 Coming Soon |
| `/community` | `community.rs` | `community.rs/ja` | 🔜 Coming Soon |

**Note:** Currently only `autopilots.rs` is active. Other domains will be activated as they become available.

### 5. Localization Support

The component automatically detects language paths and appends them to short domains:
- `/es/autopilots` → `autopilots.rs/es`
- `/fr/manifesto` → `manifesto.rs/fr`

## Visual Design

### Styling
- **Background**: Semi-transparent with backdrop blur
- **Border**: Subtle, increases visibility on hover
- **Typography**: Monospace font for technical feel
- **Colors**: Adaptive to light/dark themes
- **Animations**: Smooth transitions with cubic-bezier easing
- **Glow Effect**: Purple gradient on hover/interaction

### Responsive Design
- **Desktop**: Full size with comfortable padding
- **Mobile**: Smaller font and padding for better fit
- **Print**: Hidden when printing documentation

### Accessibility
- **Reduced Motion**: Respects user preferences
- **Keyboard**: Fully keyboard accessible
- **Screen Readers**: Proper ARIA labels (can be enhanced)

## Usage

The component is automatically added to all documentation pages (except the home page) through the custom Layout component. No manual integration needed!

### Manual Usage (Optional)

If you want to use it in a specific location:

```vue
<PermaLink :shortDomain="autopilots.rs" :icon="🥚" />
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `shortDomain` | `string` | `undefined` | Optional short domain to display instead of full path |
| `icon` | `string` | `🔗` | Icon to display (auto-selected based on page) |
| `basePath` | `string` | `hatch.rs` | Base domain for regular permalinks |

## Implementation Notes

1. **Performance**: Component uses Vue's Transition API for smooth animations
2. **State Management**: Manages hover and copy states internally
3. **Route Awareness**: Automatically updates based on current route
4. **Lazy Loading**: Only mounts after page load to prevent SSR issues

## Future Enhancements

- [ ] Add analytics tracking for copy events
- [ ] Support custom toast notifications
- [ ] Add QR code generation option
- [ ] Support for custom copy formats (Markdown, HTML)
- [ ] Social sharing integrations
- [ ] Keyboard shortcuts (Cmd+Shift+C to copy)