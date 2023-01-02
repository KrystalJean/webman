const puppeteer = require('puppeteer');

async function run() {
    // const title = await desktopPage.evaluate(() => document.title);
    // console.log(title)


    const browser = await puppeteer.launch();
    const desktopPage = await browser.newPage();
    const mobilePage = desktopPage;

    const urlArray = [
        'https://www.devmytech.com',
        'https://www.shopchillvibes.com',
        'https://www.riverbendliquorandwine.com',
        'https://krystaljean.github.io/henry-game/',
        'https://www.cozyhomeremedy.com'
    ];

    for(var i = 0; i < urlArray.length; i++) {

        const website_url = urlArray[i];
    
        // Open URL as desktop page
        await desktopPage.setViewport({ width: 1280, height: 720 });
        await desktopPage.goto(website_url, { waitUntil: 'networkidle0' });
      
        // Capture desktop thumbnail screenshot
        await desktopPage.screenshot({
          path: `images/screenshots/desktop-thumb-${i+1}.png`,
          fullPage: false
        });

        // Open URL as mobile page
        await mobilePage.setViewport({ width: 640, height: 460 });
        await mobilePage.goto(website_url, { waitUntil: 'networkidle0' });

        // Capture mobile thumbnail screenshot
        await mobilePage.screenshot({
            path: `images/screenshots/mobile-thumb-${i+1}.png`,
            fullPage: false
        });
    
    }

    
    

    await browser.close();
}

run();
