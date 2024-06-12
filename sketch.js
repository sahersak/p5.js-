
var numFrames = 6;

var frame = 0

var images = new Array(numFrames);



function preload() {

    images[0] = loadImage("image0.jpeg");

    images[1] = loadImage("image1.jpeg");

    images[2] = loadImage("image2.jpeg");

    images[3] = loadImage("image3.jpeg");

    images[4] = loadImage("image4.jpeg");

    images[5] = loadImage("image5.jpeg");

}

function setup() {

    createCanvas(600, 400);

    frameRate(15);

    background(255);

}



function draw() {

background(255);

frame++;

if (frame == numFrames) frame = 0;

image(images[frame], mouseX - 75, mouseY - 100);

}








