import { chromium } from 'playwright';

async function debugVideoIssue() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  
  // Enable console logging
  page.on('console', msg => {
    console.log(`[CONSOLE ${msg.type()}]:`, msg.text());
  });
  
  // Enable error logging
  page.on('pageerror', error => {
    console.log(`[PAGE ERROR]:`, error.message);
  });
  
  // Enable request failure logging
  page.on('requestfailed', request => {
    console.log(`[REQUEST FAILED]:`, request.url(), request.failure().errorText);
  });
  
  // Enable response logging for video-related requests
  page.on('response', response => {
    const url = response.url();
    if (url.includes('youtube') || url.includes('video') || url.includes('.mp4') || url.includes('.webm')) {
      console.log(`[VIDEO RESPONSE]:`, response.status(), url);
    }
  });
  
  console.log('🔍 Navigating to deployed site...');
  await page.goto('https://aesthetic-pavlova-a22a6a.netlify.app/');
  
  // Wait for page to load
  await page.waitForTimeout(3000);
  
  console.log('🎥 Checking for video elements...');
  
  // Check if video elements exist
  const videoElements = await page.$$('video');
  console.log(`Found ${videoElements.length} video elements`);
  
  for (let i = 0; i < videoElements.length; i++) {
    const video = videoElements[i];
    const src = await video.getAttribute('src');
    const autoplay = await video.getAttribute('autoplay');
    const muted = await video.getAttribute('muted');
    const loop = await video.getAttribute('loop');
    const readyState = await video.evaluate(el => el.readyState);
    const networkState = await video.evaluate(el => el.networkState);
    const paused = await video.evaluate(el => el.paused);
    const currentTime = await video.evaluate(el => el.currentTime);
    const duration = await video.evaluate(el => el.duration);
    
    console.log(`\n📺 Video ${i + 1}:`);
    console.log(`  - src: ${src}`);
    console.log(`  - autoplay: ${autoplay}`);
    console.log(`  - muted: ${muted}`);
    console.log(`  - loop: ${loop}`);
    console.log(`  - readyState: ${readyState} (0=nothing, 1=metadata, 2=current, 3=future, 4=enough)`);
    console.log(`  - networkState: ${networkState} (0=empty, 1=idle, 2=loading, 3=no_source)`);
    console.log(`  - paused: ${paused}`);
    console.log(`  - currentTime: ${currentTime}`);
    console.log(`  - duration: ${duration}`);
    
    // Try to get error information
    try {
      const error = await video.evaluate(el => el.error);
      if (error) {
        console.log(`  - error: ${error}`);
      }
    } catch (e) {
      console.log(`  - no error info available`);
    }
  }
  
  // Check for iframe elements (YouTube embeds)
  const iframes = await page.$$('iframe');
  console.log(`\n🖼️ Found ${iframes.length} iframe elements`);
  
  for (let i = 0; i < iframes.length; i++) {
    const iframe = iframes[i];
    const src = await iframe.getAttribute('src');
    console.log(`  - iframe ${i + 1}: ${src}`);
  }
  
  // Check network tab for failed requests
  console.log('\n🌐 Waiting for additional network requests...');
  await page.waitForTimeout(5000);
  
  // Try to interact with video if found
  if (videoElements.length > 0) {
    console.log('\n▶️ Attempting to play video...');
    try {
      await videoElements[0].evaluate(el => el.play());
      await page.waitForTimeout(2000);
      
      const playedAfterAttempt = await videoElements[0].evaluate(el => !el.paused);
      console.log(`Video playing after manual play(): ${playedAfterAttempt}`);
    } catch (error) {
      console.log(`Error trying to play video: ${error.message}`);
    }
  }
  
  console.log('\n📋 Investigation complete. Check logs above for issues.');
  
  // Keep browser open for manual inspection
  console.log('\n👀 Browser will stay open for 30 seconds for manual inspection...');
  await page.waitForTimeout(30000);
  
  await browser.close();
}

debugVideoIssue().catch(console.error);