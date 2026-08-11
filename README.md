# Pig Game

A browser implementation of the Pig dice game with local dice images and a JavaScript game controller.

> [!TIP]
> Open `Pig Game/index.html` directly in a browser; all game assets and scripts are contained in that directory.


<p align="center">
  <img src="https://skillicons.dev/icons?i=html,css,javascript&theme=light" alt="HTML, CSS, and JavaScript" />
</p>

## Overview

The application is contained in `Pig Game`:

- `index.html` — game interface.
- `script.js` — game logic.
- `style.css` — styling.
- `dice-1.png` through `dice-6.png` — dice faces.
- `pig-game-flowchart.png` — flowchart asset.
- `notes.md` — DOM and JavaScript learning notes.

## Preview

![Pig game preview](https://noah-readme-assets-v3.vercel.app/Pig-Game/browser.png)

## Usage

Open `Pig Game/index.html` in a browser. The project is a static HTML, CSS, and JavaScript application with no package manifest or automated test suite.

## Status

This is a standalone browser-game and learning project. The notes file contains its own instructional material and formatting choices.

## Game flow

```mermaid
flowchart LR
    A[Pig Game/index.html] --> B[script.js game controller]
    C[dice-1.png through dice-6.png] --> B
    D[style.css] --> A
    B --> E[Browser dice game]
```
