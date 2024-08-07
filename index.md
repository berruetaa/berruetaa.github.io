---
layout: default
title: "Juegos de Papa's"
title1: "Todos los juegos de Papa's"
---

<div class="container-wrapper">
  <div class="custom-container">
    <div class="games-grid">
      <div class="game-item">
        <a href="{{ '/juegos/papas/scooperia' | relative_url }}">
          <img src="{{ '/assets/flash/papasscooperia/icon_100x100_papasscooperia.jpg' | relative_url }}" alt="Papa's Scooperia">
        </a>
      </div>
      <div class="game-item">
        <a href="{{ '/juegos/papas/pastaria' | relative_url }}">
          <img src="{{ '/assets/flash/papaspastaria/papaspastaria_100x100.jpg' | relative_url }}" alt="Papa's Pastaria">
        </a>
      </div>
      <div class="game-item">
        <a href="{{ '/juegos/papas/pizzeria' | relative_url }}">
          <img src="{{ '/assets/flash/papaspizzeria/papaspizzeria_100x100.jpg' | relative_url }}" alt="Papa's Pizzeria">
        </a>
      </div>
      <div class="game-item">
        <a href="{{ '/juegos/papas/freezeria' | relative_url }}">
          <img src="{{ '/assets/flash/papasfreezeria/papasfreezeria_100x100.jpg' | relative_url }}" alt="Papa's Freezeria">
        </a>
      </div>
      <div class="game-item">
        <a href="{{ '/juegos/papas/tacomia' | relative_url }}">
          <img src="{{ '/assets/flash/papastacomia/papastacomia_100x100.jpg' | relative_url }}" alt="Papa's Taco Mia">
        </a>
      </div>
      <div class="game-item">
        <a href="{{ '/juegos/papas/donuteria' | relative_url }}">
          <img src="{{ '/assets/flash/papasdonuteria/donuteria_100x100.jpg' | relative_url }}" alt="Papa's Donuteria">
        </a>
      </div>
      <div class="game-item">
        <a href="{{ '/juegos/papas/hotdoggeria' | relative_url }}">
          <img src="{{ '/assets/flash/papashotdoggeria/papashotdoggeria_100x100.jpg' | relative_url }}" alt="Papa's Hotdoggeria">
        </a>
      </div>
      <div class="game-item">
        <a href="{{ '/juegos/papas/pancakeria' | relative_url }}">
          <img src="{{ '/assets/flash/papaspancakeria/papaspancakeria_100x100.jpg' | relative_url }}" alt="Papa's Pancakeria">
        </a>
      </div>
      <div class="game-item">
        <a href="{{ '/juegos/papas/cupcakeria' | relative_url }}">
          <img src="{{ '/assets/flash/papascupcakeria/papascupcakeria_100x100.jpg' | relative_url }}" alt="Papa's Cupcakeria">
        </a>
      </div>
      <div class="game-item">
        <a href="{{ '/juegos/papas/wingeria' | relative_url }}">
          <img src="{{ '/assets/flash/papaswingeria/papaswingeria_100x100.jpg' | relative_url }}" alt="Papa's Wingeria">
        </a>
      </div>
      <div class="game-item">
        <a href="{{ '/juegos/papas/chesseria' | relative_url }}">
          <img src="{{ '/assets/flash/papaschesseria/chesseria_100x100.jpg' | relative_url }}" alt="Papa's Chesseria">
        </a>
      </div>
      <div class="game-item">
        <a href="{{ '/juegos/papas/bakeria' | relative_url }}">
          <img src="{{ '/assets/flash/papasbakeria/icon_100x100_papasbakeria.jpg' | relative_url }}" alt="Papa's Bakeria">
        </a>
      </div>
      <div class="game-item">
        <a href="{{ '/juegos/papas/sushiria' | relative_url }}">
          <img src="{{ '/assets/flash/papassushiria/icon_100x100_papassushiria.jpg' | relative_url }}" alt="Papa's Sushiria">
        </a>
      </div>
    </div>
  </div>
</div>

<style>
  .games-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* Centra los elementos horizontalmente */
    gap: 20px;
  }

  .game-item {
    display: flex;
    align-items: center; /* Centra los iconos verticalmente */
    justify-content: center; /* Centra los iconos horizontalmente */
    flex: 1 1 100px; /* Flex-grow, flex-shrink, flex-basis */
    max-width: 150px; /* Ancho máximo para cada elemento */
    aspect-ratio: 1 / 1;
    border-radius: 8px; /* Opcional: Bordes redondeados */
  }

  .game-item img {
    width: 100%; /* Ajusta el ancho de la imagen al tamaño del contenedor */
    height: 100%; /* Ajusta la altura de la imagen al tamaño del contenedor */
    object-fit: cover; /* Asegura que la imagen mantenga su proporción */
    border-radius: 8px; /* Opcional: Bordes redondeados para las imágenes */
  }
</style>
