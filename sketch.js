
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObj,groundObject	;
var paperobj;
var dustbinImage, paperImage;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperobj=new paper(1200,650);

	Engine.run(engine);
  
}
function preload()
{
	paperImage=loadImage("sprites/paper.png");
	dustbinImage=loadImage("sprites/dustbingreen.png");
	
	
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paperobj.display();

}

