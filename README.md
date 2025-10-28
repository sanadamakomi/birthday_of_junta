# birthday_of_junta
A web AVG game to celebrate Teshima Junta's Birthday, built with **Vite + React**.
This project was made with love as a birthday gift, created in 2025。09.11. 
Even if it’s offline now, the memory stays forever. 💫

---
## 📦 Requirements

- [Node.js](https://nodejs.org/) ≥ 18  
- npm, [pnpm](https://pnpm.io/), or yarn  
- Recommended editor: **VS Code** with ESLint & Prettier extensions
---

## ⚙️ Setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/sanadamakomi/birthday_of_junta.git
cd birthday_of_junta

# Using npm
npm install
```
## 🧑‍💻 Development

Run the development server:

```bash
npm run dev
```
Then open your browser at http://localhost:5173

## 🏗️ Build for Production
Compile and bundle the project:

```bash
npm run build
```
Then open the local URL shown in your terminal (usually http://localhost:4173).

## 📁 Project Structure

```php
├─ src/                 # Source code
│  ├─ components/       # Reusable UI components
│  ├─ engine/           # Story engine
│  ├─ App.css           # Default css
│  ├─ App.jsx           # Root component
│  ├─ index.css         # Default css
│  ├─ main.jsx          # Entry point
│  └─ styles.css        # Main css
│
├─ src/                 # Other code
│  ├─ md2story.py       # Markdown to json
│  ├─ story_en.md       # Story markdown
│  ├─ story_jp.md       # Story markdown
│  └─ story_zn.md       # Story markdown
│
├─ public/              # Static files copied as-is to dist/
│  ├─ assets/           # Static assets (images, fonts, etc.)
│  ├─ 404.html          # 404 page
│  ├─ story.en.json     # story in English
│  ├─ story.ja.json     # story in Japanese
│  └─ story.zh.json     # story in Chinese
│
├─ dist/                # Production build output (not committed to Git)
├─ index.html           # Entry HTML template
├─ package.json         # Dependencies and scripts
└─ vite.config.js       # Vite configuration
```
