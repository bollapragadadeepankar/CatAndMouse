
var backgroundImg;
var jerry,jerrytease,jerrytease2,jerrystand;
var tom,tomsit,tomrun,tomstand;

function preload() {
    //load the images here
  backgroundImg = loadImage("images/garden.png");
  tomsit = loadAnimation("images/tomOne.png");
  tomrun = loadAnimation("images/tomTwo.png","images/tomThree.png");
  tomstand = loadAnimation("images/tomFour.png")
  jerrystand = loadAnimation("images/jerryOne.png");
  jerrytease = loadAnimation("images/jerryTwo.png","images/jerryThree.png");
  tease2 = loadAnimation("images/jerryFour.png");
  
}

function setup(){
    createCanvas(600,400);
    //create tom and jerry sprites here
    jerry=createSprite(40,320,30,10);
    jerry.addAnimation("jerrystand",jerrystand);
    jerry.scale=0.09;

    tom=createSprite(550,320,30,10);
    tom.addAnimation("sit",tomsit);
    tom.scale=0.09;

  
}
function draw() {

    background(backgroundImg);
    //Write condition here to evalute if tom and jerry collide
    
  if (tom.x - jerry.x < jerry.width/2 -tom.width/2)
  {
    tom.velocityX=0;
    tom.addAnimation("stand",tomstand);
    tom.changeAnimation("stand");
    jerry.addAnimation("final",tease2);
    jerry.changeAnimation("final");
    tom.scale=0.09;
    jerry.x=300;
    tom.x=350;
  }
 
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 if(keyCode === LEFT_ARROW){
   tom.velocityX = -2;
   tom.addAnimation("running",tomrun);
   tom.changeAnimation("running");
   jerry.addAnimation("tease",jerrytease);
   jerry.changeAnimation("tease");
 }

}


