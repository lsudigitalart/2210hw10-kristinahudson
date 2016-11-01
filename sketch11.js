var p = [];

function setup() {
  createCanvas(1200, 680);
  for (var i = 0; i < 100; i++) {
    x = random(width);
    y = random(height);
    r = i + .5;
    p[i] = new Particle(x, y, r);
  }
}

function draw() {
  background(45, 204, 211);
  for (var i = 0; i < p.length; i++) {
    p[i].move();
    p[i].display();
  }
}

function Particle(tempX, tempY, tempR) {
  this.x = tempX;
  this.y = tempY;
  this.r = tempR;
  this.speed = 1;

  this.move = function() {
    this.x += random(-this.speed, this.speed)*50;
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    fill(78, 220, 202, 230);
    noStroke();
    ellipse(this.x, this.y, this.r, this.r);
  };
}
