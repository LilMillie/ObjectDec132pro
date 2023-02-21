img = "";

function preload() {
    img = loadImage('living_room.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Plant", 85, 45);
    noFill();
    stroke("#ff0000");
    rect(60, 25, 250, 350)
}