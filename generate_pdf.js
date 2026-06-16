import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import portfolioData from './src/data/portfolioData.js';

const PORTFOLIO_URL = 'https://rickbhattacharya.vercel.app/';

async function generateHTML() {
  const { profile, skills, projects, experience } = portfolioData;

  const getLocalImgBase64 = (url) => {
    if (url.startsWith('/')) {
      const p = path.join(process.cwd(), 'public', url);
      try {
        if (fs.existsSync(p)) {
          let ext = path.extname(p).substring(1).toLowerCase();
          if (ext === 'jpg') ext = 'jpeg';
          if (ext === 'svg') ext = 'svg+xml';
          const base64Data = fs.readFileSync(p, { encoding: 'base64' });
          return `data:image/${ext};base64,${base64Data}`;
        }
      } catch (e) {
        console.error("Failed to load image:", p);
      }
    }
    return url;
  };

  const projectHTML = projects.map(p => {
    let imagesHTML = '';
    if (p.images && p.images.length > 0) {
      const validImages = p.images.filter(img => !img.endsWith('.mp4'));
      imagesHTML = validImages.map((img, i) => `
        <div style="flex: 1 1 calc(50% - 12px); min-width: 250px; max-width: 100%; text-align: center; box-sizing: border-box;">
          <img src="${getLocalImgBase64(img)}" style="max-width: 100%; height: auto; max-height: 250px; object-fit: contain; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 4px; box-sizing: border-box;" alt="${p.title}" />
          ${p.imageLabels && p.imageLabels[i] ? `<div style="font-size: 10px; color: #64748b; margin-top: 4px; font-weight: 500;">${p.imageLabels[i].toUpperCase()}</div>` : ''}
        </div>
      `).join('');
      
      if (imagesHTML) {
         imagesHTML = `<div style="display: flex; flex-wrap: wrap; gap: 12px; margin-top: 15px; page-break-inside: avoid; justify-content: center;">${imagesHTML}</div>`;
      }
    }

    const contextHTML = (p.context || []).map(c => `<p style="margin: 0 0 6px 0;">${c}</p>`).join('');
    const metricsHTML = (p.metrics || []).map(m => `<li style="margin-bottom: 4px;">${m}</li>`).join('');

    return `
      <div style="margin-bottom: 35px; page-break-inside: avoid;">
        <div style="border-bottom: 2px solid #e2e8f0; padding-bottom: 4px; margin-bottom: 12px; display: flex; justify-content: space-between; align-items: flex-end;">
          <h3 style="margin: 0; font-size: 16px; color: #0f172a; text-transform: uppercase; letter-spacing: 0.5px;">
            ${p.title}
          </h3>
          <div style="text-align: right;">
            <span style="font-size: 11px; font-weight: 600; color: #0f172a; text-transform: uppercase; background: #f1f5f9; padding: 2px 6px; border-radius: 4px; margin-right: 8px;">${p.status}</span>
            <span style="font-size: 12px; color: #475569; font-weight: 500;">${p.timeline}</span>
          </div>
        </div>
        
        <div style="font-size: 12px; font-weight: 700; color: #1e293b; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px;">Role: ${p.role}</div>
        
        <p style="font-weight: 600; color: #1e293b; margin: 0 0 10px 0; font-size: 13px;">${p.summary}</p>
        
        <div style="color: #334155; font-size: 12px; line-height: 1.5;">
          ${contextHTML}
        </div>
        
        ${p.metrics && p.metrics.length > 0 ? `
          <div style="margin-top: 12px; background: #f8fafc; padding: 10px 15px; border-left: 3px solid #0f172a;">
            <strong style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; color: #0f172a;">Key Results</strong>
            <ul style="padding-left: 15px; margin: 6px 0 0 0; color: #334155; font-size: 12px;">
              ${metricsHTML}
            </ul>
          </div>
        ` : ''}
        
        ${imagesHTML}
      </div>
    `;
  }).join('');

  const expHTML = experience.map(e => `
    <div style="margin-bottom: 25px; page-break-inside: avoid;">
      <div style="border-bottom: 2px solid #e2e8f0; padding-bottom: 4px; margin-bottom: 10px; display: flex; justify-content: space-between; align-items: flex-end;">
        <h3 style="margin: 0; font-size: 16px; color: #0f172a; text-transform: uppercase; letter-spacing: 0.5px;">${e.role} <span style="color: #64748b; font-weight: 400;">@ ${e.company}</span></h3>
        <span style="font-size: 12px; color: #475569; font-weight: 500;">${e.timeline}</span>
      </div>
      <p style="font-weight: 600; color: #1e293b; margin: 0 0 8px 0; font-size: 13px;">${e.summary}</p>
      <div style="color: #334155; font-size: 12px; line-height: 1.5;">
        ${(e.context || []).map(c => `<p style="margin: 0 0 6px 0;">${c}</p>`).join('')}
      </div>
    </div>
  `).join('');

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
          line-height: 1.5;
          color: #0f172a;
          margin: 0;
          padding: 0;
          background: #ffffff;
          -webkit-print-color-adjust: exact;
        }
        .page {
          padding: 40px 50px;
          max-width: 800px;
          margin: 0 auto;
        }
        a { color: #2563eb; text-decoration: none; }
        
        .header {
          text-align: center;
          margin-bottom: 35px;
          padding-bottom: 20px;
          border-bottom: 4px solid #0f172a;
        }
        .header h1 {
          font-size: 28px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin: 0 0 5px 0;
        }
        .header .subtitle {
          font-size: 14px;
          color: #475569;
          font-weight: 600;
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .contact-info {
          font-size: 12px;
          color: #334155;
          display: flex;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
        }
        
        .portfolio-link {
          margin-top: 15px;
          display: inline-block;
          background: #f8fafc;
          padding: 6px 12px;
          border-radius: 4px;
          font-weight: 600;
          font-size: 12px;
          border: 1px solid #cbd5e1;
        }
        
        .section-title {
          font-size: 18px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #0f172a;
          margin-top: 35px;
          margin-bottom: 20px;
          padding-bottom: 5px;
        }
        
        .skills-grid {
          display: flex;
          gap: 20px;
          background: #f8fafc;
          padding: 15px;
          border-radius: 6px;
          border: 1px solid #e2e8f0;
          margin-bottom: 35px;
        }
        .skills-col { flex: 1; }
        .skills-col h4 {
          margin: 0 0 8px 0;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #64748b;
        }
        .skills-col p {
          margin: 0;
          font-size: 12px;
          color: #0f172a;
          font-weight: 500;
          line-height: 1.6;
        }
      </style>
    </head>
    <body>
      <div class="page">
        <div class="header">
          <h1>${profile.name}</h1>
          <div class="subtitle">${profile.title} | ${profile.education.institution} (GPA: ${profile.education.gpa})</div>
          <div class="contact-info">
            <span>${profile.emailUser}@${profile.emailDomain}</span>
            <span>&bull;</span>
            <span>${profile.location}</span>
            <span>&bull;</span>
            <a href="${profile.linkedin}">LinkedIn</a>
          </div>
          <div class="portfolio-link">
            Full Interactive Portfolio: <a href="${PORTFOLIO_URL}">${PORTFOLIO_URL}</a>
          </div>
        </div>

        <div style="font-size: 13px; font-weight: 500; color: #334155; text-align: justify; margin-bottom: 35px; line-height: 1.6;">
          ${profile.statement}
        </div>

        <div class="section-title">Technical Proficiencies</div>
        <div class="skills-grid">
          <div class="skills-col">
            <h4>CAD & Design</h4>
            <p>${skills.cad.join(', ')}</p>
          </div>
          <div class="skills-col">
            <h4>Analysis & Software</h4>
            <p>${skills.analysis.join(', ')}</p>
          </div>
          <div class="skills-col">
            <h4>Fabrication & Hands-on</h4>
            <p>${skills.fabrication.join(', ')}</p>
          </div>
        </div>

        <div class="section-title">Selected Engineering Projects</div>
        ${projectHTML}

        <div class="section-title">Experience</div>
        ${expHTML}
      </div>
    </body>
    </html>
  `;
}

async function run() {
  console.log('Generating clean HTML layout for print...');
  const html = await generateHTML();
  
  fs.writeFileSync('portfolio_pdf_template.html', html);

  console.log('Launching puppeteer...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  await page.setContent(html, { waitUntil: 'load', timeout: 60000 });
  
  const outputPath = 'Rick_Bhattacharya_SpaceX_Portfolio.pdf';
  await page.pdf({
    path: outputPath,
    format: 'Letter',
    printBackground: true,
    margin: {
      top: '0mm',
      right: '0mm',
      bottom: '0mm',
      left: '0mm'
    }
  });

  await browser.close();
  console.log('PDF successfully generated at: ' + outputPath);
}

run().catch(console.error);
