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
          <img src="{{ '/assets/flash/papasscooperia/icon_300x300_papasscooperia.jpg' | relative_url }}" alt="Papa's Scooperia">
        </a>
      </div>
      <!-- Añadir más juegos aquí siguiendo el mismo formato -->
      <div class="game-item">
        <a href="{{ '/juegos/papas/tacomia' | relative_url }}">
          <img src="{{ '/assets/flash/papastacomia/papastacomia_300x300.jpg' | relative_url }}" alt="Papa's Taco Mia">
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
    flex: 1 1 150px; /* Flex-grow, flex-shrink, flex-basis */
    max-width: 150px; /* Ancho máximo para cada elemento */
    aspect-ratio: 1 / 1;
    border-radius: 8px; /* Opcional: Bordes redondeados */
    background-color: #f9f9f9; /* Opcional: Color de fondo para cada ítem */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Opcional: Sombra para cada ítem */
  }

  .game-item img {
    width: 100%; /* Ajusta el ancho de la imagen al tamaño del contenedor */
    height: 100%; /* Ajusta la altura de la imagen al tamaño del contenedor */
    object-fit: cover; /* Asegura que la imagen mantenga su proporción */
    border-radius: 8px; /* Opcional: Bordes redondeados para las imágenes */
  }

  /* Media Queries para pantallas más pequeñas */
  @media (max-width: 600px) {
    .game-item {
      flex: 1 1 100%; /* Ocupa todo el ancho en pantallas pequeñas */
      max-width: 100%;
    }
  }

  @media (min-width: 600px) and (max-width: 900px) {
    .game-item {
      flex: 1 1 45%; /* Ocupa el 45% del ancho en pantallas medianas */
    }
  }
</style>
