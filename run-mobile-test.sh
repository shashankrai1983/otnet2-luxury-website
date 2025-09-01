#!/bin/bash

# Mobile Layout Test Runner - Linus Persona Validation Script
# This script installs Playwright if needed and runs mobile layout tests

echo "🚀 LINUS PERSONA: Validating the 'good taste' black gap fix"
echo "================================================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this from the project root directory"
    exit 1
fi

# Check if dev server is running
if ! curl -s http://localhost:5173 > /dev/null 2>&1; then
    echo "⚠️  Dev server not detected on port 5173"
    echo "📋 Starting development server..."
    npm run dev &
    DEV_PID=$!
    echo "⏳ Waiting for server to start..."
    sleep 5
    
    # Check again
    if ! curl -s http://localhost:5173 > /dev/null 2>&1; then
        echo "❌ Failed to start dev server. Please run 'npm run dev' manually first."
        kill $DEV_PID 2>/dev/null
        exit 1
    fi
else
    echo "✅ Development server detected on port 5173"
fi

# Install Playwright if not present
echo "📦 Checking Playwright installation..."
if ! npm list playwright > /dev/null 2>&1; then
    echo "📦 Installing Playwright..."
    npm install playwright
    
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install Playwright"
        exit 1
    fi
    
    echo "🔧 Installing Playwright browsers..."
    npx playwright install chromium
fi

# Run the mobile test
echo "🔍 Running mobile layout validation test..."
echo "📱 Testing iPhone X dimensions (375x812)"
echo "================================================================="

node mobile-layout-test.js

# Check test results
if [ $? -eq 0 ]; then
    echo ""
    echo "🏆 LINUS VALIDATION COMPLETE!"
    echo "================================"
    echo "✅ Test passed - examining screenshots for visual confirmation"
    echo "📸 Check the generated screenshot files:"
    echo "   - mobile-test-result.png"
    echo "   - tablet-test-result.png" 
    echo "   - large-mobile-test-result.png"
    echo ""
    echo "🎯 The 'good taste' approach eliminated the special case!"
    echo "💡 CSS custom properties unified the layout system"
else
    echo ""
    echo "⚠️  Test completed with issues detected"
    echo "🔧 Check the output above for specific problems"
fi

echo ""
echo "🏁 Test execution finished"