
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject, paper;
var world, gas;

function preload () {
    gas = loadSound("yt1s.com - MANUEL  GAS GAS GASOfficial Lyric Video頭文字DINITIAL D.mp3");
}


function setup() {
	
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paper = new ThrowPaper(200, 300);

	gas.loop();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  Engine.update(engine);
 
  groundObject.display();
  dustbinObj.display();
  paper.display();

}

function keyPressed () {

	// This code really makes the paper fly away so fast that it went past the canvas in the blink of an eye :o
	// This shouldn't be actually named "Crumpled Bally", it shuld be named "Sonic the Paperhog (Hedgehog)" XD 
	if (keyCode === UP_ARROW){
		Body.applyForce(paper.body, paper.body.position, {x : 130, y : -145});
	}

    console.log(keyCode === UP_ARROW);
	console.log(paper.body.position);

}