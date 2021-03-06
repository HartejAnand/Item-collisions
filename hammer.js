class Hammer{
    constructor(x, y) {
    var options = {
        'density':2,
        'friction':1,
        'restitution':0.1
    }
      this.body = Bodies.rectangle(x, y, 100, 50, options);
      this.width = 100;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x=mouseX;
      pos.y=mouseY;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      noStroke();
      fill(55,0,255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };