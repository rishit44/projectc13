var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleimg
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleimg= loadImage("apple.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}
function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  spawncloud();
  drawSprites();
}

function spawncloud(){
  if(frameCount % 80=== 0){
    apple=createSprite(300,100,40,10);
    apple.velocityX= -3;
    apple.addImage(appleimg);
    apple.scale=0.1;
   apple.y = Math.round(random(10,60))
   apple.depth=apple.depth;
    apple.depth=apple.depth+1;
  }
}
