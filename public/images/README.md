# Images Directory

This directory contains all images for the Humboldt County Appraiser website.

## Generated Placeholder Images

All images are currently SVG placeholders that match the premium dark theme with gold accents. These are contextually relevant placeholders that can be replaced with actual photos later.

### Structure

- **hero/** - Hero background images for the homepage
- **services/** - Service-specific images (one for each service type)
- **locations/** - Location-specific images (one for each city)
- **patterns/** - Geometric patterns and overlay graphics

### Replacing Placeholders

When you're ready to replace the SVG placeholders with actual photos:

1. Maintain the same file names (e.g., `hero-background.jpg` or `hero-background.webp`)
2. Recommended formats: WebP (best compression) or JPG
3. Recommended sizes:
   - Hero images: 1920x1080 or larger (16:9 aspect ratio)
   - Service/Location images: 1200x600 (2:1 aspect ratio)

The Next.js Image component will automatically optimize these images when you replace the SVGs.

### Current Placeholders

All placeholder images use:
- Dark navy background (#0a1628 to #1a2332 gradient)
- Gold accents (#d4af37, #f4d03f)
- Contextually relevant silhouettes/icons
- Subtle opacity for overlay compatibility

These work seamlessly with the dark overlay system and maintain the premium aesthetic until real photos are added.

