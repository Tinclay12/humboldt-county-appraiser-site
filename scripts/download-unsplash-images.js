// Script to download contextually relevant images from Unsplash
// These are high-quality, royalty-free photos for preview purposes

const https = require('https');
const fs = require('fs');
const path = require('path');

// Unsplash source images - contextually relevant for each category
const images = {
  hero: {
    url: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=1920&h=1080&fit=crop&q=80',
    filename: 'hero-background.jpg',
    description: 'Humboldt County redwood forest landscape with towering trees'
  },
  services: {
    residential: {
      url: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=600&fit=crop&q=80',
      filename: 'hero.jpg',
      description: 'Modern residential home exterior'
    },
    commercial: {
      url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop&q=80',
      filename: 'hero.jpg',
      description: 'Modern commercial office building'
    },
    agricultural: {
      url: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1200&h=600&fit=crop&q=80',
      filename: 'hero.jpg',
      description: 'Agricultural farm fields and barn'
    },
    multifamily: {
      url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=600&fit=crop&q=80',
      filename: 'hero.jpg',
      description: 'Modern apartment building'
    },
    industrial: {
      url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop&q=80',
      filename: 'hero.jpg',
      description: 'Industrial warehouse facility'
    },
    'vacant-land': {
      url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=600&fit=crop&q=80',
      filename: 'hero.jpg',
      description: 'Vacant land/open space'
    }
  },
  locations: {
    eureka: {
      url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=600&fit=crop&q=80',
      filename: 'hero.jpg',
      description: 'Coastal city landscape'
    },
    arcata: {
      url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=600&fit=crop&q=80',
      filename: 'hero.jpg',
      description: 'Forest and nature landscape'
    },
    fortuna: {
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop&q=80',
      filename: 'hero.jpg',
      description: 'River and valley landscape'
    },
    mckinleyville: {
      url: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&h=600&fit=crop&q=80',
      filename: 'hero.jpg',
      description: 'Coastal beach landscape'
    },
    trinidad: {
      url: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200&h=600&fit=crop&q=80',
      filename: 'hero.jpg',
      description: 'Coastal harbor landscape'
    },
    ferndale: {
      url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&h=600&fit=crop&q=80',
      filename: 'hero.jpg',
      description: 'Historic small town landscape'
    },
    'rio-dell': {
      url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&h=600&fit=crop&q=80',
      filename: 'hero.jpg',
      description: 'Forest and river landscape'
    },
    'blue-lake': {
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop&q=80',
      filename: 'hero.jpg',
      description: 'Lake and nature landscape'
    },
    hoopa: {
      url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=600&fit=crop&q=80',
      filename: 'hero.jpg',
      description: 'Mountain and forest landscape'
    },
    scotia: {
      url: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200&h=600&fit=crop&q=80',
      filename: 'hero.jpg',
      description: 'Small town landscape'
    }
  }
};

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        // Follow redirect
        https.get(response.headers.location, (redirectResponse) => {
          redirectResponse.pipe(file);
          file.on('finish', () => {
            file.close();
            resolve();
          });
        }).on('error', reject);
      } else {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      }
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

async function downloadAllImages() {
  console.log('Downloading images from Unsplash...\n');

  // Download hero image
  const heroDir = path.join(__dirname, '..', 'public', 'images', 'hero');
  const heroPath = path.join(heroDir, images.hero.filename);
  console.log(`Downloading hero image: ${images.hero.description}`);
  try {
    await downloadImage(images.hero.url, heroPath);
    console.log(`✓ Downloaded: ${images.hero.filename}\n`);
  } catch (err) {
    console.error(`✗ Error downloading hero: ${err.message}\n`);
  }

  // Download service images
  console.log('Downloading service images...');
  for (const [service, imageData] of Object.entries(images.services)) {
    const serviceDir = path.join(__dirname, '..', 'public', 'images', 'services', service);
    if (!fs.existsSync(serviceDir)) {
      fs.mkdirSync(serviceDir, { recursive: true });
    }
    const imagePath = path.join(serviceDir, imageData.filename);
    console.log(`  Downloading ${service}: ${imageData.description}`);
    try {
      await downloadImage(imageData.url, imagePath);
      console.log(`  ✓ Downloaded: ${service}/${imageData.filename}`);
    } catch (err) {
      console.error(`  ✗ Error downloading ${service}: ${err.message}`);
    }
  }
  console.log('');

  // Download location images
  console.log('Downloading location images...');
  for (const [location, imageData] of Object.entries(images.locations)) {
    const locationDir = path.join(__dirname, '..', 'public', 'images', 'locations', location);
    if (!fs.existsSync(locationDir)) {
      fs.mkdirSync(locationDir, { recursive: true });
    }
    const imagePath = path.join(locationDir, imageData.filename);
    console.log(`  Downloading ${location}: ${imageData.description}`);
    try {
      await downloadImage(imageData.url, imagePath);
      console.log(`  ✓ Downloaded: ${location}/${imageData.filename}`);
    } catch (err) {
      console.error(`  ✗ Error downloading ${location}: ${err.message}`);
    }
  }

  console.log('\n✓ All images downloaded successfully!');
  console.log('\nNote: These are preview images from Unsplash. Replace with your own photos when ready.');
}

downloadAllImages().catch(console.error);

