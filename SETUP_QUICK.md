# Quick Setup Guide

## 🚀 3-Step Setup

### Step 1: Get PayPal Client ID
1. Go to https://developer.paypal.com/dashboard/
2. Sign in or create account
3. Go to Apps & Credentials
4. Under Sandbox/Live, find your Client ID
5. Copy it

### Step 2: Add PayPal Client ID
Open `index.html` and find this line (around line 6):
```html
<script src="https://www.paypal.com/sdk/js?client-id=YOUR_PAYPAL_CLIENT_ID&currency=USD"></script>
```

Replace `YOUR_PAYPAL_CLIENT_ID` with your actual Client ID from Step 1

### Step 3: Deploy to GitHub Pages
```bash
git add .
git commit -m "Add PayPal Client ID"
git push origin main
```

Enable GitHub Pages in your repository settings: Settings → Pages → Source: main branch

## ✨ What's Included

✅ 6 songs from the `ncmusic/` folder ready to sell
✅ "Buy All" button for $49.99 complete collection  
✅ PayPal payment integration
✅ Clean, modern design with smooth animations
✅ Audio preview player
✅ Fully responsive (mobile-friendly)
✅ Commented code for adding albums & bundles later

## 🎨 Design Highlights

- **Unique but professional** - Gradient album cards with hover animations
- **Not generic** - Custom color scheme, smooth transitions, sticky header
- **GitHub Pages ready** - No backend required, just static files
- **Easy to customize** - All colors, text, and layout easily editable

## 📝 Adding More Content

See `README.md` for detailed guides on:
- Adding more singles
- Adding full albums
- Custom album artwork
- Pricing tiers
- Advanced features

## 🛠️ File Overview

- `index.html` - Structure & content (edit to add tracks)
- `style.css` - All styling & responsive design
- `app.js` - PayPal integration & interactivity
- `ncmusic/` - Your audio files folder

## 🎵 Current Tracks

All priced at $9.99 individually, or buy all 6 for $49.99:

1. Bagă sabia in teaca
2. Cine-i mai puternic
3. Isus inca are răbdare
4. Iubire fara de margini
5. Daca Mama-ti Mai Traieste
6. Shema Israel

---

**Ready to go live!** Your site will be at: `https://your-username.github.io/nicu_chereji_music/`
