document.getElementById('coloPicker').addEventListener('input',changeColor);

let light = document.getElementById('light');
let lightColor = '#ff0000';
let mousePos = {x: window.innerWidth / 2,y: window.innerHeight / 2};
let currentPos = { x: window.innerWidth / 2,y: window.innerHeight / 2};
let angle = 0;
let mouseMoved = false;

document.addEventListener('mousemove',(event) =>{
    mousePos.x = event.clientX;
    mousePos.y = event.clientY;
    mouseMoved = true;
});

function changeColor(event){
    lightColor = event.target.value;
    light.style.backgroundColor = lightColor;
}

function updateLightPosition(){
    //movimento autônomo em forma de onda
    let autonomousX = window.innerWidth / 2 + Math.sin(angle)*100;
    let autonomousY = window.innerHeight / 2 + Math.cos(angle)*100;

    //interpolação para movimento suave entre a posição autônoma e a posição do mouse
    currentPos.x += ((mouseMoved ? mousePos.x: autonomousX) - currentPos.x) * 0.05;
    currentPos.y += ((mouseMoved ? mousePos.y: autonomousY) - currentPos.y) * 0.05;

    light.style.left = `${currentPos.x - 10}px`;
    light.style.top = `${currentPos.y - 10}px`;

    angle += 0.02; // Aumenta o ângulo para mover a luz 

    requestAnimationFrame(updateLightPosition);
}

updateLightPosition();