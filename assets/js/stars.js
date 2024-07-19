document.addEventListener('DOMContentLoaded', function() {
    const starField = document.getElementById('stars');
    const numStars = 150;  // Ajusta el número de estrellas aquí

    // Crear estrellas
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.opacity = Math.random();
        star.style.animation = `twinkling ${Math.random() * 2 + 1}s infinite`;
        starField.appendChild(star);
    }
});
