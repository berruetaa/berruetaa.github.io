---
layout: none
title: Papa's taco mia
---

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ page.title }}</title>
    <style>
        html, body {
            height: 100%;
            margin: 0;
            overflow: hidden; /* Evita scrollbars */
            background: #000; /* Fondo negro */
        }
        #flash-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        embed, object {
            width: 100%;
            height: 100%;
        }
    </style>
    <script src="https://unpkg.com/@ruffle-rs/ruffle"></script>
</head>
<body>
    <div id="flash-container">
        <object type="application/x-shockwave-flash" data="{{ "/assets/flash/game.swf" | relative_url }}">
            <!-- Mensaje alternativo para navegadores que no soportan Flash -->
            <param name="movie" value="{{ "/assets/flash/game.swf" | relative_url }}">
        </object>
    </div>
    <script>
        window.RufflePlayer = window.RufflePlayer || {};
        window.addEventListener("DOMContentLoaded", function() {
            const ruffle = window.RufflePlayer.newest();
            const container = document.getElementById("flash-container");
            const object = container.querySelector("object");
            const player = ruffle.createPlayer();
            container.innerHTML = ""; // Limpia el contenido existente en el contenedor
            container.appendChild(player);
            player.load("{{ "/assets/flash/game.swf" | relative_url }}");
        });
    </script>
</body>
</html>