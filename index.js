const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function run() {
    const browser = await puppeteer.launch();
    const desktopPage = await browser.newPage();
    const mobilePage = desktopPage;

    const urlArray = [
        'https://www.devmytech.com',
        'https://www.shopchillvibes.com',
        'https://www.riverbendliquorandwine.com',
        'https://www.cozyhomeremedy.com'
    ];

    for (let i = 0; i < urlArray.length; i++) {
        const website_url = urlArray[i];
        
        try {
            // Open URL as desktop page
            await desktopPage.setViewport({ width: 1280, height: 720 });
            await desktopPage.goto(website_url, { waitUntil: 'networkidle0', timeout: 60000 });
            
            // Capture desktop thumbnail screenshot
            await desktopPage.screenshot({
                path: `images/screenshots/desktop-thumb-${i+1}.png`,
                fullPage: false
            });

            // Open URL as mobile page
            await mobilePage.setViewport({ width: 320, height: 480 });
            await mobilePage.goto(website_url, { waitUntil: 'networkidle0', timeout: 60000 });
            
            // Capture mobile thumbnail screenshot
            await mobilePage.screenshot({
                path: `images/screenshots/mobile-thumb-${i+1}.png`,
                fullPage: false
            });
        } catch (error) {
            console.error(`Error loading page: ${website_url}`, error);
        }
    }

    // Save timestamp after screenshots are done
    saveTimestamp();

    await browser.close();
}

// Save the timestamp to a file
function saveTimestamp() {
    const timestamp = new Date().toLocaleString();
    fs.writeFileSync(path.join(__dirname, 'timestamp.txt'), timestamp, 'utf8');
}

run();
