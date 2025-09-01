import { chromium } from 'playwright';

async function testVideoBackgroundFix() {
    console.log('🎬 Starting YouTube Video Background Test...\n');
    
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext({
        viewport: { width: 1920, height: 1080 }
    });
    const page = await context.newPage();
    
    // Listen for console messages and errors
    const consoleMessages = [];
    const errors = [];
    
    page.on('console', msg => {
        consoleMessages.push(`${msg.type()}: ${msg.text()}`);
        if (msg.type() === 'error') {
            console.log(`❌ Console Error: ${msg.text()}`);
        }
    });
    
    page.on('pageerror', error => {
        errors.push(error.message);
        console.log(`🚨 Page Error: ${error.message}`);
    });
    
    try {
        // 1. Navigate to the site
        console.log('📍 Navigating to https://aesthetic-pavlova-a22a6a.netlify.app/');
        await page.goto('https://aesthetic-pavlova-a22a6a.netlify.app/', { 
            waitUntil: 'networkidle',
            timeout: 30000 
        });
        
        // 2. Wait for page to load completely
        console.log('⏳ Waiting for page to load completely...');
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(3000); // Additional wait for dynamic content
        
        // 3. Check if video iframes are present
        console.log('🔍 Checking for video iframes in DOM...');
        const iframes = await page.locator('iframe').count();
        console.log(`   Found ${iframes} iframe(s) on the page`);
        
        if (iframes > 0) {
            // Get iframe details
            const iframeData = await page.evaluate(() => {
                const iframes = Array.from(document.querySelectorAll('iframe'));
                return iframes.map(iframe => ({
                    src: iframe.src,
                    allow: iframe.getAttribute('allow'),
                    sandbox: iframe.getAttribute('sandbox'),
                    referrerPolicy: iframe.referrerPolicy,
                    loading: iframe.loading,
                    width: iframe.width,
                    height: iframe.height,
                    style: iframe.style.cssText
                }));
            });
            
            console.log('📊 Iframe Details:');
            iframeData.forEach((iframe, index) => {
                console.log(`   Iframe ${index + 1}:`);
                console.log(`     ✓ Source: ${iframe.src}`);
                console.log(`     ✓ Allow: ${iframe.allow || 'Not set'}`);
                console.log(`     ✓ Sandbox: ${iframe.sandbox || 'Not set'}`);
                console.log(`     ✓ Referrer Policy: ${iframe.referrerPolicy || 'Not set'}`);
                console.log(`     ✓ Loading: ${iframe.loading || 'Not set'}`);
                console.log(`     ✓ Dimensions: ${iframe.width}x${iframe.height}`);
                console.log(`     ✓ Style: ${iframe.style || 'None'}\n`);
            });
        }
        
        // 4. Look for video containers and background elements
        console.log('🎥 Checking for video background containers...');
        const videoContainers = await page.locator('.video-background, [class*="video"], [class*="background"]').count();
        console.log(`   Found ${videoContainers} video-related container(s)`);
        
        // 5. Check for user interaction hints
        console.log('💡 Checking for user interaction hints...');
        const hintElements = await page.locator('text=/click.*enable.*video/i, text=/click.*activate/i, [class*="hint"], [class*="overlay"]').count();
        console.log(`   Found ${hintElements} hint element(s)`);
        
        if (hintElements > 0) {
            const hintText = await page.locator('text=/click.*enable.*video/i, text=/click.*activate/i').first().textContent().catch(() => 'Not found');
            console.log(`   Hint text: "${hintText}"`);
        }
        
        // 6. Take initial screenshot
        console.log('📸 Taking initial screenshot...');
        await page.screenshot({ 
            path: 'video-test-initial.png',
            fullPage: true
        });
        
        // 7. Simulate user interaction to trigger video autoplay
        console.log('👆 Simulating user click to enable video autoplay...');
        await page.click('body');
        await page.waitForTimeout(2000); // Wait for video to potentially start
        
        // 8. Check if any changes occurred after click
        console.log('🔄 Checking changes after user interaction...');
        const postClickIframes = await page.locator('iframe').count();
        console.log(`   Iframe count after click: ${postClickIframes}`);
        
        // 9. Take post-interaction screenshot
        await page.screenshot({ 
            path: 'video-test-after-click.png',
            fullPage: true
        });
        
        // 10. Test network requests for YouTube content
        console.log('🌐 Checking network requests...');
        const responses = [];
        page.on('response', response => {
            if (response.url().includes('youtube') || response.url().includes('googlevideo')) {
                responses.push({
                    url: response.url(),
                    status: response.status(),
                    contentType: response.headers()['content-type']
                });
            }
        });
        
        // Wait a bit more to catch any delayed requests
        await page.waitForTimeout(5000);
        
        if (responses.length > 0) {
            console.log('📡 YouTube-related network requests:');
            responses.forEach(response => {
                console.log(`   ${response.status}: ${response.url}`);
            });
        } else {
            console.log('   No YouTube-related network requests detected');
        }
        
        // 11. Check for fallback backgrounds
        console.log('🖼️  Checking for fallback background elements...');
        const backgroundElements = await page.evaluate(() => {
            const elements = Array.from(document.querySelectorAll('*'));
            return elements.filter(el => {
                const style = window.getComputedStyle(el);
                return style.backgroundImage && style.backgroundImage !== 'none';
            }).map(el => ({
                tagName: el.tagName,
                className: el.className,
                backgroundImage: window.getComputedStyle(el).backgroundImage
            }));
        });
        
        if (backgroundElements.length > 0) {
            console.log('   Background elements found:');
            backgroundElements.forEach((el, index) => {
                console.log(`     ${index + 1}. ${el.tagName}.${el.className}: ${el.backgroundImage}`);
            });
        }
        
        // 12. Check page performance
        console.log('⚡ Checking page performance...');
        const performanceMetrics = await page.evaluate(() => {
            const navigation = performance.getEntriesByType('navigation')[0];
            return {
                loadTime: Math.round(navigation.loadEventEnd - navigation.loadEventStart),
                domContentLoaded: Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart),
                totalTime: Math.round(navigation.loadEventEnd - navigation.fetchStart)
            };
        });
        
        console.log(`   Load time: ${performanceMetrics.loadTime}ms`);
        console.log(`   DOM Content Loaded: ${performanceMetrics.domContentLoaded}ms`);
        console.log(`   Total time: ${performanceMetrics.totalTime}ms`);
        
        // 13. Final comprehensive check
        console.log('\n📋 FINAL REPORT:');
        console.log('================');
        console.log(`✅ Page loaded successfully: ${errors.length === 0 ? 'YES' : 'NO'}`);
        console.log(`✅ Video iframes present: ${iframes > 0 ? 'YES' : 'NO'}`);
        console.log(`✅ Enhanced iframe attributes: Checking individually...`);
        
        if (iframes > 0) {
            const enhancedAttribs = await page.evaluate(() => {
                const iframe = document.querySelector('iframe');
                if (!iframe) return null;
                
                return {
                    hasAllow: !!iframe.getAttribute('allow'),
                    hasSandbox: !!iframe.getAttribute('sandbox'),
                    hasReferrerPolicy: !!iframe.referrerPolicy,
                    allowContent: iframe.getAttribute('allow'),
                    sandboxContent: iframe.getAttribute('sandbox')
                };
            });
            
            if (enhancedAttribs) {
                console.log(`   - Allow attribute: ${enhancedAttribs.hasAllow ? '✅ Present' : '❌ Missing'}`);
                if (enhancedAttribs.hasAllow) {
                    console.log(`     Content: ${enhancedAttribs.allowContent}`);
                }
                console.log(`   - Sandbox attribute: ${enhancedAttribs.hasSandbox ? '✅ Present' : '❌ Missing'}`);
                if (enhancedAttribs.hasSandbox) {
                    console.log(`     Content: ${enhancedAttribs.sandboxContent}`);
                }
                console.log(`   - Referrer Policy: ${enhancedAttribs.hasReferrerPolicy ? '✅ Present' : '❌ Missing'}`);
            }
        }
        
        console.log(`✅ User interaction hints: ${hintElements > 0 ? 'YES' : 'NO'}`);
        console.log(`✅ Console errors: ${consoleMessages.filter(msg => msg.startsWith('error')).length} found`);
        console.log(`✅ Page errors: ${errors.length} found`);
        console.log(`✅ Fallback backgrounds: ${backgroundElements.length} found`);
        console.log(`✅ Screenshots saved: video-test-initial.png, video-test-after-click.png`);
        
        // List any issues found
        if (errors.length > 0) {
            console.log('\n🚨 ERRORS DETECTED:');
            errors.forEach(error => console.log(`   - ${error}`));
        }
        
        const errorMessages = consoleMessages.filter(msg => msg.startsWith('error'));
        if (errorMessages.length > 0) {
            console.log('\n⚠️  CONSOLE ERRORS:');
            errorMessages.forEach(msg => console.log(`   - ${msg}`));
        }
        
        console.log('\n🎉 Test completed successfully!');
        
    } catch (error) {
        console.error('❌ Test failed:', error.message);
    } finally {
        await browser.close();
    }
}

// Run the test
testVideoBackgroundFix().catch(console.error);