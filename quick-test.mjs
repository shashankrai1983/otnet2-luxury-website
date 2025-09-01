/*
 * Quick Mobile Test - Fast Playwright validation of black gap fix
 * Linus Persona: Pragmatic testing approach
 */

import { chromium } from 'playwright';

async function quickTest() {
  console.log('🚀 LINUS QUICK TEST: Validating layout fix...');
  
  const browser = await chromium.launch({ headless: true }); // Headless for speed
  const page = await browser.newPage();
  
  // Mobile viewport
  await page.setViewportSize({ width: 375, height: 812 });
  
  try {
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle', timeout: 10000 });
    console.log('✅ Page loaded');
    
    // Quick measurements
    const header = await page.locator('header').boundingBox();
    const hero = await page.locator('section#home').boundingBox();
    
    const gap = hero.y - (header.y + header.height);
    
    console.log(`📏 Header height: ${header.height}px`);
    console.log(`📏 Gap measurement: ${gap}px`);
    
    // Quick screenshot
    await page.screenshot({ 
      path: '/Users/ashutosh/Documents/Clients/otnet2/project/quick-test.png',
      clip: { x: 0, y: 0, width: 375, height: 400 } // Just top portion
    });
    
    if (gap <= 2) {
      console.log('🎉 SUCCESS! No black gap detected');
      console.log('🎯 The "good taste" CSS fix is working!');
    } else {
      console.log(`❌ Black gap still present: ${gap}px`);
    }
    
  } catch (error) {
    console.error('❌ Test error:', error.message);
  } finally {
    await browser.close();
  }
}

quickTest();