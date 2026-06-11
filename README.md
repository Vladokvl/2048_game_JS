# JS2048 — 2048 Game (JavaScript)

Live demo: https://vladokvl.github.io/2048_game_JS/

## Introduction

JS2048 is a browser implementation of the classic 2048 puzzle game. It is built with HTML, SCSS and modern JavaScript (ES6+). Combine numbered tiles on a 4×4 grid to reach the 2048 tile. The project is optimized for both desktop and mobile play.

## Key Features

- Smooth tile movement and merge animations
- Responsive layout (desktop, tablet, mobile)
- Score tracking and best score display
- Win / lose detection with player feedback
- Restart / New Game functionality
- Keyboard and touch (swipe) controls

## Controls

- Arrow keys or WASD to move tiles
- Swipe on touch devices
- Click the "New Game" / "Restart" button to reset the board

## Game Rules

- Slide tiles to combine tiles with the same number
- When two tiles of the same value collide, they merge into one tile with their sum
- The goal is to create a tile with the value 2048
- The game ends when there are no valid moves left

## Technologies Used

- HTML5
- SCSS (Sass)
- JavaScript (ES6+)
- Parcel (bundler)
- npm
- GitHub Pages (deployment)

## Files of Interest

- [src/index.html](src/index.html)
- [src/modules/Game.class.js](src/modules/Game.class.js)
- [src/scripts/main.js](src/scripts/main.js)
- [src/styles/main.scss](src/styles/main.scss)
- [scripts/deploy.js](scripts/deploy.js)

## Requirements

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Node.js 14.x or newer and npm 6.x or newer (for local development and build)

## Installation and Setup

1. Clone the repository:

```bash
git clone https://github.com/Vladokvl/2048_game_JS.git
cd 2048_game_JS
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

Open the address shown in the terminal (the dev server will print the local URL).

4. Build for production:

```bash
npm run build
```

5. Deploy to GitHub Pages:

```bash
npm run deploy
```

The `deploy` script runs `scripts/deploy.js` from this repository.

## Demo

- Live demo: https://vladokvl.github.io/2048_game_JS/

## Design Specifications

- Desktop: 1280px
- Tablet: 640px
- Mobile: ≥ 320px

## Challenges

- Correct and performant tile movement & merging logic
- Smooth animations and performance on low-end devices
- Responsive UI and touch gesture handling
- Reliable game state management (score, win/lose detection)

## Contributing

- Feel free to open issues or submit pull requests
- Keep changes focused and include tests or screenshots when relevant
- Run linters and tests before submitting (see `package.json` scripts)

## License

This project is licensed under GPL-3.0 — see `package.json` for details.

Let me know which you'd prefer.
