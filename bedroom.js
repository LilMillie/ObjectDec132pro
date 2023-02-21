img = "";

function preload() {
    img = loadImage('bed_room.avif');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Bed", 80, 75);
    noFill();
    stroke("#ff0000");
    rect(70, 60, 550, 350);
}