---
layout: default
title: "Sebastián Berrueta"
---

<style>
  .container-wrapper {
    display: flex;
    justify-content: center; /* Centra los recuadros horizontalmente */
    gap: 20px; /* Espacio entre los recuadros */
    flex-wrap: wrap; /* Permite que los recuadros se envuelvan si no caben en una fila */
  }

  .custom-container {
    background-color: transparent; /* Fondo transparente */
    border: 2px solid rgba(0, 0, 0, 0.5); /* Borde negro con 50% de opacidad */
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
    display: flex; /* Usa flexbox para los enlaces */
    flex-direction: column; /* Los enlaces se apilan verticalmente */
  }

  .social-links a, .useful-links a {
    margin-bottom: 10px; /* Espacio entre los enlaces */
  }

  .social-links a:last-child, .useful-links a:last-child {
    margin-bottom: 0; /* Elimina el margen del último enlace */
  }

  /* Alineación horizontal para botones dentro de los recuadros */
  .social-links, .useful-links {
    display: flex; /* Usar flexbox para alinear los botones horizontalmente */
    flex-wrap: wrap; /* Permitir el ajuste a la siguiente línea si es necesario */
    gap: 10px; /* Espacio entre los botones */
  }

  .social-links a, .useful-links a {
    flex: 1; /* Hace que los botones ocupen el mismo ancho */
    text-align: center; /* Centra el texto dentro de los botones */
  }
</style>

# Página principal

<div class="container-wrapper">
  <div class="custom-container">
    <h2>Redes Sociales</h2>
    <div class="social-links">
      <a href="https://twitter.com/berruetx" class="btn twitter">Twitter</a>
      <a href="https://instagram.com/berruetx" class="btn instagram">Instagram</a>
    </div>
  </div>

  <div class="custom-container">
    <h2>Links útiles</h2>
    <div class="useful-links">
      <a href="https://liceo.berrueta.xyz" class="btn main-btn">Ir a Liceo</a>
      <a href="https://tools.berrueta.xyz" class="btn main-btn">Ir a Herramientas</a>
    </div>
  </div>
</div>
