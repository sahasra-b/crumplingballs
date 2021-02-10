
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var trashcan1, paper1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	paper1.display();
trashcan1.display();

	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(700,320,70,70);
    trashcan1= new Paper (810, 350);

	//Create the Bodies Here.
	this.body = Bodies.Circle(x, y,radius, options);
	this.body = Bodies.rectangle(x, y, width, height, options);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  




  drawSprites();
 
}

function keyPressed (){
if (keyCode === UP_ARROW){

	Matter.Body.applyForce (paperObject.body,paperObject.body.position,{x:85, y:85})
}


}