let balls = [];

// var slider;

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '1');

    // Move the canvas so it’s inside our <div id="sketch-holder">.
    canvas.parent('sketch-holder');

//   slider = createSlider(0, 360, 180, 40);
//   slider.position(260, 610);
//   slider.style('width', '80px');

}

function draw() {
  

  for (let i = 0; i < balls.length; i++) {
    balls[i].update();
    balls[i].render();
    if (balls[i].ballisFinished()) {
      balls.splice(i, 1);
    }
  }
}

function mousePressed() {
  if (mouseY < windowHeight) {
    for (let i = 0; i < 10; i++) {
      balls.push(new Ball((mouseX + random(-30, 30)), mouseY + random(-30, 30)));
    }
  }
}