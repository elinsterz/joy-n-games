class Ball {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.speed = 75;
      this.gravity = 0.1;
      this.diameter = (dist(x, y, mouseX, mouseY)) * 0.8;
  
      this.ax = random(-this.speed, this.speed);
      this.ay = random(-this.speed, this.speed);
  
      this.colour = '#FFF';
    }
  
    update() {
      this.diameter = this.diameter - 0.5;
      this.x += this.ax / 2;
      this.y += this.ay / 2;
  
      this.x += random(-this.speed / 2, this.speed / 2);
      this.y += random(-this.speed / 2, this.speed / 2);
    }
  
    ballisFinished() {
      if (this.diameter < 0) {
        return true;
      }
    }
  
    render() {
      //print(this.colour);
      noStroke();
      if (this.diameter > 0) {
        fill(this.colour);
        ellipse(this.x, this.y, this.diameter, this.diameter);
      }
  
    }
  }