# Nicu Chereji Music Store

A clean, modern ecommerce website for independent musicians built for GitHub Pages and ready to scale.

## Features

- **Responsive Grid Layout** - Beautiful card-based album grid with modern design
- **Audio Previews** - Built-in audio player for track previews
- **PayPal Integration** - Secure payment processing
- **"Buy All" Option** - Top card for complete collection purchases
- **Unique Design** - Clean aesthetic with gradient elements and smooth animations
- **GitHub Pages Ready** - Static site deployable directly to GitHub Pages
- **Future-Proof** - Commented code shows how to add full albums and bundles

## Current Content

The store includes 6 singles from Nicu Chereji:
- Bagă sabia in teaca
- Cine-i mai puternic
- Isus inca are răbdare
- Iubire fara de margini
- Daca Mama-ti Mai Traieste
- Shema Israel

## Setup Instructions

### 1. PayPal Configuration

To enable payments, you need to set up a PayPal account:

1. Go to [PayPal Developer Dashboard](https://developer.paypal.com/dashboard/)
2. Create a Business account (or use existing)
3. In the Apps section, create an app to get your **Client ID**
4. Replace `YOUR_PAYPAL_CLIENT_ID` in `index.html` with your actual Client ID:

```html
<script src="https://www.paypal.com/sdk/js?client-id=YOUR_PAYPAL_CLIENT_ID&currency=USD"></script>
```

### 2. Deploy to GitHub Pages

```bash
git add .
git commit -m "Initial music store commit"
git push origin main
```

Enable GitHub Pages in your repository settings (Settings → Pages → Source: main branch)

### 3. Custom Domain (Optional)

To use a custom domain:
1. Update the `CNAME` file with your domain
2. Configure DNS settings to point to GitHub Pages
3. Update PayPal return URLs in sandbox/production settings

## Project Structure

```
nicu_chereji_music/
├── index.html          # Main HTML structure
├── style.css          # All styling (responsive, animations)
├── app.js             # JavaScript (PayPal, audio, interactions)
├── ncmusic/           # Audio files directory
│   ├── Bagă sabia in teaca...mp3
│   ├── Cine-i mai puternic.mp3
│   ├── Isus inca are răbdare...mp3
│   ├── Iubire fara de margini.mp3
│   ├── Daca Mama-ti Mai Traieste.mp3
│   └── Shema Israel...mp3
└── README.md
```

## Adding New Content

### Adding More Singles

In `index.html`, add a new card in the `.albums-grid`:

```html
<div class="album-card">
  <div class="album-cover">
    <div class="cover-placeholder" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)"></div>
  </div>
  <div class="album-info">
    <h3>New Track Title</h3>
    <p class="album-type">Single</p>
    <p class="price">$9.99</p>
    <div class="album-actions">
      <button class="btn btn-secondary btn-listen" onclick="playPreview('ncmusic/track-filename.mp3')">
        ▶ Preview
      </button>
      <button class="btn btn-primary" onclick="buyTrack('New Track Title')">
        Buy
      </button>
    </div>
  </div>
</div>
```

### Adding Full Albums

Look for the commented section in `index.html` showing album structure. Also check `app.js` for the commented `loadAlbumsFromData()` function which shows how to:

- Load multiple albums dynamically
- Organize tracks within albums
- Create album bundles
- Implement special pricing

### Creating Album Art Placeholders

The current design uses gradient placeholders. To add custom album artwork:

1. Save your image to the project directory: `images/album-1.jpg`
2. Update the cover placeholder:

```html
<div class="cover-placeholder" style="background-image: url('images/album-1.jpg'); background-size: cover; background-position: center;"></div>
```

## Customization Guide

### Colors

Edit CSS variables in `style.css`:

```css
:root {
  --primary: #2d3e50;        /* Main dark color */
  --secondary: #3498db;      /* Button primary */
  --accent: #e74c3c;         /* Price/highlight color */
  --accent-light: #ecf0f1;   /* Light background */
  --text-dark: #2c3e50;
  --text-light: #7f8c8d;
}
```

### Typography

Adjust font sizes and families in the CSS sections for headers, body text, etc.

### Gradients

Each album card can have a unique gradient. Choose from:
- `linear-gradient(135deg, #667eea 0%, #764ba2 100%)` (Purple)
- `linear-gradient(135deg, #f093fb 0%, #f5576c 100%)` (Pink-Red)
- `linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)` (Blue)
- `linear-gradient(135deg, #fa709a 0%, #fee140 100%)` (Coral-Yellow)
- Create your own at [Gradient Generator](https://cssgradient.io/)

## Payment Processing Notes

### Sandbox Testing

Before going live:

1. Use PayPal Sandbox: [sandbox.paypal.com](https://sandbox.paypal.com)
2. Create sandbox buyer/seller accounts
3. Test full payment flow
4. Verify all transaction data

### Production Checklist

- [ ] Replace sandbox Client ID with production Client ID
- [ ] Test with real payment
- [ ] Set up webhook handling for order confirmation emails
- [ ] Configure download link delivery system (commented in `app.js`)
- [ ] Enable HTTPS (GitHub Pages provides this automatically)
- [ ] Update PayPal return/cancel URLs

### COMMENTED: Backend Integration

See `app.js` for commented code showing how to:

```javascript
// Send order data to backend for processing
fetch('/api/process-order', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    orderId: orderData.id,
    itemName: itemName,
    amount: amount,
    customerEmail: orderData.payer.email_address
  })
})
```

This could connect to:
- Email service (SendGrid, Mailgun) for confirmations
- Database for order tracking
- File server for download delivery

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized CSS with minimal animations
- Lazy-loaded PayPal SDK (only when needed)
- Efficient grid layout
- File size: ~35KB (HTML/CSS/JS combined)

## Future Enhancements

Commented in code:

1. **Dynamic Album Loading** (`loadAlbumsFromData()`)
   - Load albums from JSON data
   - Support full albums with track listings

2. **Bundle Pricing** (`createBundleCheckout()`)
   - Create special promotions
   - Discounted packages

3. **Backend Integration**
   - Order processing
   - Email notifications
   - Download delivery
   - Customer database

4. **Advanced Features**
   - Email signup for new releases
   - Social media integration
   - Analytics
   - Wishlist functionality

## Troubleshooting

### PayPal not showing up
- Verify Client ID is correct and valid
- Check browser console for errors
- Ensure HTTPS is enabled (GitHub Pages provides this)

### Audio won't play
- Check file paths are correct
- Verify mp3 files are in `ncmusic/` directory
- Check browser console for CORS errors

### Styling issues
- Clear browser cache (Cmd+Shift+R or Ctrl+Shift+R)
- Check that `style.css` is loading
- Verify CSS variable overrides aren't conflicting

## Support

For issues or questions:
1. Check browser console for error messages
2. Review the commented code sections for implementation guides
3. Refer to PayPal documentation: https://developer.paypal.com/docs/

## License

© 2026 Nicu Chereji. All rights reserved.

---

**Built with clean, unique design for independent artists. Ready to scale from GitHub Pages to your own domain.**
