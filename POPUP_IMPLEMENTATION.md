# Track List Popup Implementation Guide

## Overview
The track list popup feature allows users to preview all tracks in an album before purchasing. The popup displays a scrollable list of tracks with individual play buttons and a shared mini-player for track preview.

## Features Implemented

### 1. **Popup Opening** (`openTrackListPopup()`)
- Triggered by "Preview Tracks" button on album cards
- Dynamically populates track list from ALBUMS configuration
- Displays album name and track count
- Shows fade-in animation on open
- Creates interactive track items with play buttons

**Usage:**
```html
<button onclick="openTrackListPopup('Singles')">▶ Preview Tracks</button>
```

### 2. **Popup Closing** (`closeTrackListPopup()`)
- Fade-out animation before hiding
- Stops any playing audio
- Clears interval timers
- Resets state variables
- Can be triggered by:
  - Close button (✕)
  - Clicking outside the popup
  - Programmatically

### 3. **Track Selection** (`playPopupTrack()`)
- Plays selected track from the popup list
- Creates single Audio element for all popup playback
- Displays mini-player below track list
- Updates play button state to show pause icon
- Shows current time and seek slider
- Starts time update interval for real-time UI updates

### 4. **Mini Player Controls** 
- **Play/Pause Button**: Toggles playback
- **Seek Slider**: Drag to seek through track
- **Time Display**: Shows current playback time in MM:SS format
- **Responsive Slider**: Touch-friendly on mobile devices

## JavaScript Functions

### Main Functions
| Function | Purpose | Parameters |
|----------|---------|-----------|
| `openTrackListPopup(albumName)` | Opens popup with album tracks | albumName: string |
| `closeTrackListPopup()` | Closes popup and stops playback | None |
| `playPopupTrack(trackIndex, albumName)` | Plays selected track | trackIndex: number, albumName: string |
| `togglePopupPlayPause()` | Toggle play/pause during playback | None |
| `seekPopupTrack(slider)` | Seek to position | slider: HTMLElement |

### Event Handlers
- `onPopupAudioPlay()` - Updates UI when audio starts
- `onPopupAudioPause()` - Updates UI when audio pauses
- `onPopupTimeUpdate()` - Updates slider and time display
- `onPopupAudioEnded()` - Handles track end
- `onPopupAudioLoaded()` - Triggered when metadata loads

### State Variables
```javascript
let currentPopupAlbum = null;        // Current album being viewed
let popupAudio = null;              // Audio element for popup
let popupIsPlaying = false;         // Playback state
let popupUpdateTimeInterval = null; // Time update timer
```

## HTML Structure

### Popup Container
```html
<div id="track-list-popup" class="track-list-popup">
  <div class="popup-content">
    <button class="popup-close" onclick="closeTrackListPopup()">✕</button>
    <div class="popup-header">
      <h3 id="popup-album-title"></h3>
      <p id="popup-track-count"></p>
    </div>
    <div id="track-list-container" class="track-list-container">
      <!-- Tracks inserted here -->
    </div>
    <div id="current-track-player" class="mini-track-player">
      <button class="track-play-btn" id="popup-play-btn">▶</button>
      <input type="range" class="mini-track-slider" id="popup-slider" min="0" max="100" value="0">
      <span class="mini-track-time" id="popup-time">0:00</span>
    </div>
  </div>
</div>
```

### Dynamic Track Items
Each track is created as:
```html
<div class="track-item">
  <button class="track-play-btn" onclick="playPopupTrack(0, 'Singles')">▶</button>
  <div class="track-info">
    <span class="track-number">01</span>
    <span class="track-name">Track Name</span>
  </div>
</div>
```

## CSS Styling

### Key Classes
| Class | Purpose |
|-------|---------|
| `.track-list-popup` | Popup container with backdrop |
| `.popup-content` | Popup box with animations |
| `.popup-header` | Album title and track count section |
| `.track-list-container` | Scrollable track list |
| `.track-item` | Individual track row |
| `.track-play-btn` | Play button for each track |
| `.mini-track-player` | Player controls at bottom |
| `.mini-track-slider` | Seek slider element |

### Responsive Behavior
- **Desktop (>768px)**: Popup slides in from right side
- **Mobile (≤768px)**: Popup slides up from bottom (full width)
- **Both**: Fixed positioning with semi-transparent backdrop

### Animations
- Fade-in/out: 0.3s ease
- Slide animations: 0.4s cubic-bezier(0.4, 0, 0.2, 1)
- Smooth slider thumb interaction

## ALBUMS Configuration

Located in `app.js`:
```javascript
const ALBUMS = {
  'Singles': {
    tracks: [
      { number: '01', name: 'Track Name', path: 'ncmusic/Track.mp3' },
      { number: '02', name: 'Track Name', path: 'ncmusic/Track.mp3' },
      // ... more tracks
    ],
    price: 11.94
  }
  // Add more albums here
};
```

### Adding New Albums
1. Add album entry to ALBUMS object
2. Create tracks array with `{ number, name, path }` objects
3. Number tracks with zero-padded format (01, 02, 03, etc.)
4. Path should point to actual MP3 file location

## Event Flow

```
User clicks "Preview Tracks"
    ↓
openTrackListPopup('Singles')
    ↓
Popup displays with track list
    ↓
User clicks track play button
    ↓
playPopupTrack(index, albumName)
    ↓
Audio loads and plays
    ↓
onPopupAudioPlay() fires
    ↓
Mini-player appears, time updates every 100ms
    ↓
User can: play/pause, seek, select another track
    ↓
Track ends → onPopupAudioEnded()
    ↓
User clicks close → closeTrackListPopup()
    ↓
Popup hides, audio stops, state clears
```

## Cross-Browser Compatibility
- ✓ Chrome/Edge (full support)
- ✓ Firefox (full support)
- ✓ Safari (full support)
- ✓ Mobile browsers (iOS Safari, Chrome mobile)

## Known Limitations & Future Improvements
1. Only one track can play at a time (popup tracks separate from card previews)
2. No playlist/autoplay next feature yet
3. Could add total duration display in future
4. Could add track duration display in list
5. Could add keyboard controls (arrow keys, spacebar)

## Testing Checklist
- ✓ Popup opens on "Preview Tracks" click
- ✓ Album title displays correctly
- ✓ Track count shows correctly
- ✓ All 6 tracks appear in list
- ✓ Track play buttons work
- ✓ Mini-player shows when track plays
- ✓ Play/pause toggle works
- ✓ Seek slider works
- ✓ Time updates in real-time
- ✓ Close button hides popup
- ✓ Clicking outside closes popup (backdrop)
- ✓ Responsive on mobile/tablet/desktop
- ✓ Audio stops when popup closes

## Debugging Tips
1. **Popup doesn't open**: Check browser console for errors, verify ALBUMS config
2. **No sound**: Verify audio file paths are correct and accessible
3. **Slider not working**: Check that `seekPopupTrack()` event listeners are attached
4. **Mobile layout wrong**: Check viewport meta tag and media queries in CSS
5. **Console errors**: Look for "Album not found" or "Invalid track index" messages

