var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  rectangle = createSprite(200, 50, 50, 50);
  rectangle.shapeColor = "yellow";
  rectangle.velocityY = 5;
  rectangle2 = createSprite(200, 750, 50, 50);
  rectangle2.shapeColor = "orange"; 
  rectangle2.velocityY = -5;
  rect1 = createSprite(350, 200, 50, 50);
  rect2 = createSprite(150, 200, 50, 50);
}

function draw() {
  background(0,0,0);  

  rect1.x = World.mouseX;
  rect1.y = World.mouseY;

if(isTouching(rect1, rect2)) {
rect1.shapeColor="red";
rect2.shapeColor="red";
}
else{
rect1.shapeColor="green";
rect2.shapeColor="greeen";
}
bounceOff(movingRect, fixedRect);
bounceOff(rectangle, rectangle2);

  drawSprites();
}
