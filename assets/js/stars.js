document.addEventListener('DOMContentLoaded', function() {
    const starField = document.getElementById('stars');
    const numStars = 200;  // Número total de estrellas

    function createStar() {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        starField.appendChild(star);
    }

    for (let i = 0; i < numStars; i++) {
        createStar();
    }
});
