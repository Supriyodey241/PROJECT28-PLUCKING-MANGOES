var ground;
var stone;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
var tree,treeimg;
var boy,boyimg;
var attach;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
  treeimg=loadImage("tree.png");
  boyimg=loadImage("boy.png");
}

function setup() {
	createCanvas(1500, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(10,590,20000,30);
	stone = new Stone(100,460,40);

  mango1 = new Mango(1200,230,40);
  mango2 = new Mango(1100,220,35);
  mango3 = new Mango(1000,240,38);
  mango4 = new Mango(1050,200,34);
  mango5 = new Mango(1300,185,41);
  mango6 = new Mango(1200,150,40);
  mango7 = new Mango(1400,200,38);
  mango8 = new Mango(1250,89,43);
  mango9 = new Mango(1150,100,35);
  mango10 = new Mango(1110,120,40);

  attach = new SlingShot(stone.body,{x:161,y:410});

  tree=createSprite(1200,320);
  tree.addImage(treeimg);
  tree.scale=0.45;

  boy=createSprite(250,510);
  boy.addImage(boyimg);
  boy.scale=0.115;

  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  detectcollision(stone,mango6);
  detectcollision(stone,mango7);
  detectcollision(stone,mango8);
  detectcollision(stone,mango9);
  detectcollision(stone,mango10);

  drawSprites();

  stone.debug="true";

  ground.display();
  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
  attach.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body, {x:235,y:420})
    attach.attach(stone.body);
  }
}

function detectcollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  if(distance<=lmango.r+lstone.r){
    Matter.Body.setStatic(lmango.body,false);
  }
}