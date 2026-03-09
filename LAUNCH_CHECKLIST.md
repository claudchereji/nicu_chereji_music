# Launch Checklist ✓

## Pre-Launch (Before Going Live)

### Step 1: PayPal Setup (5 minutes)
- [ ] Visit https://developer.paypal.com/dashboard/
- [ ] Create a Business account (or sign in)
- [ ] Navigate to Apps & Credentials
- [ ] Copy your Client ID
- [ ] Save it somewhere secure

### Step 2: Update index.html (1 minute)
- [ ] Open `index.html`
- [ ] Find line 6: `<script src="https://www.paypal.com/sdk/js?client-id=YOUR_PAYPAL_CLIENT_ID&currency=USD"></script>`
- [ ] Replace `YOUR_PAYPAL_CLIENT_ID` with your actual Client ID
- [ ] Save the file

### Step 3: Test Locally (Optional but recommended)
- [ ] Open `index.html` in your web browser
- [ ] Check that the page loads
- [ ] Verify all 6 tracks are visible
- [ ] Click audio preview buttons (should work)
- [ ] Check responsive design on mobile

### Step 4: Git Commit
```bash
git add index.html
git commit -m "Add PayPal Client ID for production"
```

### Step 5: Deploy to GitHub Pages
```bash
git push origin main
```

### Step 6: Enable GitHub Pages
- [ ] Go to repository Settings
- [ ] Click "Pages" in left sidebar
- [ ] Set Source to "main branch"
- [ ] Wait 1-2 minutes for deployment
- [ ] Your site is now live at: `https://yourusername.github.io/nicu_chereji_music/`

---

## Post-Launch (After Going Live)

### Verify Everything Works
- [ ] Visit your live URL
- [ ] Page loads properly
- [ ] All 6 tracks are visible
- [ ] Grid is responsive (test mobile)
- [ ] Audio previews work
- [ ] "Buy All" button is prominently displayed
- [ ] Buy buttons show PayPal checkout (click "Cancel" to not pay)

### Test a Sample Payment (Sandbox)
- [ ] Click any "Buy" button
- [ ] PayPal checkout opens
- [ ] Review order details
- [ ] Click "Cancel" (don't actually pay)
- [ ] Success notification appears (even after cancel, it's showing the flow)

### Share Your Store
- [ ] Share link with friends/family
- [ ] Get feedback on design
- [ ] Test from different devices
- [ ] Test from different browsers

---

## Content Management (Adding More Music)

### To Add a New Single
1. Upload MP3 file to `ncmusic/` folder
2. Open `index.html`
3. Find the album cards section
4. Copy one of the existing card blocks
5. Update the file name, title, and gradient
6. Push to GitHub

Example template:
```html
<div class="album-card">
  <div class="album-cover">
    <div class="cover-placeholder" style="background: linear-gradient(135deg, #YOUR_COLOR 0%, #YOUR_COLOR2 100%)"></div>
  </div>
  <div class="album-info">
    <h3>Track Title</h3>
    <p class="album-type">Single</p>
    <p class="price">$9.99</p>
    <div class="album-actions">
      <button class="btn btn-secondary btn-listen" onclick="playPreview('ncmusic/filename.mp3')">
        ▶ Preview
      </button>
      <button class="btn btn-primary" onclick="buyTrack('Track Title')">
        Buy
      </button>
    </div>
  </div>
</div>
```

---

## Customization Ideas (Easy Changes)

### Change Colors
Edit these in `style.css` (around line 16):
```css
:root {
  --primary: #2d3e50;        /* Change header/footer color */
  --secondary: #3498db;      /* Change button color */
  --accent: #e74c3c;         /* Change price/highlight color */
}
```

### Change Text
Edit these in `index.html`:
- Header tagline (line ~11)
- Hero section text (line ~21)
- About section (line ~155)
- Footer text (line ~239)

### Change Prices
Edit in `index.html`:
- "Buy All" price: search for `$49.99` (line ~47)
- Single track price: search for `$9.99` (multiple locations)

### Change Gradients
Edit the `style="background: linear-gradient(...)"` on each card.
Example gradients:
- `linear-gradient(135deg, #667eea 0%, #764ba2 100%)` (Purple)
- `linear-gradient(135deg, #f093fb 0%, #f5576c 100%)` (Pink-Red)
- `linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)` (Blue-Cyan)

---

## Troubleshooting

### PayPal button not showing
**Problem:** Click "Buy" but nothing happens
**Solution:** Make sure you replaced `YOUR_PAYPAL_CLIENT_ID` with your actual Client ID

### Audio won't play
**Problem:** "Preview" button doesn't work
**Solution:** 
1. Check file path is correct (e.g., `ncmusic/filename.mp3`)
2. Verify MP3 file exists in `ncmusic/` folder
3. Check browser console for errors (F12)

### Page looks broken on mobile
**Problem:** Text is too small or layout is weird
**Solution:**
1. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
2. Check viewport meta tag in index.html
3. Test in different mobile browser

### GitHub Pages not showing
**Problem:** URL returns 404
**Solution:**
1. Go to Settings → Pages
2. Verify Source is set to "main branch"
3. Wait a few minutes for deployment
4. Check repository name is correct in URL

### Commits not showing on GitHub
**Problem:** Pushed code but site hasn't updated
**Solution:**
1. Wait 1-2 minutes for GitHub Pages build
2. Check "Actions" tab to see build status
3. Try clearing GitHub Pages cache (disable/enable Pages)

---

## Performance Tips

### To improve page load time
1. Compress MP3 files if possible
2. Use a CDN for MP3s (optional, GitHub Pages is fine for now)
3. Monitor Lighthouse score in DevTools

### To add custom analytics (optional)
Add this to `index.html` before closing `</body>`:
```html
<!-- Google Analytics (optional) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

---

## Next Steps (When Ready to Expand)

### Phase 2: Custom Domain
1. Buy domain (GoDaddy, Namecheap, etc.)
2. Point domain to GitHub Pages
3. Update PayPal return URLs
4. Update any hard-coded URLs in code

### Phase 3: Full Albums
1. Create album folder structure
2. Use commented `loadAlbumsFromData()` in app.js
3. Update CSS grid for album view
4. Update PayPal pricing for albums

### Phase 4: Email Setup
1. Add email signup form
2. Send download link via email after purchase
3. Use SendGrid or Mailgun API
4. Implement backend processing

### Phase 5: Advanced Features
1. Customer database
2. Order tracking
3. Analytics dashboard
4. Social media integration
5. Wishlist feature

---

## Success Criteria ✓

You'll know everything is working when:

✓ Site loads without errors
✓ All 6 tracks are visible in grid
✓ "Buy All" card is at top
✓ Mobile version looks good
✓ Audio previews play when clicked
✓ Buy buttons trigger PayPal checkout
✓ Page is responsive
✓ No console errors in DevTools (F12)

---

## Support Resources

- **PayPal Docs:** https://developer.paypal.com/docs/
- **GitHub Pages Help:** https://docs.github.com/en/pages
- **CSS Reference:** https://developer.mozilla.org/en-US/docs/Web/CSS
- **HTML Reference:** https://developer.mozilla.org/en-US/docs/Web/HTML

---

## Final Checklist Before Celebrating 🎉

- [ ] PayPal Client ID added
- [ ] GitHub Pages enabled
- [ ] Site is live at your GitHub Pages URL
- [ ] All tracks are visible
- [ ] Design looks good
- [ ] Mobile view works
- [ ] You've tested a payment flow
- [ ] You're ready to share with the world!

**Congratulations! Your music store is live!** 🚀

Now go make some sales and keep creating music! 🎵
