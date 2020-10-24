
var monkey , mvonkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstaclesGroup
var score = 0;
var survivalTime=0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 monkey=createSprite(80,315,20,20); 
 monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
   
  FoodGroup = new Group();
  obstaclesGroup = new Group();
  
  var survivalTime = 0;
}  


function draw() {
  background("pink");
if(ground.x<0){
  ground.x = ground.width/2;
}
 if(keyDown("space")){
   monkey.velocityY = -12;
 } 
  monkey.velocityY = monkey.velocityY + 0.8; 
  monkey.collide(ground);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+ score, 500, 50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("survival Time:"+ survivalTime, 100, 50);
   
   food();
  yObstacles();
  drawSprites();
}

function food() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(180,210));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
  
    banana.depth = monkey.depth;
    banana.depth = monkey.depth + 1;
    
     FoodGroup.add(banana);
  }
}
function yObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    //obstacle.debug = true;
    obstacle.velocityX = -10;
    obstacle.scale = 0.2;
 
    obstacle.y = 310;
   
      obstacle.addImage(obstacleImage);
    
    
obstaclesGroup. add(obstacle);
  }
}
