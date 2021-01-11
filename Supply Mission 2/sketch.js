var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var boxSprite,boxSprite2,boxSprite3;
var boxBody,boxBody2,boxBody3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	boxSprite =  createSprite(width/2,650,200,20);
	boxSprite.shapeColor = color("red");
	boxSprite2 = createSprite(490,620,20,100);
	boxSprite2.shapeColor = color("red");
	boxSprite3 = createSprite(310,620,20,100);
	boxSprite3.shapeColor = color("red");

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	
	boxBody = Bodies.rectangle(width/2,650,200,20,{isStatic:true});
	World.add(world, boxBody);

	boxBody2 = Bodies.rectangle(490,620,20,100,{isStatic:true});
	World.add(world, boxBody2);

	boxBody3 = Bodies.rectangle(310,620,20,100,{isStatic:true});
	World.add(world, boxBody3);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y; 

  boxSprite.x= boxBody.position.x;
  boxSprite.y= boxBody.position.y;
 
  boxSprite2.x= boxBody2.position.x;
  boxSprite2.y= boxBody2.position.y;

  boxSprite3.x= boxBody3.position.x;
  boxSprite3.y= boxBody3.position.y;

  packageSprite.collide(boxSprite);
  packageSprite.collide(boxSprite3);
  drawSprites();



 
}

function keyPressed() {
 if (keyCode === 40) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);
    console.log(width/2);
  }
}



