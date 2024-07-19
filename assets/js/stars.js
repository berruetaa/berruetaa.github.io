document.addEventListener('DOMContentLoaded', function() {
    const starField = document.getElementById('stars');
    const numStars = 100;  // Número total de estrellas

    function createStar() {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.opacity = Math.random();
        starField.appendChild(star);

        // Cada estrella tiene una probabilidad de caer
        if (Math.random() < 0.1) {
            // Crear estela
            const trail = document.createElement('div');
            trail.classList.add('trail');
            trail.style.top = `${parseFloat(star.style.top)}px`;
            trail.style.left = `${parseFloat(star.style.left)}px`;
            starField.appendChild(trail);

            // Animar la caída y la estela
            star.style.animation = `falling ${Math.random() * 3 + 2}s linear infinite`;
            trail.style.animation = `trail ${Math.random() * 2 + 1}s ease-out infinite`;
        }
    }

    // Crear estrellas
    for (let i = 0; i < numStars; i++) {
        createStar();
    }
});
