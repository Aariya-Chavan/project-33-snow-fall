const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;
const Constraint = Matter.Constraint;
var engine;
var bg;
var runner,runnerImg;
var snow=[];
var maxSnow=100;

function preload(){
  bg=loadImage("snow1.jpg");
  //runnerImg=loadAnimation("snow1.jpg","snow2.jpg","snow3.jpg","snow4.webp","snow5.webp");
}

function setup() {

  engine = Engine.create();
  world = engine.world;

 createCanvas(800,400);
}
  
 //ground=createSprite(650,670);
//ground.addImage(gimg);
//ground.scale=3.2;
//ground.velocityX=-10;

//runner=createSprite(150,480);
//runner.addAnimation("runner",runnerImg)
//runner.scale=1.1;
//runner.velocityX=2;
//runner.setCollider("rectangle",15, -20,100,180) 

//if(frameCount % 275 === 0){
 // for(var i=0; i<maxSnow; i++){
 // ice.push(new Snow(random(0,1350), random(0,50)));
 // }
 // }


//}

function draw() {
    
  Engine.update(engine);
  background(bg);
  var rand = Math.round(random(1,4));

  if(frameCount % 5 === 0){
    snow.push(new Snow(random(0,800),30,30));
  }

  for(var j=0; j<snow.length; j++){
    snow[j].display();
  }

  drawSprites();

}

  


