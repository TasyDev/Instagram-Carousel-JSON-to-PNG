const fs = require('fs');
const path = require('path');
const nodeHtmlToImage = require('node-html-to-image');

async function main() {
  const jsonPath = path.join(__dirname, 'carousel-data.json');
  const templatesDir = path.join(__dirname, 'templates', 'Classic-desing');
  const outBaseDir = path.join(__dirname, 'out');
  
  // Read JSON
  const carouselData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  
  // Create output directory with date and time
  const now = new Date();
  const folderName = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}_${String(now.getHours()).padStart(2, '0')}-${String(now.getMinutes()).padStart(2, '0')}-${String(now.getSeconds()).padStart(2, '0')}`;
  const outDir = path.join(outBaseDir, folderName);
  
  if (!fs.existsSync(outBaseDir)) {
    fs.mkdirSync(outBaseDir, { recursive: true });
  }
  fs.mkdirSync(outDir, { recursive: true });
  
  // Read common CSS
  const cssPath = path.join(templatesDir, 'index.css');
  const cssContent = fs.readFileSync(cssPath, 'utf8');

  // Console Colors
  const colors = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    cyan: "\x1b[36m",
    magenta: "\x1b[35m",
    gray: "\x1b[90m"
  };

  console.log(`\n${colors.magenta}${colors.bright}==========================================${colors.reset}`);
  console.log(`${colors.magenta}${colors.bright}    📸 INSTAGRAM CAROUSEL GENERATOR    ${colors.reset}`);
  console.log(`${colors.magenta}${colors.bright}==========================================${colors.reset}\n`);
  
  console.log(`${colors.cyan}📂 Output Directory:${colors.reset}`);
  console.log(`${colors.gray}${outDir}${colors.reset}\n`);
  console.log(`${colors.bright}Processing ${carouselData.pages.length} slides...${colors.reset}\n`);

  // Process each page
  for (let i = 0; i < carouselData.pages.length; i++) {
    const page = carouselData.pages[i];
    const templatePath = path.join(templatesDir, `${page.type}.html`);
    
    if (!fs.existsSync(templatePath)) {
      console.warn(`${colors.yellow}⚠️  Template not found for type '${page.type}'. Skipping page ${i + 1}.${colors.reset}`);
      continue;
    }
    
    const htmlTemplate = fs.readFileSync(templatePath, 'utf8');
    
    // Pre-process specific content (like isOrange for end-poster)
    if (page.type === 'slide-05_discipline-today-freedom-forever-build-your-future' && page.headline) {
      page.headline = page.headline.map(line => ({
        ...line,
        isOrange: line.color === 'orange'
      }));
    }
    
    // Inject CSS into data
    const contentData = {
      ...page,
      css: cssContent
    };
    
    const outputPath = path.join(outDir, `page-${String(i + 1).padStart(2, '0')}.png`);
    
    console.log(`${colors.yellow}⏳ [${i + 1}/${carouselData.pages.length}] Generating:${colors.reset} ${page.type}...`);
    
    await nodeHtmlToImage({
      output: outputPath,
      html: htmlTemplate,
      content: contentData,
      transparent: true,
      puppeteerArgs: {
        defaultViewport: {
          width: 1080,
          height: 1350,
          deviceScaleFactor: 1
        }
      }
    });
    
    console.log(`${colors.green}✓ Saved:${colors.reset} page-${String(i + 1).padStart(2, '0')}.png\n`);
  }
  
  console.log(`${colors.magenta}${colors.bright}✨ Successfully generated all ${carouselData.pages.length} slides! ✨${colors.reset}\n`);
}

main().catch(err => {
  console.error('\n\x1b[31m\x1b[1m❌ Error generating images:\x1b[0m', err);
});
