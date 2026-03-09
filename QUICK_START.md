# Quick Start Guide - Updated with Mini Player

## What's New? 

✅ **Pricing Changed**
- Singles: $9.99 → **$1.99**
- Buy All: $49.99 → **$11.94**

✅ **Mini Player Added**
- Click Preview → mini player appears on card
- Play/pause button (blue circle)
- Seek slider to navigate through song
- Time display (MM:SS format)


## The Mini Player

### How It Works
```
Card View:
┌─────────────────────────────────┐
│  [Gradient Album Cover]         │
├─────────────────────────────────┤
│  Track Title                    │
│  Single • $1.99                 │
│  [▶ Preview]  [Buy]             │
│                                 │
│  Click Preview ↓                │
│                                 │
│  ┌───────────────────────────┐  │
│  │ [●] ────●───── 1:23       │  │
│  └───────────────────────────┘  │
│  ● = play/pause                 │
│  ──── = drag to seek             │
│  1:23 = current time            │
└─────────────────────────────────┘
```

### Features
- Click play button to start/stop
- Drag slider to jump to any part
- Time updates as you listen
- Only one track plays at a time
- Works on mobile (touch-friendly)
- No external plugins needed


## File Changes

**index.html**
- All 6 tracks now $1.99
- Buy All button now $11.94
- Mini player HTML added to each card

**style.css**
- New `.mini-player` styles
- Play button styling (blue, circular)
- Slider styling (custom for all browsers)
- Time display formatting

**app.js** 
- Complete rewrite for mini player
- New functions: playPreview(), togglePlayPause(), seekTrack()
- Updated pricing in PayPal integration


## Deploy Steps

1. **Open index.html** (line 6)
   Find: `<script src="https://www.paypal.com/sdk/js?client-id=YOUR_PAYPAL_CLIENT_ID`
   
2. **Add your PayPal Client ID**
   Replace `YOUR_PAYPAL_CLIENT_ID` with your actual ID

3. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Update: pricing $1.99, add mini player"
   git push origin main
   ```

4. **Enable GitHub Pages**
   - Settings → Pages → Source: main branch
   - Wait 1-2 minutes
   - Your site is live!


## Test the Mini Player

1. Open index.html in browser
2. Find any track card
3. Click "Preview" button
4. Mini player should appear below buttons
5. Click play button (●) - should start playing
6. Watch time display (should show 0:00, 0:01, etc.)
7. Drag slider - should seek to new position
8. Click pause (⏸) - should pause playback
9. Track ends - should auto-reset to ▶


## Pricing Overview

| Item | Price |
|------|-------|
| Bagă sabia in teaca | $1.99 |
| Cine-i mai puternic | $1.99 |
| Isus inca are răbdare | $1.99 |
| Iubire fara de margini | $1.99 |
| Daca Mama-ti Mai Traieste | $1.99 |
| Shema Israel | $1.99 |
| **Buy All 6 Tracks** | **$11.94** |


## Browser Support

Works on:
- ✓ Chrome/Chromium
- ✓ Firefox
- ✓ Safari
- ✓ Edge
- ✓ Mobile Chrome
- ✓ Mobile Safari


## Troubleshooting

### Mini player doesn't appear
- Make sure you're clicking the "Preview" button
- Check browser console (F12) for errors

### Slider doesn't work
- Try a different browser
- Clear browser cache (Ctrl+Shift+R)

### Audio won't play
- Check that MP3 files are in `ncmusic/` folder
- Check browser console for CORS errors

### PayPal not showing
- Make sure Client ID is added to index.html
- Check that Client ID is valid


## Next Steps

1. ✓ Pricing updated
2. ✓ Mini player added
3. → Add PayPal Client ID
4. → Deploy to GitHub Pages
5. → Test everything
6. → Share with the world!


## Support

- See **MINI_PLAYER_GUIDE.md** for detailed documentation
- See **README.md** for comprehensive guide
- PayPal docs: https://developer.paypal.com/docs/


---

**Your music store is now ready!** 🎵

Visitors can preview full tracks with our new mini player before buying.

Deploy with confidence. Make those sales! 🚀
