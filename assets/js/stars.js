document.addEventListener('DOMContentLoaded', function() {
    const starField = document.getElementById('stars');
    const numMeteors = 10;

    function createMeteor() {
        const meteor = document.createElement('div');
        meteor.classList.add('meteor');
        // Generar una posición aleatoria en la parte superior o izquierda de la pantalla
        if (Math.random() > 0.5) {
            meteor.style.top = `${-10 - Math.random() * 10}vh`;
            meteor.style.left = `${Math.random() * 100}vw`;
        } else {
            meteor.style.top = `${Math.random() * 100}vh`;
            meteor.style.left = `${-10 - Math.random() * 10}vw`;
        }
        meteor.style.animationDelay = `${Math.random() * 5}s`;
        starField.appendChild(meteor);
    }

    for (let i = 0; i < numMeteors; i++) {
        createMeteor();
    }
});
