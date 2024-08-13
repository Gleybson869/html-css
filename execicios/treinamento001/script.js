document.addEventListener('DOMContentLoaded', function() {
    const imageContainers = document.querySelectorAll('.image-container img');
    function addReflection(image) {
        image.classList.add('reflection');
        setTimeout(() => {
            image.classList.remove('reflection');
        }, 500);
    }

    //Adiciona reflexo a cada minuto
    setInterval(() => {
        imageContainers.forEach(image => {
            addReflection(image);
        });
    }, 60000);

    //adiciona reflexo qunado o mouse passar por cima
    imageContainers.forEach(image => {
        image.addEventListener('mouseover', () => addReflection(image));
    });
});