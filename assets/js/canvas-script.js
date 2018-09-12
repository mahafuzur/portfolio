var particles = [];

var Particle = function (position) {
  this.acceleration = createVector(0, 0.05);
  this.velocity = createVector(random(-0.5, 0.5), random(-0.5, 0.5));
  this.position = position.copy();
};

Particle.prototype.run = function () {
  this.update();
  this.display();
  this.intersects();
};

Particle.prototype.update = function () {
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);

  this.acceleration.mult(-0.1);
  if (this.position.x < 0) this.position.x = width;
  if (this.position.x > width) this.position.x = 0;

  if (this.position.y < 0) this.position.y = height;
  if (this.position.y > height) this.position.y = 0;
};

Particle.prototype.intersects = function () {
  for (var i = 0; i < particles.length; i++) {
    var other = particles[i];

    if (other != this) {
      var dir = p5.Vector.sub(this.position, other.position);
      if (dir.mag() < 12) {
        dir.setMag(0.1);
        this.applyForce(dir);

        if (dir.mag() < 100) {
          stroke(255, 50);
          strokeWeight(0.5);
          line(this.position.x, this.position.y, other.position.x, other.position.y);
        }
      }
    }
  }
};

Particle.prototype.applyForce = function (f) {
  this.acceleration.add(f);
};

Particle.prototype.display = function () {
  noStroke();
  fill(255, 200);
  ellipse(this.position.x, this.position.y, 4, 4);
  var mPos = createVector(mouseX, mouseY);
  var dir = p5.Vector.sub(this.position, mPos);

  if (dir.mag() < 160) {
    stroke(255, 70);
    strokeWeight(0.5);
    line(this.position.x, this.position.y, mouseX, mouseY);
  }
};


function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 170; i++) {
    particles.push(new Particle(createVector(random(width), random(height))));
  }
}

function draw() {
  clear();
  background(0, 0);
  var p;
  for (var i = particles.length-1; i >= 0; i--) {
    p = particles[i];
    p.run();
  }
}