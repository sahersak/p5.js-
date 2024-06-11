let screen = 0;
let y = -20;
let x = 200;
let speed = 2;
let score = 0;
let targetSize = 20;
let targetColor;
let paddleColor;
let winScore = 100;

function setup() {
  createCanvas(600, 400);
  targetColor = color(255, 0, 0);
  paddleColor = color(0, 0, 255);
}

function draw() {
  if (screen == 0) {
    startScreen();
  } else if (screen == 1) {
    gameOn();
  } else if (screen == 2) {
    endScreen();
  } else if (screen == 3) {
    winScreen();
  }
}

function startScreen() {
  background(50, 150, 200);
  
  // Draw animated background
  drawAnimatedBackground();

  fill(255);
  textAlign(CENTER);
  textSize(32);
  text('COLLECT THE BALLS', width / 2, height / 2 - 60);
  textSize(20);
  text('Make 100 points to win the game', width / 2, height / 2 - 20);
  text('Enter to start', width / 2, height / 2 + 20); //starting game part
  reset();
}

function drawAnimatedBackground() {
  for (let i = 0; i < width; i += 30) {
    for (let j = 0; j < height; j += 30) {
      fill(random(100, 255), random(100, 255), random(100, 255), 150);
      ellipse(i, j, 20, 20);
    }
  }
}

function gameOn() {
  background(0, 50, 100);
  fill(255);
  textSize(16);
  text("Score: " + score, 30, 20);
  
  fill(targetColor);
  ellipse(x, y, targetSize, targetSize);
  
  fill(paddleColor);
  rectMode(CENTER);
  rect(mouseX, height - 10, 100, 15, 10);
  
  y += speed;
  
  if (y > height) {
    screen = 2;
  }
  
  if (y > height - 25 && x > mouseX - 50 && x < mouseX + 50) {
    y = -20;
    speed += 0.5;
    score += 1;
    targetColor = color(random(255), random(255), random(255));
    targetSize = random(20, 30);
  }
  
  if (y == -20) {
    pickRandom();
  }
  
  if (score >= winScore) {
    screen = 3;
  }
}

function pickRandom() {
  x = random(20, width - 20);
}

function endScreen() {
  background(200, 50, 50);
  fill(255);
  textAlign(CENTER);
  textSize(32);
  text('GAME OVER', width / 2, height / 2 - 20);
  textSize(20);
  text("SCORE: " + score, width / 2, height / 2 + 10);
  text('Click to play again', width / 2, height / 2 + 40);
}

function winScreen() {
  background(50, 200, 50);
  fill(255);
  textAlign(CENTER);
  textSize(32);
  text('YOU WIN!', width / 2, height / 2 - 20);
  textSize(20);
  text("FINAL SCORE: " + score, width / 2, height / 2 + 10);
  text('Click to play again', width / 2, height / 2 + 40);
}

function mousePressed() {
  if (screen == 0) {
    screen = 1;
  } else if (screen == 2 || screen == 3) {
    screen = 0;
  }
}

function reset() {
  score = 0;
  speed = 2;
  y = -20;
  targetSize = 20;
  targetColor = color(255, 0, 0);
  paddleColor = color(0, 0, 255);
}


