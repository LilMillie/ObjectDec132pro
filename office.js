img = "";

function preload() {
    img = loadImage('office.avif');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Desk", 160, 160);
    noFill();
    stroke("#ff0000");
    rect(140, 140, 350, 275);
}