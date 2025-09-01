/*
 * Mobile Layout Test - Playwright script to verify black gap fix
 * Tests the header-hero coordination on mobile devices
 * Run with: node mobile-layout-test.js
 */

const { chromium } = require('playwright');

async function testMobileLayout() {
  // Launch browser with mobile viewport
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 375, height: 812 }, // iPhone X dimensions
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15'
  });
  
  const page = await context.newPage();
  
  try {
    console.log('🔍 Starting mobile layout test...');
    
    // Navigate to the site
    await page.goto('http://localhost:5173');
    await page.waitForLoadState('networkidle');
    
    // Wait for video to load
    await page.waitForSelector('iframe[title="OTNET Background Video"]');
    await page.waitForTimeout(3000); // Allow video to start
    
    console.log('✅ Page loaded successfully');
    
    // Test 1: Check header positioning
    const headerElement = await page.locator('header.header-fixed');
    const headerBox = await headerElement.boundingBox();
    
    console.log('🔧 Header measurements:', {
      top: headerBox.y,
      height: headerBox.height,
      width: headerBox.width
    });
    
    // Test 2: Check hero section positioning  
    const heroElement = await page.locator('section#home.hero-section');
    const heroBox = await heroElement.boundingBox();
    
    console.log('🎬 Hero section measurements:', {
      top: heroBox.y,
      height: heroBox.height,
      width: heroBox.width
    });
    
    // Test 3: Check for black gaps
    const gap = heroBox.y - (headerBox.y + headerBox.height);
    console.log(`📏 Gap between header and hero: ${gap}px`);
    
    if (gap > 2) {
      console.log('❌ BLACK GAP DETECTED! Gap is too large:', gap + 'px');
    } else {
      console.log('✅ No black gap detected - perfect alignment!');
    }
    
    // Test 4: Check video background coverage
    const videoContainer = await page.locator('.video-container-full');
    const videoBox = await videoContainer.boundingBox();
    
    console.log('📹 Video container measurements:', {
      top: videoBox.y,
      height: videoBox.height,
      width: videoBox.width,
      coversFullHeight: videoBox.height >= 812
    });
    
    // Test 5: Check content positioning
    const heroContent = await page.locator('.hero-content');
    const contentBox = await heroContent.boundingBox();
    
    console.log('📝 Content measurements:', {
      top: contentBox.y,
      height: contentBox.height,
      properlyOffset: contentBox.y >= headerBox.height
    });
    
    // Test 6: Screenshot for visual validation
    await page.screenshot({ 
      path: '/Users/ashutosh/Documents/Clients/otnet2/project/mobile-test-result.png',
      fullPage: true
    });
    console.log('📸 Screenshot saved: mobile-test-result.png');
    
    // Test 7: Test mobile menu
    const mobileMenuButton = await page.locator('button[class*="md:hidden"]');
    await mobileMenuButton.click();
    await page.waitForTimeout(500);
    
    const mobileMenu = await page.locator('div[class*="md:hidden"][class*="py-4"]');
    const menuVisible = await mobileMenu.isVisible();
    console.log('📱 Mobile menu test:', menuVisible ? '✅ Working' : '❌ Failed');
    
    // Close mobile menu
    await mobileMenuButton.click();
    await page.waitForTimeout(500);
    
    // Test 8: Responsive breakpoints
    console.log('📱 Testing responsive breakpoints...');
    
    // Test tablet view
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: '/Users/ashutosh/Documents/Clients/otnet2/project/tablet-test-result.png' });
    
    // Test large mobile
    await page.setViewportSize({ width: 414, height: 896 }); // iPhone 11 Pro Max
    await page.waitForTimeout(1000);
    await page.screenshot({ path: '/Users/ashutosh/Documents/Clients/otnet2/project/large-mobile-test-result.png' });
    
    console.log('✅ All responsive tests completed');
    
    // Summary
    console.log('\n🏆 LINUS VALIDATION SUMMARY:');
    console.log('=================================');
    console.log(`Header height: ${headerBox.height}px`);
    console.log(`Hero top position: ${heroBox.y}px`);
    console.log(`Gap measurement: ${gap}px`);
    console.log(`Video coverage: ${videoBox.height >= 812 ? 'Full' : 'Partial'}`);
    console.log(`Content offset: ${contentBox.y >= headerBox.height ? 'Proper' : 'Improper'}`);
    console.log(`Mobile menu: ${menuVisible ? 'Working' : 'Failed'}`);
    
    if (gap <= 2 && videoBox.height >= 812 && contentBox.y >= headerBox.height) {
      console.log('\n🎉 SUCCESS! Black gap eliminated with good taste approach!');
    } else {
      console.log('\n⚠️  Issues detected - needs further refinement');
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  } finally {
    await browser.close();
  }
}

// Install Playwright if not already installed
async function installPlaywright() {
  const { exec } = require('child_process');
  return new Promise((resolve, reject) => {
    exec('npm list playwright', (error) => {
      if (error) {
        console.log('Installing Playwright...');
        exec('npm install playwright', (installError) => {
          if (installError) {
            reject(installError);
          } else {
            resolve();
          }
        });
      } else {
        resolve();
      }
    });
  });
}

// Main execution
async function main() {
  try {
    console.log('🚀 LINUS PERSONA: Testing the "good taste" fix...');
    console.log('📋 Testing mobile layout coordination at localhost:5173\n');
    
    // Check if Playwright is installed
    try {
      require('playwright');
    } catch (e) {
      console.log('📦 Playwright not found, installing...');
      await installPlaywright();
    }
    
    await testMobileLayout();
  } catch (error) {
    console.error('Fatal error:', error.message);
    process.exit(1);
  }
}

// Run if this file is executed directly
if (require.main === module) {
  main();
}