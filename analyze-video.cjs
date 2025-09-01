const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  // Set up console logging to capture errors
  page.on('console', msg => {
    console.log('CONSOLE:', msg.type(), msg.text());
  });
  
  // Capture network failures
  page.on('response', response => {
    if (!response.ok()) {
      console.log('NETWORK ERROR:', response.url(), response.status());
    }
  });
  
  try {
    console.log('🌐 Navigating to the site...');
    await page.goto('https://aesthetic-pavlova-a22a6a.netlify.app/', { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });
    
    // Take initial screenshot
    console.log('📸 Taking screenshot...');
    await page.screenshot({ path: '/Users/ashutosh/Documents/Clients/otnet2/project/site-analysis.png', fullPage: true });
    
    // Wait a moment for any dynamic content
    await page.waitForTimeout(3000);
    
    // Analyze video elements
    console.log('🎥 Analyzing video elements...');
    const videoElements = await page.$$eval('video, iframe[src*="youtube"], iframe[src*="youtu.be"]', elements => {
      return elements.map(el => {
        const tagName = el.tagName.toLowerCase();
        const result = {
          tagName,
          src: el.src || el.getAttribute('src') || '',
          autoplay: el.autoplay || el.getAttribute('autoplay'),
          muted: el.muted || el.getAttribute('muted'),
          controls: el.controls || el.getAttribute('controls'),
          loop: el.loop || el.getAttribute('loop'),
          width: el.width || el.getAttribute('width') || el.offsetWidth,
          height: el.height || el.getAttribute('height') || el.offsetHeight,
          style: el.getAttribute('style') || '',
          className: el.className || '',
          id: el.id || '',
          readyState: tagName === 'video' ? el.readyState : 'N/A',
          paused: tagName === 'video' ? el.paused : 'N/A',
          currentTime: tagName === 'video' ? el.currentTime : 'N/A',
          duration: tagName === 'video' ? el.duration : 'N/A'
        };
        
        if (tagName === 'iframe') {
          result.allow = el.getAttribute('allow') || '';
          result.sandbox = el.getAttribute('sandbox') || '';
        }
        
        return result;
      });
    });
    
    console.log('📊 Video Elements Found:', JSON.stringify(videoElements, null, 2));
    
    // Check for YouTube API or embed specific elements
    console.log('🔍 Checking for YouTube-specific implementations...');
    const youtubeElements = await page.$$eval('[id*="youtube"], [class*="youtube"], [data-youtube], script[src*="youtube"]', elements => {
      return elements.map(el => ({
        tagName: el.tagName.toLowerCase(),
        id: el.id || '',
        className: el.className || '',
        src: el.src || '',
        dataset: Object.keys(el.dataset || {}).map(key => ({ key, value: el.dataset[key] }))
      }));
    });
    
    console.log('🎬 YouTube Elements Found:', JSON.stringify(youtubeElements, null, 2));
    
    // Check for any background video CSS implementations
    console.log('🎨 Analyzing CSS background implementations...');
    const backgroundElements = await page.$$eval('*', elements => {
      return elements.filter(el => {
        const computed = window.getComputedStyle(el);
        return computed.backgroundImage !== 'none' || 
               computed.position === 'fixed' && computed.zIndex < 0 ||
               el.className.toLowerCase().includes('background') ||
               el.className.toLowerCase().includes('video') ||
               el.id.toLowerCase().includes('background') ||
               el.id.toLowerCase().includes('video');
      }).map(el => ({
        tagName: el.tagName.toLowerCase(),
        id: el.id || '',
        className: el.className || '',
        backgroundImage: window.getComputedStyle(el).backgroundImage,
        position: window.getComputedStyle(el).position,
        zIndex: window.getComputedStyle(el).zIndex,
        width: el.offsetWidth,
        height: el.offsetHeight
      }));
    });
    
    console.log('🖼️ Background Elements:', JSON.stringify(backgroundElements, null, 2));
    
    // Check page HTML for any video-related code
    console.log('📝 Analyzing page content for video references...');
    const pageContent = await page.content();
    const videoReferences = [];
    
    // Look for YouTube URLs
    const youtubeMatches = pageContent.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/g);
    if (youtubeMatches) {
      videoReferences.push({ type: 'YouTube URLs', matches: youtubeMatches });
    }
    
    // Look for video tags
    const videoTagMatches = pageContent.match(/<video[^>]*>.*?<\/video>/gs);
    if (videoTagMatches) {
      videoReferences.push({ type: 'Video Tags', matches: videoTagMatches });
    }
    
    // Look for iframe embeds
    const iframeMatches = pageContent.match(/<iframe[^>]*(?:youtube|youtu\.be)[^>]*>/g);
    if (iframeMatches) {
      videoReferences.push({ type: 'YouTube iframes', matches: iframeMatches });
    }
    
    console.log('🔗 Video References in HTML:', JSON.stringify(videoReferences, null, 2));
    
    // Try to interact with any video elements found
    if (videoElements.length > 0) {
      console.log('▶️ Attempting to interact with video elements...');
      for (let i = 0; i < videoElements.length; i++) {
        try {
          const selector = videoElements[i].tagName;
          await page.locator(selector).first().scrollIntoViewIfNeeded();
          await page.waitForTimeout(1000);
          
          if (videoElements[i].tagName === 'video') {
            // Try to play the video
            await page.locator(selector).first().evaluate(video => {
              console.log('Attempting to play video:', video);
              return video.play().catch(e => console.log('Play failed:', e.message));
            });
          }
        } catch (error) {
          console.log(`Error interacting with video ${i}:`, error.message);
        }
      }
    }
    
    // Check for autoplay policies
    console.log('🔒 Checking autoplay policy...');
    const autoplayInfo = await page.evaluate(() => {
      return {
        userInteraction: document.hasStoredUserActivation || false,
        autoplayPolicy: navigator.getAutoplayPolicy ? navigator.getAutoplayPolicy('mediaelement') : 'unknown',
        userAgent: navigator.userAgent
      };
    });
    
    console.log('🎛️ Autoplay Info:', JSON.stringify(autoplayInfo, null, 2));
    
    // Take a final screenshot after analysis
    await page.screenshot({ path: '/Users/ashutosh/Documents/Clients/otnet2/project/site-analysis-final.png', fullPage: true });
    
    console.log('✅ Analysis complete!');
    
  } catch (error) {
    console.error('❌ Error during analysis:', error.message);
  } finally {
    await browser.close();
  }
})();