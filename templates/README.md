# Templates Directory (`/templates`)

This folder contains the visual backbone of your Instagram carousels. It includes the structural HTML files and the global CSS rules.

## How Templates Work

The generator uses Handlebars (`{{variable}}`) to inject the dynamic content from `carousel-data.json` directly into these HTML files. 

### 1. `index.css` (Global Styles)
This is your global stylesheet. Instead of writing CSS inside every single slide template, you can define colors (e.g., `--orange`, `--black`), typography (`--font-heading`), and general structure (the `1080x1350` body dimensions) here. 
This file gets automatically injected into every HTML template during generation.

### 2. HTML Files (`.html`)
These files represent specific layouts for your slides. 

* The filename (e.g., `slide-01_build-smarter-systems.html`) is **extremely important**. 
* The `type` property in `carousel-data.json` must exactly match the filename (without the `.html` extension) for the script to know which design to apply to which data.

## Creating a New Template Design

1. Create a new `.html` file inside a design folder (e.g., `Classic-desing/slide-06_new-design.html`).
2. Do not include `<link>` tags for CSS. Instead, put `<style>{{{css}}}</style>` inside the `<head>` of your file. This tells the generator to inject your `index.css`.
3. Build your layout using standard HTML.
4. Replace static text with Handlebars variables like `{{title}}`, `{{body}}`, or use loops like `{{#each listItems}}`.
5. Open `carousel-data.json`, create a new page, and set the `"type"` to your new filename (`"slide-06_new-design"`). Provide the matching variables in the JSON object.
6. Run `node index.js`!
