# Video Background Fix Documentation

## Problem
The YouTube video background in the Hero section was displaying with black bars (letterboxing) on the sides, which occurred when the container aspect ratio didn't match the video's 16:9 aspect ratio.

## Root Cause
- YouTube videos are typically in 16:9 aspect ratio
- The original implementation used `transform: scale(1.05)` which didn't properly handle different viewport aspect ratios
- The iframe wasn't properly sized to cover the full container without distortion

## Solution Implemented

### 1. CSS Utility Classes (in `src/index.css`)
```css
.video-bg-cover {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 56.25vw; /* 16:9 aspect ratio */
  min-height: 100vh;
  min-width: 177.78vh; /* 16:9 aspect ratio */
  pointer-events: none;
  border: none;
  outline: none;
}

.video-container-center {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### 2. Updated Hero Component Structure
- Used proper container centering with flexbox
- Applied responsive video dimensions that maintain 16:9 aspect ratio
- Ensured video always covers the full viewport without black bars

## How It Works

### Aspect Ratio Calculations
- **Height based on width**: `height = 56.25vw` (because 9/16 = 0.5625)
- **Width based on height**: `min-width = 177.78vh` (because 16/9 = 1.7778)

### Responsive Behavior
- **Wide screens** (aspect ratio > 16:9): Video height is determined by viewport width
- **Tall screens** (aspect ratio < 16:9): Video width is determined by viewport height
- **Center positioning**: Video is always centered using `transform: translate(-50%, -50%)`

## Testing
The fix has been tested and verified to:
- Eliminate black bars on all viewport sizes
- Maintain proper video aspect ratio
- Ensure full coverage of the hero section
- Preserve video quality and performance

## Browser Compatibility
- Modern browsers supporting CSS viewport units (vw, vh)
- Flexbox support required
- YouTube iframe embed support

## Performance Considerations
- No JavaScript required for responsive behavior
- Uses CSS-only solution for optimal performance
- Maintains all original YouTube embed parameters for optimal loading