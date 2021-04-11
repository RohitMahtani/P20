var car,wall;
var speed, weight;

function setup() {
  createCanvas(800,400);
  

  speed = random(5,9);
  weight = random(400,1500);

  car=createSprite(50,200,50,50);
  car.shapeColor = "white"
  car.velocityX=5;

  wall = createSprite(600,200,60,50);
  wall.shapeColor = "cyan"

}

function draw() {
  background(0);  

if(wall.x-car.x < (car.width-wall.width)/2){
  car.velocityX=0;
  var deformation=0.5 * weight * speed* speed/22509;
  if(deformation>180)
{
  car.shapeColor="red"
}
if(deformation<180 && deformation<100){
  car.shapeColor="green"
}
if(deformation<100){
  car.shapeColor="blue"
}
}
  drawSprites();
}