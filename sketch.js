
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane;
var hammer;
var stone1,stone2;
var rubber1,rubber2;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8,sand9,sand10;
var iron1,iron2;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer=new Hammer(200,200);
	plane=new Plane(windowWidth/2,height,windowWidth,50);
	stone1=new Stone(windowWidth/4,windowHeight/4,80,90);
	stone2=new Stone(windowWidth*3/4,windowHeight/4,75,83);
	rubber1=new Rubber(windowWidth/3,windowHeight/2,25);
	rubber2=new Rubber(windowWidth*2/3,windowHeight/2,35);
	sand1=new Sand(windowWidth/2,windowHeight/2,5,5);
	sand2=new Sand(windowWidth/2,windowHeight/2,5,5);
	sand3=new Sand(windowWidth/2,windowHeight/2,5,5);
	sand4=new Sand(windowWidth/2,windowHeight/2,5,5);
	sand5=new Sand(windowWidth/2,windowHeight/2,5,5);
	sand6=new Sand(windowWidth/2,windowHeight/2,5,5);
	sand7=new Sand(windowWidth/2,windowHeight/2,5,5);
	sand8=new Sand(windowWidth/2,windowHeight/2,5,5);
	sand9=new Sand(windowWidth/2,windowHeight/2,5,5);
	sand10=new Sand(windowWidth/2,windowHeight/2,5,5);

	iron1=new Iron(windowWidth/5,windowHeight/2,50,25);
	iron2=new Iron(windowWidth*4/5,windowHeight/2,40,35);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	hammer.display();
	plane.display();
	stone1.display();
	stone2.display();
	rubber1.display();
	rubber2.display();
	sand1.display();
	sand2.display();
	sand3.display();
	sand4.display();
	sand5.display();
	sand6.display();
	sand7.display();
	sand8.display();
	sand9.display();
	sand10.display();

	iron1.display();
	iron2	.display();


  drawSprites();
 
}



