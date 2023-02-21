img = "";

function preload() {
    img = loadImage('bottles.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Bottle", 45, 75);
    noFill();
    stroke("#ff0000");
    rect(30, 60, 150, 350);
}