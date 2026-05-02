# 📸 Instagram Carousel JSON to PNG Generator

![Open Source](https://img.shields.io/badge/Open%20Source-Yes-brightgreen?style=flat-square)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)
[![GitHub stars](https://img.shields.io/github/stars/TasyDev/Instagram-Carousel-JSON-to-PNG.svg?style=social&label=Star)](https://github.com/TasyDev/Instagram-Carousel-JSON-to-PNG/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/TasyDev/Instagram-Carousel-JSON-to-PNG.svg?style=social&label=Fork)](https://github.com/TasyDev/Instagram-Carousel-JSON-to-PNG/network/members)

Automate the creation of stunning Instagram carousel posts using dynamic JSON data and HTML templates. This tool takes a JSON file containing the content and styling for your carousel and generates high-quality, pixel-perfect PNG images ready for Instagram (1080 × 1350 px).

## 🚀 How It Works

1. **`carousel-data.json`**: Acts as your main data source. It defines each slide's content (headlines, bullet points, backgrounds, etc.) and specifies which template to use via the `type` property.
2. **`templates/`**: Contains HTML templates powered by Handlebars and styled globally using a shared `index.css` file.
3. **`index.js`**: The Node.js engine that merges your JSON data into the HTML templates, spins up a headless browser (Puppeteer), and snaps high-quality transparent PNGs.

## 🛠️ Prerequisites

Ensure you have the following installed on your machine:
* [Node.js](https://nodejs.org/) (v14 or higher recommended)
* `node-html-to-image` package. (If not installed, run `npm install node-html-to-image puppeteer`)

## 🎮 Usage

1. Open `carousel-data.json` and customize the data to fit your upcoming post. 
2. Open your terminal in this directory.
3. Run the following command:
   ```bash
   node index.js
   ```
4. The console will display a clean, formatted interface letting you know the generation progress.
5. Your newly generated carousel images will be automatically saved in the `out/` folder under a new folder named with the current date and time.

## 📁 Project Structure

* **`index.js`** - The core script you run to generate the images.
* **`carousel-data.json`** - The dynamic content feed.
* **`templates/`** - Contains all the HTML structures for your slides. Check the `README.md` inside this folder for instructions on creating new designs.
* **`out/`** - The output directory where all your generated images are saved. Check the `README.md` inside this folder for details on how outputs are organized.
