var fixedRect,movingRect,gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(800,400);
   fixedRect = createSprite(400, 200, 50, 50);
   fixedRect.shapeColor="green";
   fixedRect.debug = true;

   movingRect = createSprite(400,200,80,30);
   movingRect.shapeColor = "green";
   movingRect.debug = true;

   gameObject1 = createSprite(100,100,50,50);
   gameObject1.shapeColor="green";
   gameObject2= createSprite(200,100,50,50);
   gameObject2.shapeColor = "green";
   gameObject3 = createSprite(300,100,50,50);
   gameObject3.shapeColor = "green";
   gameObject4 = createSprite(400,100,50,50);
   gameObject4.shapeColor = "green";

   movingRect.velocityY=-5;
   fixedRect.velocityY=+5;
}

function draw() {
  background(0,0,0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  bounceOff(movingRect,fixedRect);

if(isTouching(movingRect,gameObject3)){

gameObject3.shapeColor="red";
movingRect.shapeColor="red";
}
else
{

gameObject3.shapeColor="blue";
movingRect.shapeColor="blue";
}


  drawSprites();
}
