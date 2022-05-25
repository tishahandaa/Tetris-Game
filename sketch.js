var score = 0

function preload(){
block1IMG = loadImage("blockOne.png");
}

function setup(){
  createCanvas(500,800)

  block1 = createSprite(250,700,50,50)
  block1.addImage(block1IMG)
}

function draw(){
  background("black")

  //Moving blocks
      if (keyIsDown(LEFT_ARROW)){
        block1.position.x = block1.position.x-5
      }

      if (keyIsDown(RIGHT_ARROW)){
        block1.position.x = block1.position.x+5
      }

      if (keyIsDown(UP_ARROW)){
        block1.position.y = block1.position.y-5
      }

      if (keyIsDown(DOWN_ARROW)){
        block1.position.y = block1.position.y+5
      }

  

  drawSprites()




}