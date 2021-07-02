var path,mainCyclist;
var pathImg,mainRacerImg1,mainRacerImg2;

var END = 0;
var PLAY = 1;
var gameState = PLAY;

var distance=0;

function preload(){
  pathImg = loadImage("track.jpg");
  mainRacerImg1 = loadAnimation("mainPlayer1.png","mainPlayer2.png");
  mainRacerImg2= loadAnimation("mainPlayer3.png");
  pinkImg = loadAnimation("opponent1.png","opponent2.png");
  yellowImg = loadAnimation("opponent4.png","opponent5.png");
  redImg = loadAnimation("opponent7.png","opponent8.png")
}

function setup(){
  
createCanvas(windowWidth,windowHeight);
  
console.log(pathImg);

pinkGroup = new Group();
yellowGroup = new Group();
redGroup = new Group();

// Moving background
path=createSprite(windowWidth/2,windowHeight/2);
path.addImage(pathImg);
path.scale = 0.5;

//creating boy running
mainCyclist  = createSprite(50,windowHeight/2+20);
mainCyclist.velocityX = 3;
mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
mainCyclist.scale=0.07;

/*var r = Math.round(random(1,3))

  if(r === 1){
    pinkCyclist();
  }

  else if(r === 2){
    yellowCyclist()
  }

  else if(r === 3){
    redCyclist();
  }*/

  pinkCyclist();
  
  yellowCyclist();

  redCyclist();
}

function draw() {
  background(0);

    //console.log(mainCyclist.x);

  if(gameState === PLAY){
  //console.log(frameCount);
  
  camera.position.x = mainCyclist.x;
  camera.position.y = windowWidth/2;

  if(frameCount === 750){
    gameState = END;
  }

  drawSprites();

  }

  if(gameState === END){
    console.log("hello");
    fill("yellow");
    textSize(30)
    text("Game Over", 200 , 200);
  }
  /*textSize(20);
  fill(255);
  text("Distance: "+ distance,350,30);
  
  if(gameState===PLAY){
  
   mainCyclist.y = World.mouseY;*/
  
   /*edges= createEdgeSprites();
   mainCyclist .collide(edges);*/
  
  //code to reset the background   
 }
//}

function pinkCyclist(){
  pink = createSprite(50,windowHeight/2-50);
  pink.velocityX = Math.round(random(1,4));
  pink.addAnimation("cycle1",pinkImg)
  pink.lifetime = 1000; 
  pink.scale = 0.07;

  pinkGroup.add(pink);
}

function yellowCyclist(){
  yellow = createSprite(50,windowHeight/2-120);
  yellow.velocityX = Math.round(random(1,4));
  yellow.addAnimation("cycle2",yellowImg)
  yellow.lifetime = 1000; 
  yellow.scale = 0.07;

  yellowGroup.add(yellow);
}

function redCyclist(){
  red = createSprite(50,windowHeight/2+90);
  red.velocityX = Math.round(random(1,4));
  red.addAnimation("cycle3",redImg)
  red.lifetime = 1000; 
  red.scale = 0.07;

  redGroup.add(red);
}