import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import http from 'http';

function waitForServer(url) {
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      http.get(url, (res) => {
        if (res.statusCode === 200 || res.statusCode === 404) {
          clearInterval(interval);
          resolve();
        }
      }).on('error', () => {});
    }, 1000);
  });
}

async function run() {
  console.log('Starting dev server for the cool version...');
  const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';
  const serverProcess = spawn(npmCmd, ['run', 'dev'], { shell: true, stdio: 'pipe' });
  
  const serverUrl = 'http://localhost:5173/print';
  
  console.log('Waiting for dev server to respond at localhost:5173...');
  await waitForServer('http://localhost:5173/');

  console.log('Server is up! Launching puppeteer...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // High-res viewport
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

  console.log('Navigating to /print...');
  await page.goto(serverUrl, { waitUntil: 'networkidle0', timeout: 60000 });
  
  // Scroll to bottom to ensure any lazy-loaded images load
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 100;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });

  await new Promise(r => setTimeout(r, 2000));

  await page.evaluate(() => {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      if (link.href && link.href.includes('localhost:5173')) {
        link.href = link.href.replace('http://localhost:5173', 'https://rickbhattacharya.vercel.app');
      }
    });
  });

  const outputPath = 'Rick_Bhattacharya_Cool_Portfolio.pdf';
  console.log(`Saving PDF to ${outputPath}...`);
  await page.pdf({
    path: outputPath,
    format: 'Letter',
    printBackground: true,
    margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' }
  });

  console.log('Cool PDF successfully generated!');
  
  await browser.close();
  serverProcess.kill();
  process.exit(0);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
