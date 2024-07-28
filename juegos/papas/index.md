---
layout: default
title: "Juegos de Papa's"
title1: "Juegos de Papa's"
---

<div class="container-wrapper">
  <div class="custom-container">
    <h2>Juegos de Papa's</h2>
    <div class="games-grid">
      <div class="game-item">
        <a href="{{ '/juegos/papas/scooperia' | relative_url }}">
          <img src="{{ '/assets/flash/papasscooperia/icon_300x300_papasscooperia.jpg' | relative_url }}" alt="Papa's Scooperia">
          <p>Papa's Scooperia</p>
        </a>
      </div>
      <!-- Añadir más juegos aquí siguiendo el mismo formato -->
      <div class="game-item">
        <a href="{{ '/juegos/papas/tacomia' | relative_url }}">
          <img src="{{ '/assets/flash/papastacomia/papastacomia_300x300.jpg' | relative_url }}" alt="Papa's Taco Mia">
          <p>Papa's Taco Mia</p>
        </a>
      </div>
    </div>
  </div>
</div>

<style>
  .games-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  .game-item {
    text-align: center;
  }
  .game-item img {
    width: 150px;
    height: 150px;
  }
  .game-item p {
    margin-top: 10px;
    font-size: 1.2em;
  }
</style>