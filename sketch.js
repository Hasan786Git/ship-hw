
function preload(){
  ship1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  sea1=loadImage("sea.png");

}

function setup(){
  createCanvas(400,400);
  sea=createSprite(400,200,200,200);
  sea.addImage(sea1);
  sea.scale=0.3
  
  ship=createSprite(130,200,30,30);
  ship.addAnimation("movingShip",ship1)
  ship.scale=0.2
  
}

function draw() {
  background("white");
  drawSprites();
  
  sea.velocityX=-3
  if(sea.x<0){
    sea.x=sea.width/8
  }
 
}