class Stone {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.2,
          'friction':3,
          'density':10.0,
          'mass':10
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(5);
      stroke(100,100,100);
      fill(155,155,155);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  