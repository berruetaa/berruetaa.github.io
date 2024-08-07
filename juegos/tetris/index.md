---
layout: default
title: Tetris
---

<link rel="stylesheet" href="{{ '/assets/tetris/tetris.css' | relative_url }}">
<script src="{{ '/assets/tetris/tetris.js' | relative_url }}" defer></script>

<div id="tetris-container">
  <canvas id="tetris" width="300" height="600"></canvas>
  <div id="controls">
    <button id="left">←</button>
    <button id="right">→</button>
    <button id="rotate">↻</button>
    <button id="down">↓</button>
  </div>
</div>