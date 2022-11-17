const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var pueblopirata
var torre
var torrerect

function preload() {
 pueblopirata = loadImage("./assets/background.gif")
torre = loadImage("./assets/tower.png")

}
function setup() {
  var options  ={
    isStatic: true
  }



  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  ground =Bodies.rectangle(0,height-10,width,5,options)
  torrerect=Bodies.rectangle(160,350,160,310,options)
  World.add(world,ground)



 
}

function draw() {
  image(pueblopirata,0,0,width,height);
 

  Engine.update(engine);
  rect(ground.position.x,ground.position.y,width,10)
  push();
  imageMode(CENTER) 
  image(torre,torrerect.position.x,torrerect.position.y,160,310)
  pop()

}
