var dinossaur;
var dino_speedrun;
var dino_touching;
var earth_ground;
var ground;

function preload() {
dino_speedrun = loadAnimation("trex1.png","trex3.png","trex4.png");
dino_touching = loadImage("trex_collided.png");
earth_ground = loadImage("ground2.png");
}
function setup() {
createCanvas(600,200);
dinossaur =  createSprite(50,180,20,50);
dinossaur.addAnimation("running",dino_speedrun);
dinossaur.scale = 0.8;
dinossaur.x = 50;
ground = createSprite(200,180,400,20);
ground.addImage("ground",earth_ground);
ground.X = ground.width /2                  //rever essa linha de codigo na prox. aula
}
function draw() {
background ("grey");
drawSprites();
if (keyDown("space")) {
dinossaur.velocityY = -10;

}
dinossaur.velocityY = dinossaur.velocityY +0.8

}



