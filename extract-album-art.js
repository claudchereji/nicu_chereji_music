const fs = require('fs');
const path = require('path');
const { parseFile } = require('music-metadata');

const MUSIC_DIR = './ncmusic';
const CACHE_DIR = './album-art-cache';
const MANIFEST_FILE = './album-art-manifest.json';

// Create cache directory if it doesn't exist
if (!fs.existsSync(CACHE_DIR)) {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
}

async function extractAlbumArt() {
  const files = fs.readdirSync(MUSIC_DIR).filter(f => f.endsWith('.mp3'));
  const manifest = {};
  
  console.log(`Processing ${files.length} MP3 files...`);
  
  for (const file of files) {
    const filePath = path.join(MUSIC_DIR, file);
    const fileName = file.replace('.mp3', '');
    
    try {
      const metadata = await parseFile(filePath);
      
      if (metadata.common && metadata.common.picture && metadata.common.picture.length > 0) {
        const picture = metadata.common.picture[0];
        const imageBuffer = picture.data;
        const imagePath = path.join(CACHE_DIR, `${fileName}.jpg`);
        
        fs.writeFileSync(imagePath, imageBuffer);
        manifest[fileName] = `album-art-cache/${fileName}.jpg`;
        console.log(`✓ Extracted: ${fileName}`);
      } else {
        manifest[fileName] = null;
        console.log(`  No art: ${fileName}`);
      }
    } catch (error) {
      console.error(`✗ Error processing ${file}:`, error.message);
      manifest[fileName] = null;
    }
  }
  
  // Save manifest
  fs.writeFileSync(MANIFEST_FILE, JSON.stringify(manifest, null, 2));
  
  const hasArt = Object.values(manifest).filter(v => v !== null).length;
  console.log(`\n✓ Complete! ${hasArt}/${files.length} songs have album art`);
}

extractAlbumArt().catch(console.error);
