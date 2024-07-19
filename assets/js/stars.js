document.addEventListener('DOMContentLoaded', function() {
    const starField = document.getElementById('stars');
    const numMeteors = 10;

    function createMeteor() {
        const meteor = document.createElement('div');
        meteor.classList.add('meteor');
        meteor.style.top = `${Math.random() * 100}vh`;
        meteor.style.left = `${Math.random() * 100}vw`;
        meteor.style.animationDelay = `${Math.random() * 5}s`;
        starField.appendChild(meteor);
    }

    for (let i = 0; i < numMeteors; i++) {
        createMeteor();
    }
});
