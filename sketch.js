//Create variables here
var dog ,happydog,database,foods,foodStock 
function preload()
{
  //load images here
  dogImage=loadImage("doglmg.png");
  happydog=loadImage("doglmg1.png")
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database;
  dog=createSprite(200,200,200,200);
  this.dog=loadImage('sprites/doglmg.png')
  foodStock=database.ref('food');
  foodStock.on("value",readStock)
  
}


function draw() {  
 background(46,139,87)
 if(KeyWentDown(UP_ARROW)){
   writeStock(foods)
   dog.addImage(happydogImg);
   
 }
 if(KeyWentUP(UP_ARROW)){

  dog.addImage(dogImg);
  
}

if(foods==0){
  foods=20
}

  drawSprites();
  //add styles here
  fill ("black")
  textSize(35)
  text("Press UP_ARROW Key  To Feed the Milk",50,50)
  text("Food Remaning:"+foods,150,150)
  stroke(4)

}
function readStock(data){
  foods=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x+1;
  }
  database.ref('/').update({
    Food:x
  })
}



