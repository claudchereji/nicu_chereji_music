# Mini Player Implementation Guide

## Overview

Each album card now features an inline mini player that appears when the user clicks the "Preview" button. This allows listeners to:
- Play/pause the track
- Seek through the song using a slider
- See the current playback time in MM:SS format

## User Interface

### Album Card Layout

```
┌──────────────────────────────────────────────┐
│                                              │
│  [Color Gradient Cover]                      │
│                                              │
├──────────────────────────────────────────────┤
│                                              │
│  Track Title                                 │
│  Single                                      │
│  $1.99                                       │
│                                              │
│  [▶ Preview]     [Buy]                       │ ← Initial state
│                                              │
│  (mini player hidden)                        │
│                                              │
└──────────────────────────────────────────────┘
```

### After Clicking Preview

```
┌──────────────────────────────────────────────┐
│                                              │
│  [Color Gradient Cover]                      │
│                                              │
├──────────────────────────────────────────────┤
│                                              │
│  Track Title                                 │
│  Single                                      │
│  $1.99                                       │
│                                              │
│  [▶ Preview]     [Buy]                       │
│                                              │
│  ┌─────────────────────────────────────────┐ │ ← Mini Player appears
│  │[●] ════●═════════════════════ 1:23      │ │
│  └─────────────────────────────────────────┘ │
│                                              │
└──────────────────────────────────────────────┘
```

## Mini Player Components

### 1. Play/Pause Button
- **Appearance**: Blue circular button with white icon
- **Position**: Left side of player
- **Icon**: 
  - ▶ (play triangle) when paused
  - ⏸ (pause bars) when playing
- **Action**: Toggle play/pause state
- **Styling**: 
  - Background: #3498db (professional blue)
  - Width/Height: 36px (circular)
  - Box shadow: Subtle shadow with hover effect
  - Hover effect: Slight scale increase (1.05)

### 2. Seek Slider
- **Appearance**: Horizontal progress bar with draggable thumb
- **Position**: Center of player
- **Features**:
  - Visual progress indicator
  - Draggable for seeking
  - Touch-friendly on mobile
  - Smooth animation
- **Styling**:
  - Track color: #bdc3c7 (light gray)
  - Thumb color: #3498db (blue)
  - Height: 5px (track), 14px (thumb)
  - Border radius: 3px (track), 50% (thumb)

### 3. Time Display
- **Appearance**: Text showing elapsed time
- **Format**: MM:SS (e.g., "1:23")
- **Position**: Right side of player
- **Updates**: Real-time as track plays
- **Initial state**: "0:00"
- **Final state**: Remains at end time when track finishes

## HTML Structure

```html
<div class="mini-player" style="display: none;">
  <button class="play-pause-btn" onclick="togglePlayPause(this)">▶</button>
  <input type="range" class="player-slider" min="0" max="100" value="0" 
         onchange="seekTrack(this)" oninput="seekTrack(this)">
  <span class="time-display">0:00</span>
</div>
```

## CSS Styling

### Mini Player Container
```css
.mini-player {
  margin-top: 1rem;
  padding: 0.75rem;
  background: #ecf0f1;           /* Light gray background */
  border-radius: 6px;
  display: flex;                 /* Flexbox layout */
  align-items: center;
  gap: 0.5rem;
  animation: fadeInUp 0.3s ease-out;  /* Smooth appearance */
}
```

### Play/Pause Button
```css
.play-pause-btn {
  background: #3498db;           /* Blue */
  color: white;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;            /* Perfect circle */
  cursor: pointer;
  flex-shrink: 0;                /* Don't shrink */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(52, 152, 219, 0.3);
}

.play-pause-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(52, 152, 219, 0.4);
}

.play-pause-btn:active {
  transform: scale(0.95);
}
```

### Seek Slider
```css
.player-slider {
  flex: 1;                       /* Take remaining space */
  height: 5px;
  border-radius: 3px;
  background: #bdc3c7;           /* Light gray track */
  outline: none;
  cursor: pointer;
  /* Webkit browsers (Chrome, Safari, Edge) */
}

.player-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 14px;
  height: 14px;
  border-radius: 50%;            /* Perfect circle */
  background: #3498db;           /* Blue thumb */
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(52, 152, 219, 0.4);
}

/* Firefox */
.player-slider::-moz-range-thumb {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #3498db;
  cursor: pointer;
  border: none;
}
```

### Time Display
```css
.time-display {
  font-size: 0.75rem;            /* Small text */
  color: #7f8c8d;                /* Light gray text */
  font-weight: 600;
  min-width: 36px;               /* Fixed width for alignment */
  text-align: right;
  font-variant-numeric: tabular-nums;  /* Monospace numbers */
}
```

## JavaScript Functions

### playPreview(button, trackPath)
Triggered when the "Preview" button is clicked.

**Parameters:**
- `button` - The HTML element of the clicked preview button
- `trackPath` - String path to the audio file

**Behavior:**
1. Stops any previously playing track
2. Hides mini player of previous track
3. Creates new Audio element (if needed)
4. Sets audio source to trackPath
5. Shows mini player
6. Starts playback
7. Sets `isPlaying = true`

**Example:**
```javascript
onclick="playPreview(this, 'ncmusic/track.mp3')"
```

### togglePlayPause(playBtn)
Triggered by clicking the play/pause button.

**Behavior:**
1. Checks if audio is paused
2. If paused: play the audio
3. If playing: pause the audio
4. Button icon updates automatically via `onAudioPlay()` / `onAudioPause()`

### seekTrack(slider)
Triggered by dragging the seek slider.

**Behavior:**
1. Gets percentage value from slider
2. Calculates new time position
3. Sets `currentAudio.currentTime` to new position
4. Audio continues playing from new position

### onTimeUpdate()
Fires 100ms intervals during playback (via `setInterval`).

**Updates:**
- Slider position based on current playback time
- Time display showing current time in MM:SS format

### formatTime(seconds)
Helper function to format seconds to MM:SS.

**Example:**
- `62` seconds → `"1:02"`
- `5` seconds → `"0:05"`
- `125.5` seconds → `"2:05"`

### showMiniPlayer(button) / hideMiniPlayer(button)
Show or hide the mini player for a specific card.

**Behavior:**
- Uses `style.display = 'flex'` or `'none'`
- Called automatically by playPreview() and song switches

## Audio Event Listeners

The app creates listeners for:

### play
Triggered when audio starts playing:
- Updates button to show ⏸ (pause icon)
- Starts 100ms time update interval

### pause
Triggered when audio is paused:
- Updates button to show ▶ (play icon)
- Stops time update interval

### ended
Triggered when audio finishes:
- Updates button to show ▶
- Resets slider to 0
- Stops time update interval

### timeupdate
Fires during playback (custom 100ms interval):
- Updates slider position
- Updates time display

## Responsive Design

### Desktop (4 columns)
- Mini player appears below buttons
- Slider is easily draggable
- Full width of card minus padding

### Tablet (2 columns)
- Same layout as desktop
- Slightly larger touch targets

### Mobile (1 column)
- Mini player fills card width
- Slider is touch-optimized
- Large tap targets for button

## Browser Compatibility

Tested on:
- Chrome/Chromium (v90+)
- Firefox (v88+) with `::-moz-range-*` styles
- Safari (v14+) with `-webkit-slider-*` styles
- Edge (v90+) with `-webkit-slider-*` styles
- Mobile browsers (iOS Safari, Chrome Mobile)

## Pricing Integration

### Individual Track
- Price: $1.99
- Button: [Buy] calls `buyTrack(trackName, 1.99)`

### All Tracks Bundle
- Price: $11.94 (6 × $1.99)
- Button: [Buy All] calls `buyAll()`

## Player Behavior

### Single Track Playing
- Only one track can play at a time
- Clicking new preview stops current track
- Mini player for current track is shown
- Mini player for previous track is hidden

### Auto-Stop
- When track ends, auto-pauses
- Slider returns to start
- Button resets to play (▶) icon

### Quick Seek
- Slider updates audio position immediately
- No buffering delay
- Smooth playback after seek

## Customization

### Change Player Color
Edit in `style.css`:
```css
.play-pause-btn {
  background: #YOUR_COLOR;
}

.player-slider::-webkit-slider-thumb {
  background: #YOUR_COLOR;
}
```

### Change Player Size
```css
.play-pause-btn {
  width: 40px;    /* Larger button */
  height: 40px;
}

.player-slider {
  height: 6px;    /* Thicker track */
}

.player-slider::-webkit-slider-thumb {
  width: 16px;    /* Bigger thumb */
  height: 16px;
}
```

### Change Time Format
Modify `formatTime()` function in `app.js` to change MM:SS format.

## Testing

### Test Checklist
- [ ] Click preview → mini player appears
- [ ] Click play → audio plays
- [ ] Time display updates (0:00 → elapsed)
- [ ] Click pause → audio pauses
- [ ] Drag slider left → seek backward
- [ ] Drag slider right → seek forward
- [ ] Audio resumes from new position
- [ ] Track ends → play button resets to ▶
- [ ] Click different preview → previous stops
- [ ] Mobile: slider is draggable on touch
- [ ] Mobile: button is tappable
- [ ] Hover effects work on desktop
- [ ] All 6 tracks preview correctly
- [ ] PayPal purchase after preview works

## Performance

- **Smooth Playback**: No lag during seeking
- **Quick Response**: Play/pause responds immediately
- **Mobile Friendly**: Touch events work smoothly
- **Responsive**: Layout adapts to all screen sizes
- **Lightweight**: No external player libraries needed

---

**The mini player enhances user experience by allowing full song preview before purchase.**
