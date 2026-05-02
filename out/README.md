# Output Directory (`/out`)

This folder is the final destination for all your generated Instagram carousel images.

## How it Organizes Data

Every time you run the `node index.js` command, the application will automatically create a new sub-folder here.

The sub-folders are named dynamically based on the exact **Date and Time** of generation:
`YYYY-MM-DD_HH-MM-SS` (e.g., `2026-05-02_05-24-51`)

## Image Files

Inside those timestamped folders, you will find your generated `.png` files.
* They are generated in chronological order based on `carousel-data.json`.
* They are named `page-01.png`, `page-02.png`, etc., ensuring they are perfectly ordered when you go to upload them to Instagram.
* The files are automatically scaled to **1080 × 1350 px** (Instagram Portrait format).

**Tip:** You can safely delete older folders in here once you've published the carousels to save disk space.
