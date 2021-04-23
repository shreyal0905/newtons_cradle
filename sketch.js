
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5
var rope1,rope2,rope3,rope4,rope5

function preload()
{
	
}

function setup() {
	createCanvas(900, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(380,150,400,20);
	bobObject1 = new Bob(260,400,30);
	bobObject2 = new Bob(320,400,30);
	bobObject3 = new Bob(380,400,30);
	bobObject4 = new Bob(440,400,30);
	bobObject5 = new Bob(500,400,30);
	rope1 = new Rope(bobObject1.body,roof.body,-120,0)
	rope2 = new Rope(bobObject2.body,roof.body,-70,0)
	rope3 = new Rope(bobObject3.body,roof.body,-10,0)
	rope4 = new Rope(bobObject4.body,roof.body,50,0)
	rope5 = new Rope(bobObject5.body,roof.body,110,0)

	World.add(world,rope1)
	World.add(world,rope2)
	World.add(world,rope3)
	World.add(world,rope4)
	World.add(world,rope5)
	World.add(world,roof)
 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(50);

  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  keyPressed()
  drawSprites();
 
}

function keyPressed(){
	if(keyDown("UP")){
		Matter.Body.appyForce(bobObject1.body,bobObject1.body.position,{x:-230,y:0})
	}
}


//hey 