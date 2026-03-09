// Track mapping for downloads (individual singles)
const TRACKS_MAP = {
  'Bagă sabia in teaca': 'ncmusic/Bagă sabia in teaca ⧸ versiune originală . - Nicu Chereji.mp3',
  'Cine-i mai puternic': 'ncmusic/Cine-i mai puternic.mp3',
  'Isus inca are răbdare': 'ncmusic/Isus  inca are răbdare - Nicu Chereji.mp3',
  'Iubire fara de margini': 'ncmusic/Iubire fara de margini.mp3',
  'Daca Mama-ti Mai Traieste': 'ncmusic/Nicu Chereji - Daca Mama-ti Mai Traieste.mp3',
  'Shema Israel': 'ncmusic/Shema Israel , Nicu Chereji.mp3'
};

const ALL_TRACKS = [
  'Bagă sabia in teaca',
  'Cine-i mai puternic',
  'Isus inca are răbdare',
  'Iubire fara de margini',
  'Daca Mama-ti Mai Traieste',
  'Shema Israel'
];

// ALBUM CONFIGURATION
// Format: { albumName: { tracks: [...], directory: 'path' } }
const ALBUMS = {
  'Singles': {
    tracks: [
      { number: '01', name: 'Bagă sabia in teaca', path: 'ncmusic/Bagă sabia in teaca ⧸ versiune originală . - Nicu Chereji.mp3' },
      { number: '02', name: 'Cine-i mai puternic', path: 'ncmusic/Cine-i mai puternic.mp3' },
      { number: '03', name: 'Isus inca are răbdare', path: 'ncmusic/Isus  inca are răbdare - Nicu Chereji.mp3' },
      { number: '04', name: 'Iubire fara de margini', path: 'ncmusic/Iubire fara de margini.mp3' },
      { number: '05', name: 'Daca Mama-ti Mai Traieste', path: 'ncmusic/Nicu Chereji - Daca Mama-ti Mai Traieste.mp3' },
      { number: '06', name: 'Shema Israel', path: 'ncmusic/Shema Israel , Nicu Chereji.mp3' }
    ],
    price: 11.94
  }
  // Add more albums here:
  // 'Album Name': {
  //   tracks: [
  //     { number: '01', name: 'Track Name', path: 'albums/Album Name/01 - Track Name.mp3' },
  //     ...
  //   ],
  //   price: 9.99
  // }
};

let currentPopupAlbum = null;
let popupAudio = null;
let popupIsPlaying = false;
let popupUpdateTimeInterval = null;

// PayPal Configuration
// NOTE: Replace 'YOUR_PAYPAL_CLIENT_ID' in index.html with your actual PayPal Client ID
// Get your Client ID from: https://developer.paypal.com/dashboard/

const PAYPAL_CLIENT_ID = 'YOUR_PAYPAL_CLIENT_ID';
const SINGLE_PRICE = 1.99;
const COMPLETE_COLLECTION_PRICE = 11.94; // 6 tracks × $1.99

let currentAudio = null;
let currentButton = null;
let isPlaying = false;
let updateTimeInterval = null;

/**
 * Play preview - shows mini player on the card
 * @param {HTMLElement} button - The preview button that was clicked
 * @param {string} trackPath - Path to the audio file
 */
function playPreview(button, trackPath) {
  // If clicking the same track's button
  if (currentButton === button && isPlaying) {
    togglePlayPause(button.parentElement.nextElementSibling.querySelector('.play-pause-btn'));
    return;
  }

  // Stop any existing audio
  if (currentAudio) {
    currentAudio.pause();
  }
  if (currentButton && currentButton !== button) {
    hideMiniPlayer(currentButton);
  }

  // Create or get audio element
  if (!currentAudio) {
    currentAudio = new Audio();
    currentAudio.addEventListener('play', onAudioPlay);
    currentAudio.addEventListener('pause', onAudioPause);
    currentAudio.addEventListener('timeupdate', onTimeUpdate);
    currentAudio.addEventListener('ended', onAudioEnded);
  }

  currentButton = button;
  currentAudio.src = trackPath;

  // Show mini player
  showMiniPlayer(button);

  // Play the audio
  currentAudio.play();
  isPlaying = true;
}

/**
 * Toggle play/pause from mini player
 * @param {HTMLElement} playBtn - The play/pause button
 */
function togglePlayPause(playBtn) {
  if (!currentAudio) return;

  if (currentAudio.paused) {
    currentAudio.play();
  } else {
    currentAudio.pause();
  }
}

/**
 * Seek through track
 * @param {HTMLElement} slider - The range input slider
 */
function seekTrack(slider) {
  if (!currentAudio) return;

  const percentage = parseFloat(slider.value);
  const newTime = (percentage / 100) * currentAudio.duration;
  currentAudio.currentTime = newTime;
}

/**
 * Update slider and time display as track plays
 */
function onTimeUpdate() {
  if (!currentButton || !currentAudio || currentAudio.duration === 0) return;

  const miniPlayer = currentButton.parentElement.nextElementSibling;
  if (!miniPlayer || !miniPlayer.classList.contains('mini-player')) return;

  const slider = miniPlayer.querySelector('.player-slider');
  const timeDisplay = miniPlayer.querySelector('.time-display');

  // Update slider position
  const percentage = (currentAudio.currentTime / currentAudio.duration) * 100;
  slider.value = percentage;

  // Update time display
  timeDisplay.textContent = formatTime(currentAudio.currentTime);
}

/**
 * Handle play event
 */
function onAudioPlay() {
  if (!currentButton) return;

  isPlaying = true;
  const miniPlayer = currentButton.parentElement.nextElementSibling;
  const playBtn = miniPlayer.querySelector('.play-pause-btn');
  playBtn.textContent = '⏸';

  // Start updating time
  if (updateTimeInterval) clearInterval(updateTimeInterval);
  updateTimeInterval = setInterval(onTimeUpdate, 100);
}

/**
 * Handle pause event
 */
function onAudioPause() {
  if (!currentButton) return;

  isPlaying = false;
  const miniPlayer = currentButton.parentElement.nextElementSibling;
  const playBtn = miniPlayer.querySelector('.play-pause-btn');
  playBtn.textContent = '▶';

  // Stop updating time
  if (updateTimeInterval) {
    clearInterval(updateTimeInterval);
    updateTimeInterval = null;
  }
}

/**
 * Handle audio end
 */
function onAudioEnded() {
  if (!currentButton) return;

  isPlaying = false;
  const miniPlayer = currentButton.parentElement.nextElementSibling;
  const playBtn = miniPlayer.querySelector('.play-pause-btn');
  const slider = miniPlayer.querySelector('.player-slider');

  playBtn.textContent = '▶';
  slider.value = 0;

  // Stop updating time
  if (updateTimeInterval) {
    clearInterval(updateTimeInterval);
    updateTimeInterval = null;
  }
}

/**
 * Show mini player
 * @param {HTMLElement} button - The preview button
 */
function showMiniPlayer(button) {
  const miniPlayer = button.parentElement.nextElementSibling;
  if (miniPlayer && miniPlayer.classList.contains('mini-player')) {
    miniPlayer.style.display = 'flex';
  }
}

/**
 * Hide mini player
 * @param {HTMLElement} button - The preview button
 */
function hideMiniPlayer(button) {
  const miniPlayer = button.parentElement.nextElementSibling;
  if (miniPlayer && miniPlayer.classList.contains('mini-player')) {
    miniPlayer.style.display = 'none';
  }
}

/**
 * Format time as MM:SS
 * @param {number} seconds - Time in seconds
 * @returns {string} Formatted time string
 */
function formatTime(seconds) {
  if (!seconds || isNaN(seconds)) return '0:00';

  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Handle individual track purchase
 * @param {string} trackName - Name of the track
 * @param {number} price - Price of the track
 */
function buyTrack(trackName, price = SINGLE_PRICE) {
  const description = `${trackName} de Nicu Chereji`;
  initializePayPalCheckout(price, description, trackName);
}

/**
 * Handle "Buy All" complete collection purchase
 */
function buyAll() {
  const description = 'Colecția Completă de Muzică - Toate 6 cântecele de Nicu Chereji';
  initializePayPalCheckout(COMPLETE_COLLECTION_PRICE, description, 'Colecția Completă');
}

/**
 * Initialize PayPal Checkout
 * @param {number} amount - Amount in USD
 * @param {string} description - Description of purchase
 * @param {string} itemName - Name of item being purchased
 */
function initializePayPalCheckout(amount, description, itemName) {
  // Check if PayPal SDK is loaded
  if (typeof paypal === 'undefined') {
    alert('⚠️ PayPal nu este configurat. Te rog să înlocuiești YOUR_PAYPAL_CLIENT_ID cu ID-ul tău real în fișierul HTML.');
    console.log('Pentru a configura PayPal:');
    console.log('1. Mergi la https://developer.paypal.com/dashboard/');
    console.log('2. Creează un cont de afaceri');
    console.log('3. Obține ID-ul tău de client');
    console.log('4. Înlocuiește YOUR_PAYPAL_CLIENT_ID în index.html');
    return;
  }

  const container = document.getElementById('paypal-button-container');

  // Clear any existing buttons
  container.innerHTML = '';

  // Create new PayPal buttons
  paypal.Buttons({
    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{
          reference_id: itemName.replace(/\s+/g, '-').toLowerCase(),
          amount: {
            currency_code: 'USD',
            value: amount.toFixed(2),
            breakdown: {
              item_total: {
                currency_code: 'USD',
                value: amount.toFixed(2)
              }
            }
          },
          items: [{
            name: itemName,
            description: description,
            sku: itemName.replace(/\s+/g, '-').toLowerCase(),
            unit_amount: {
              currency_code: 'USD',
              value: amount.toFixed(2)
            },
            quantity: '1'
          }]
        }]
      });
    },
    onApprove: function(data, actions) {
      return actions.order.capture().then(function(orderData) {
        console.log('Purchase successful!', orderData);
        showPurchaseNotification(itemName, amount, orderData.id);

        // COMMENTED: Logic for processing order and sending download link
        /*
        // Send order data to your backend/email service
        fetch('/api/process-order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            orderId: orderData.id,
            itemName: itemName,
            amount: amount,
            customerEmail: orderData.payer.email_address,
            downloadLink: generateDownloadLink(itemName)
          })
        })
        .then(response => response.json())
        .then(data => {
          // Handle response - could be download link, confirmation, etc.
          console.log('Order processed:', data);
        })
        .catch(error => console.error('Error:', error));
        */
      });
    },
    onError: function(err) {
      console.error('Eroare la plată:', err);
      alert('A apărut o eroare în timpul plății. Te rog încearcă din nou.');
    },
    onCancel: function(data) {
      console.log('Plată anulată:', data);
      container.style.display = 'none';
    }
  }).render('#paypal-button-container');

  // Show the payment container
  container.style.display = 'block';

  // Scroll to payment section
  setTimeout(() => {
    container.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 100);
}

/**
 * Show purchase notification with download link
 * @param {string} itemName - Name of purchased item
 * @param {number} amount - Amount paid
 * @param {string} orderId - PayPal order ID
 */
function showPurchaseNotification(itemName, amount, orderId) {
  const modal = document.getElementById('purchase-notification');
  const downloadLink = document.getElementById('download-link');
  const orderIdSpan = document.getElementById('order-id');
  const itemNameSpan = document.getElementById('purchase-item-name');

  // Set item name
  itemNameSpan.textContent = itemName;

  // Generate download link
  const downloadUrl = generateDownloadLink(itemName);
  downloadLink.href = downloadUrl;

  // Set order ID (truncate for display)
  orderIdSpan.textContent = orderId.substring(0, 12) + '...';

  // Show modal
  modal.style.display = 'flex';

  // Auto-download for single tracks (trigger download)
  if (itemName !== 'Colecția Completă') {
    // Simulate clicking the download link after a short delay
    setTimeout(() => {
      downloadLink.click();
    }, 500);
  }

  // Prevent scrolling while modal is open
  document.body.style.overflow = 'hidden';
}

/**
 * Generate download URL for a track or all tracks
 * @param {string} itemName - Name of item (track name or "Colecția Completă")
 * @returns {string} Download URL
 */
function generateDownloadLink(itemName) {
  if (itemName === 'Colecția Completă') {
    // For complete collection, create a download URL that points to a zip
    // Since this is static hosting, we'll create a data URL with instructions
    // In production, this would be a real zip file
    return 'data:text/plain;charset=utf-8,' + encodeURIComponent(
      'Colecția Completă - Descarcă Toate Cântecele\n\n' +
      'Te rog să descarci fiecare cântec individual:\n\n' +
      ALL_TRACKS.map((track, idx) => `${idx + 1}. ${track}\n   ${window.location.origin}/${TRACKS_MAP[track]}`).join('\n\n')
    );
  } else {
    // Return direct link to the MP3 file
    if (TRACKS_MAP[itemName]) {
      return TRACKS_MAP[itemName];
    }
    return '#';
  }
}

/**
 * Close purchase notification modal
 */
function closePurchaseModal() {
  const modal = document.getElementById('purchase-notification');
  modal.style.display = 'none';
  
  // Re-enable scrolling
  document.body.style.overflow = 'auto';
}

/**
 * Open track list popup for an album
 * @param {string} albumName - Name of the album to preview
 */
function openTrackListPopup(albumName) {
  const album = ALBUMS[albumName];
  if (!album) {
    console.error(`Album "${albumName}" not found in ALBUMS config`);
    return;
  }

  currentPopupAlbum = albumName;
  const popup = document.getElementById('track-list-popup');
  const albumTitle = document.getElementById('popup-album-title');
  const trackCount = document.getElementById('popup-track-count');
  const trackListContainer = document.getElementById('track-list-container');

  // Set popup header
  albumTitle.textContent = albumName;
  trackCount.textContent = `${album.tracks.length} cântec${album.tracks.length !== 1 ? 'e' : ''}`;

  // Clear and rebuild track list
  trackListContainer.innerHTML = '';
  album.tracks.forEach((track, index) => {
    const trackElement = document.createElement('div');
    trackElement.className = 'track-item';
    trackElement.innerHTML = `
      <button class="track-play-btn" onclick="playPopupTrack(${index}, '${albumName}')">▶</button>
      <div class="track-info">
        <span class="track-number">${track.number}</span>
        <span class="track-name">${track.name}</span>
      </div>
    `;
    trackListContainer.appendChild(trackElement);
  });

  // Show popup with fade-in animation
  popup.style.display = 'flex';
  popup.style.opacity = '0';
  popup.offsetHeight; // Trigger reflow
  popup.style.transition = 'opacity 0.3s ease';
  popup.style.opacity = '1';
}

/**
 * Close track list popup
 */
function closeTrackListPopup() {
  const popup = document.getElementById('track-list-popup');
  const playerDiv = document.getElementById('current-track-player');

  // Fade out animation
  popup.style.opacity = '0';
  setTimeout(() => {
    popup.style.display = 'none';
    popup.style.opacity = '1'; // Reset for next opening
  }, 300);

  // Stop popup audio if playing
  if (popupAudio) {
    popupAudio.pause();
    popupAudio.currentTime = 0;
  }
  
  // Hide player
  playerDiv.style.display = 'none';
  
  // Clear state
  currentPopupAlbum = null;
  popupIsPlaying = false;
  if (popupUpdateTimeInterval) {
    clearInterval(popupUpdateTimeInterval);
    popupUpdateTimeInterval = null;
  }
}

/**
 * Play a specific track from popup
 * @param {number} trackIndex - Index of track in album's track array
 * @param {string} albumName - Name of the album
 */
function playPopupTrack(trackIndex, albumName) {
  const album = ALBUMS[albumName];
  if (!album || !album.tracks[trackIndex]) {
    console.error('Invalid track index or album');
    return;
  }

  const track = album.tracks[trackIndex];
  const playerDiv = document.getElementById('current-track-player');
  const playBtn = document.getElementById('popup-play-btn');
  const slider = document.getElementById('popup-slider');
  const timeDisplay = document.getElementById('popup-time');

  // Stop previous audio if any
  if (popupAudio) {
    popupAudio.pause();
  }

  // Create new audio element for popup
  if (!popupAudio) {
    popupAudio = new Audio();
    popupAudio.addEventListener('play', onPopupAudioPlay);
    popupAudio.addEventListener('pause', onPopupAudioPause);
    popupAudio.addEventListener('timeupdate', onPopupTimeUpdate);
    popupAudio.addEventListener('ended', onPopupAudioEnded);
    popupAudio.addEventListener('loadedmetadata', onPopupAudioLoaded);
  }

  // Load and play track
  popupAudio.src = track.path;
  popupAudio.play();
  popupIsPlaying = true;

  // Update player UI
  playBtn.textContent = '⏸';
  timeDisplay.textContent = '0:00';
  slider.value = 0;

  // Show player
  playerDiv.style.display = 'flex';

  // Start time update interval
  if (popupUpdateTimeInterval) clearInterval(popupUpdateTimeInterval);
  popupUpdateTimeInterval = setInterval(onPopupTimeUpdate, 100);
}

/**
 * Handle popup audio play event
 */
function onPopupAudioPlay() {
  const playBtn = document.getElementById('popup-play-btn');
  playBtn.textContent = '⏸';
  popupIsPlaying = true;

  if (popupUpdateTimeInterval) clearInterval(popupUpdateTimeInterval);
  popupUpdateTimeInterval = setInterval(onPopupTimeUpdate, 100);
}

/**
 * Handle popup audio pause event
 */
function onPopupAudioPause() {
  const playBtn = document.getElementById('popup-play-btn');
  playBtn.textContent = '▶';
  popupIsPlaying = false;

  if (popupUpdateTimeInterval) {
    clearInterval(popupUpdateTimeInterval);
    popupUpdateTimeInterval = null;
  }
}

/**
 * Update popup slider and time display
 */
function onPopupTimeUpdate() {
  if (!popupAudio || popupAudio.duration === 0) return;

  const slider = document.getElementById('popup-slider');
  const timeDisplay = document.getElementById('popup-time');

  // Update slider position
  const percentage = (popupAudio.currentTime / popupAudio.duration) * 100;
  slider.value = percentage;

  // Update time display
  timeDisplay.textContent = formatTime(popupAudio.currentTime);
}

/**
 * Handle popup audio loaded (for duration)
 */
function onPopupAudioLoaded() {
  if (!popupAudio) return;
  
  // Duration is now available
  // Could update UI to show total duration if desired
}

/**
 * Handle popup audio ended
 */
function onPopupAudioEnded() {
  const playBtn = document.getElementById('popup-play-btn');
  const slider = document.getElementById('popup-slider');
  
  playBtn.textContent = '▶';
  slider.value = 0;
  popupIsPlaying = false;

  if (popupUpdateTimeInterval) {
    clearInterval(popupUpdateTimeInterval);
    popupUpdateTimeInterval = null;
  }
}

/**
 * Toggle popup audio play/pause
 */
function togglePopupPlayPause() {
  if (!popupAudio) return;

  if (popupAudio.paused) {
    popupAudio.play();
  } else {
    popupAudio.pause();
  }
}

/**
 * Seek popup track
 * @param {HTMLElement} slider - The range slider element
 */
function seekPopupTrack(slider) {
  if (!popupAudio) return;

  const percentage = parseFloat(slider.value);
  const newTime = (percentage / 100) * popupAudio.duration;
  popupAudio.currentTime = newTime;
}

/**
 * Initialize on page load
 */
document.addEventListener('DOMContentLoaded', function() {
  console.log('🎵 Magazinul de Muzică Nicu Chereji a fost încărcat');

  // Check if PayPal is configured
  if (PAYPAL_CLIENT_ID === 'YOUR_PAYPAL_CLIENT_ID') {
    console.warn('⚠️ PayPal nu este configurat. Actualizează YOUR_PAYPAL_CLIENT_ID în index.html');
  }

  // Add smooth scroll behavior for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Close mini players when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.album-card')) {
      // Optional: auto-pause when clicking outside
      // Uncomment if you want this behavior:
      // if (currentAudio && !currentAudio.paused) {
      //   currentAudio.pause();
      // }
    }
  });

  // Setup popup slider event listeners
  const popupSlider = document.getElementById('popup-slider');
  if (popupSlider) {
    popupSlider.addEventListener('input', function() {
      seekPopupTrack(this);
    });
    popupSlider.addEventListener('change', function() {
      seekPopupTrack(this);
    });
  }

  // Setup popup play button
  const popupPlayBtn = document.getElementById('popup-play-btn');
  if (popupPlayBtn) {
    popupPlayBtn.addEventListener('click', togglePopupPlayPause);
  }
});

/**
 * COMMENTED: Future functionality for album management
 *
 * This function shows how albums can be managed dynamically
 * as you add more full albums (with multiple tracks) to your store.
 *
 * Uncomment and use when you have album data to load:
 */
/*
const albumsData = [
  {
    id: 'album-1',
    title: 'Album Title',
    type: 'Full Album',
    trackCount: 12,
    price: 9.99,
    coverGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    preview: 'albums/album-1/preview.mp3',
    tracks: [
      { name: 'Track 1', path: 'albums/album-1/track-1.mp3' },
      { name: 'Track 2', path: 'albums/album-1/track-2.mp3' },
      // Add more tracks
    ]
  },
  // Add more albums as needed
];

function loadAlbumsFromData() {
  const grid = document.querySelector('.albums-grid');

  // Keep the buy-all card at the top
  const buyAllCard = grid.querySelector('.buy-all-card');
  grid.innerHTML = '';
  grid.appendChild(buyAllCard);

  albumsData.forEach(album => {
    const card = document.createElement('div');
    card.className = 'album-card';
    card.innerHTML = `
      <div class="album-cover">
        <div class="cover-placeholder" style="background: ${album.coverGradient}"></div>
      </div>
      <div class="album-info">
        <h3>${album.title}</h3>
        <p class="album-type">${album.type}</p>
        ${album.trackCount ? `<p class="album-tracks">${album.trackCount} tracks</p>` : ''}
        <p class="price">$${album.price.toFixed(2)}</p>
        <div class="album-actions">
          <button class="btn btn-secondary btn-listen" onclick="playPreview(this, '${album.preview}')">
            ▶ Preview
          </button>
          <button class="btn btn-primary" onclick="buyTrack('${album.title}', ${album.price})">
            Buy Album
          </button>
        </div>
        <div class="mini-player" style="display: none;">
          <button class="play-pause-btn" onclick="togglePlayPause(this)">▶</button>
          <input type="range" class="player-slider" min="0" max="100" value="0" onchange="seekTrack(this)" oninput="seekTrack(this)">
          <span class="time-display">0:00</span>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}
*/

/**
 * COMMENTED: Future functionality for batch/bundle pricing
 *
 * Use this to create special promotions or album bundles:
 */
/*
const bundles = [
  {
    name: 'Starter Pack',
    items: ['Track 1', 'Track 2', 'Track 3'],
    price: 3.99
  },
  {
    name: 'Collector\'s Edition',
    items: ['All Current Tracks'],
    price: 11.94
  }
];

function createBundleCheckout(bundleName) {
  const bundle = bundles.find(b => b.name === bundleName);
  if (bundle) {
    initializePayPalCheckout(bundle.price, `${bundleName} - ${bundle.items.join(', ')}`, bundleName);
  }
}
*/
