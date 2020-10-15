
var dog, database, foodS, foodStock = 20;

var dogImage,happyDog;

function preload() {

  dogImage = loadImage("images/Dog.png");
  dogHappy = loadImage("images/happydog.png");

}

function setup() {
  database = firebase.database();
  createCanvas(700, 500);

  dog = createSprite(550, 400, 20, 20);
  dog.scale = 0.2;
  dog.addImage(dogImage);

  foodS = database.ref("Food");
  foodS.on("value", readStock);

}

function readStock(data) {

  foodS = data.val();

}

function writeStock(x) {

  if (x <= 0) {
    x = 0;
  }
  else {
    x = x - 1;
  }

  database.ref("/").update({

    Food: x

  })
}


function draw() {
  background(46, 139, 87);
  drawSprites();

  //feeding the Dog........
  if (keyWentDown(UP_ARROW)) {

    writeStock(foodS);
    dog.addImage(dogHappy);

  }

  //-----------------------------------------Text for food------------------------------------------
  textSize(29);
  fill("black");
  text("food:" + foodS, 200, 100);

  //============================================text for note=========================================
  textSize(18);
  fill("white");
  text("note: press up arrow to feed the dog", 200, 29);
}



