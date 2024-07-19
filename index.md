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
    border: 2px solid rgba(255, 255, 255, 0.5); /* Borde negro con 50% de opacidad */
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
    display: flex; /* Usa flexbox para alinear los botones */
    flex-wrap: wrap; /* Permite que los botones se ajusten a la siguiente línea si es necesario */
    gap: 10px; /* Espacio entre los botones */
    margin: 0; /* Elimina el margen por defecto */
    padding: 0; /* Elimina el padding por defecto */
  }

  .social-btn, .useful-btn {
    flex: 1; /* Hace que los botones ocupen el mismo ancho */
    text-align: center; /* Centra el texto dentro del botón */
    padding: 10px 15px; /* Ajusta el padding del botón */
    border: 1px solid transparent; /* Asegura que el botón tenga borde pero no sea visible */
    border-radius: 5px; /* Bordes redondeados para los botones */
    text-decoration: none; /* Elimina el subrayado del enlace */
    color: #fff; /* Color del texto del botón */
    background-color: #007bff; /* Color de fondo del botón, puedes ajustar según el diseño */
  }

  .social-btn.twitter {
    background-color: #1da1f2; /* Color específico para el botón de Twitter */
  }

  .social-btn.instagram {
    background-color: #c13584; /* Color específico para el botón de Instagram */
  }

  .useful-btn.main-btn {
    background-color: #28a745; /* Color específico para los botones principales */
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
</div>