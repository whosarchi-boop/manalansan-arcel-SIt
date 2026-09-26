/**
 * Helper to download an image file in browser
 */
import confetti from 'canvas-confetti';

export async function downloadCatImage(
  imageUrl: string,
  filename: string,
  options?: {
    format?: 'original' | 'wallpaper-desktop' | 'wallpaper-mobile' | 'avatar';
  }
) {
  try {
    // Trigger celebratory confetti
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#f59e0b', '#fbbf24', '#fcd34d', '#f43f5e', '#a855f7']
    });

    // If original format requested or no format options, download directly
    if (!options?.format || options.format === 'original') {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `${filename}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setTimeout(() => URL.revokeObjectURL(blobUrl), 2000);
      return;
    }

    // Process with custom dimensions using HTML Canvas
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageUrl;

    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
    });

    let targetWidth = img.width;
    let targetHeight = img.height;

    if (options.format === 'wallpaper-desktop') {
      targetWidth = 3840;
      targetHeight = 2160;
    } else if (options.format === 'wallpaper-mobile') {
      targetWidth = 1080;
      targetHeight = 1920;
    } else if (options.format === 'avatar') {
      targetWidth = 1024;
      targetHeight = 1024;
    }

    const canvas = document.createElement('canvas');
    canvas.width = targetWidth;
    canvas.height = targetHeight;
    const ctx = canvas.getContext('2d');

    if (!ctx) throw new Error('Could not get canvas context');

    // Fill background
    ctx.fillStyle = '#1c1917';
    ctx.fillRect(0, 0, targetWidth, targetHeight);

    // Calculate aspect ratio crop (cover)
    const scale = Math.max(targetWidth / img.width, targetHeight / img.height);
    const scaledWidth = img.width * scale;
    const scaledHeight = img.height * scale;
    const offsetX = (targetWidth - scaledWidth) / 2;
    const offsetY = (targetHeight - scaledHeight) / 2;

    ctx.drawImage(img, offsetX, offsetY, scaledWidth, scaledHeight);

    // Convert canvas to blob
    canvas.toBlob((blob) => {
      if (!blob) return;
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `${filename}-${options.format}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(blobUrl), 2000);
    }, 'image/jpeg', 0.95);

  } catch (error) {
    console.error('Failed to download image:', error);
    // Fallback: direct window open/download
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `${filename}.jpg`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
