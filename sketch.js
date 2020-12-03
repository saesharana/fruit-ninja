var PLAY=1,END=0,gameState=1,sword,fruit1,fruit2,fruit3,fruit4;
var monster,swordImage,monsterImage,gameoverImagefruitGroup;
var gameover,score=0,knifeSwooshSound,gameOverSound,position;
var fruit;
   
function preload(){
  //load images
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  monsterImage =loadImage("alien1.png");
  swordImage = loadImage("sword.png");
  gameoverImage = loadImage("gameover.png");
  knifeSwooshSound = loadSound("Sword-Shoowsh-Slow-www.fesliyanstudios.com.mp3");
  gameOverSound = loadSound("game-over-sound-effect.mp3");

  
}

function setup(){
  createCanvas(400,400);
  sword = createSprite(40,200,20,20);  
  sword.scale=0.7;
  sword.addImage(swordImage);
  
  fruitGroup=createGroup();
  enemyGroup=createGroup();
}
function draw(){
  background("blue");
  
   if(gameState === PLAY){
  Enemy();
  fruits();
     
  sword.y=World.mouseY;
  sword.x=World.mouseX;  

  if(fruitGroup.isTouching(sword)){
    fruitGroup.destroyEach();
    knifeSwooshSound.play();
    score=score+1;
  }
    else if(enemyGroup.isTouching(sword)){
      
        gameState = END;
    gameOverSound.play();
    fruitGroup.destroyEach();
    enemyGroup.destroyEach();
      
    fruitGroup.velocityX=0;
    enemyGroup.velocityX=0;
      
    sword.addImage(gameoverImage);
    sword.x=200;
    sword.y=200;
      
  }
  }
    
  drawSprites();
  stroke("yellow")
  fill("yellow")
  textSize(20);
  text(" Score = "+score,300,25);

  }
  function fruits(){
  
 if(World.frameCount%80===0){ 
  fruit=createSprite(400,200,20,20);
  fruit.scale=0.2;
//fruit.debud=true;
  r=Math.round(random(1,4)); 
  if(r ==1 ) {
  fruit.addImage(fruit1);
  } else if (r == 2){
    fruit.addImage(fruit2)
    } else if (r == 3){
    fruit.addImage(fruit3)
      } else if (r == 4){
    fruit.addImage(fruit4)
      }
   fruit.y=Math.round(random(50,340));
   fruit.setlifetime=100;
   
  position = Math.round(random(1,2));
    if(position==1)
    {
      fruit.x=400;
      fruit.velocityX=-(7+(score/4));
    }
    else
    {
    if(position==2)
    {
     fruit.x=0;
     fruit.velocityX=(7+(score/4));
    }
    }
   
   fruitGroup.add(fruit);
  }
  }

  function Enemy(){

   if(World.frameCount%200===0){ 
   monster=createSprite(400,200,20,20);
   monster.addImage("moving",monsterImage);
   monster.y=Math.round(random(100,300)); 
   monster.velocityX=-(8+(score/10));
   monster.setlifetime=50;

   enemyGroup.add(monster);  
  }
  }
