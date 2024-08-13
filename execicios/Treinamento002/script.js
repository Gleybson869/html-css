let song;
let fft;

function preload() {
    song = loadSound('audio/luna.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    song.play();
    fft= new p5. FFT();
    fft.setInput(song);
}

function draw() {
    background(0);
    let spectrum = fft.analyze();
    noStroke();
    fill(255);
    for (let i = 0; i < spectrum.length; i++) {
        let x = map(i, 0, spectrum.length, 0, width);
        let h = -height + map(spectrum[i], 0, 255, height, 0);
        rect(x, height, width / spectrum.length, h);
    }
}