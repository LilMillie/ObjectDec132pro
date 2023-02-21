img = "";

function preload() {
    img = loadImage('fruitbowl.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Banana", 220, 25);
    noFill();
    stroke("#ff0000");
    rect(200, 5, 440, 200);
}