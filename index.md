---
layout: default
title: "Berrueta - Página Principal"
title1: "Sebastián Berrueta"
---

<style>
  .container-wrapper {
    display: flex;
    justify-content: center; /* Centra los recuadros horizontalmente */
    gap: 20px; /* Espacio entre los recuadros */
    flex-wrap: wrap; /* Permite que los recuadros se envuelvan si no caben en una fila */
  }

  .custom-container {
    display: inline-flex;
    margin-top: 20px;
    background-color: transparent; /* Fondo transparente */
    border: 2px solid rgba(255, 255, 255, 0.5); /* Borde blanco con 50% de opacidad */
    border-radius: 10px;
    padding: 20px;
    max-width: 400px; /* Ancho máximo del recuadro */
    width: 100%; /* Ancho completo dentro del contenedor */
    box-sizing: border-box; /* Incluye padding y border en el ancho total */
  }

  .custom-container h2 {
    margin-top: 0; /* Elimina el margen superior de los títulos */
    margin-bottom: 10px; /* Espacio debajo del título */
  }

  .social-links, .useful-links {
    display: flex;
    flex-wrap: wrap; /* Permite que los botones se envuelvan si no caben en una fila */
    gap: 10px; /* Espacio entre los botones */
    justify-content: center; /* Centra los botones horizontalmente */
    align-items: center; /* Centra los botones verticalmente en el contenedor si hay más alto */
    margin: 0; /* Elimina el margen por defecto */
    padding: 0; /* Elimina el padding por defecto */
  }

  .social-btn, .useful-btn {
    display: flex;
    align-items: center; /* Centra el texto verticalmente */
    justify-content: center; /* Centra el texto horizontalmente */
    height: 40px; /* Altura fija para todos los botones */
    padding: 0 15px; /* Ajusta el padding horizontal */
    border: 1px solid transparent; /* Asegura que el botón tenga borde pero no sea visible */
    border-radius: 5px; /* Bordes redondeados para los botones */
    text-decoration: none; /* Elimina el subrayado del enlace */
    color: #fff; /* Color del texto del botón */
    font-size: 14px; /* Tamaño del texto */
    overflow: hidden; /* Evita el desbordamiento del texto */
    white-space: nowrap; /* Evita el salto de línea en el texto */
    position: relative; /* Posición relativa para los elementos internos */
    transition: all 0.3s ease; /* Transición suave para la expansión */
  }

  .game-btn {
    position: relative;
    overflow: hidden;
  }

  .game-btn span {
    position: relative; /* Posición relativa para el texto */
    z-index: 2; /* Asegura que el texto esté por encima del overlay */
  }

  .game-btn.flappy {
    background: url('/assets/images/ELReoK.png') no-repeat center center; /* Ruta a la imagen de fondo */
    background-size: cover; /* Asegura que la imagen cubra todo el botón */
  }

  .game-btn.cpool {
    background: url('/assets/images/combopool.png') no-repeat center center;
    background-size: contain; /* Ajusta la imagen para que se ajuste dentro del botón */
    image-rendering: pixelated; /* Mantiene el aspecto pixelado de la imagen */
  }

  .game-btn .game-description {
    display: none; /* Oculto por defecto */
    position: absolute;
    bottom: 100%; /* Posicionado encima del botón */
    left: 50%;
    transform: translateX(-50%); /* Centra horizontalmente */
    background-color: rgba(0, 0, 0, 0.9); /* Fondo negro con opacidad */
    color: #fff; /* Texto blanco */
    padding: 10px;
    width: 200px; /* Ancho fijo para la descripción */
    box-sizing: border-box;
    border-radius: 5px; /* Bordes redondeados */
    z-index: 1; /* Asegura que el texto esté encima del botón */
    transition: opacity 0.3s ease; /* Transición suave para la visibilidad */
    opacity: 0; /* Inicialmente invisible */
    visibility: hidden; /* Inicialmente oculto */
  }

  .game-btn:hover .game-description {
    display: block; /* Muestra la descripción */
    opacity: 1; /* Hacer visible la descripción */
    visibility: visible; /* Asegura que la descripción sea visible */
    transform: translateX(-50%) translateY(-10px); /* Desplaza hacia arriba al expandir */
  }

  .game-btn:hover {
    height: 80px; /* Altura del botón cuando está expandido */
  }
</style>

# Página principal

<div class="container-wrapper">
  <div class="custom-container">
    <h2>Redes Sociales</h2>
    <div class="social-links">
      <a href="https://twitter.com/berruetx" class="social-btn twitter">Twitter</a>
      <a href="https://instagram.com/berruetx" class="social-btn instagram">Instagram</a>
    </div>
  </div>

  <div class="custom-container">
    <h2>Links útiles</h2>
    <div class="useful-links">
      <a href="https://liceo.berrueta.xyz" class="useful-btn main-btn">Ir a Liceo</a>
      <a href="https://tools.berrueta.xyz" class="useful-btn main-btn">Ir a Herramientas</a>
    </div>
  </div>

  <div class="custom-container">
    <h2>Juegos</h2>
    <div class="useful-links">
      <div class="game-btn flappy">
        <span>Smashy Pipe</span>
        <div class="game-description">
          <h3>Smashy Pipe</h3>
          <p>Un juego donde tienes que ayudar a un tubo a evitar obstáculos. ¡Diviértete!</p>
        </div>
      </div>
      <div class="game-btn cpool">
        <span>Combo Pool</span>
        <div class="game-description">
          <h3>Combo Pool</h3>
          <p>Un emocionante juego de billar con combos y desafíos únicos.</p>
        </div>
      </div>
    </div>
  </div>
</div>
