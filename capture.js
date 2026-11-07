import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const ARTIFACTS_DIR = 'C:\\Users\\HP\\.gemini\\antigravity\\brain\\3c75f638-97b1-4e7c-a494-938145ec25a7';
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function run() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
  });

  const page = await browser.newPage();
  const consoleErrors = [];

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  page.on('pageerror', (err) => {
    consoleErrors.push(err.toString());
  });

  // 1. Desktop Arabic Home Page
  console.log('Testing Home Page (Arabic RTL)...');
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'home-desktop-ar.png') });
  await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'home-fullpage-ar.png'), fullPage: true });

  // 2. Mobile Arabic Home Page
  console.log('Testing Mobile Viewport (Arabic RTL)...');
  await page.setViewport({ width: 390, height: 844, isMobile: true });
  await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'home-mobile-ar.png') });

  // 3. Desktop English LTR Home Page
  console.log('Testing English Language Switcher (LTR)...');
  await page.setViewport({ width: 1440, height: 900 });
  // Click on English button
  const enButtons = await page.$$('button');
  for (const btn of enButtons) {
    const text = await page.evaluate(el => el.textContent, btn);
    if (text && text.includes('English')) {
      await btn.click();
      break;
    }
  }
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'home-desktop-en.png') });

  // 4. Dedicated Services Page
  console.log('Testing Services Page...');
  await page.goto('http://127.0.0.1:5173/services', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'services-desktop.png') });

  // 5. Portfolio Page with Category Filtering
  console.log('Testing Portfolio Page...');
  await page.goto('http://127.0.0.1:5173/portfolio', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'portfolio-desktop.png') });

  // Click on first project card to test Modal
  console.log('Testing Project Modal...');
  const firstCard = await page.$('.group.cursor-pointer');
  if (firstCard) {
    await firstCard.click();
    await new Promise(r => setTimeout(r, 500));
    await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'portfolio-modal.png') });
  }

  // 6. Contact Page with Inquiry Form
  console.log('Testing Contact Page...');
  await page.goto('http://127.0.0.1:5173/contact', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'contact-desktop.png') });

  // 7. Admin Notice Page
  console.log('Testing Admin Notice Page...');
  await page.goto('http://127.0.0.1:5173/admin', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'admin-notice.png') });

  console.log('Console errors encountered:', consoleErrors.length);
  if (consoleErrors.length > 0) {
    console.log('Error details:', consoleErrors);
  }

  await browser.close();
  console.log('Test completed successfully!');
}

run().catch(err => {
  console.error('Test run failed:', err);
  process.exit(1);
});
