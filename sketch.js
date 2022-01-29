var alien
var bg
var earth
var lamborgini
var moon 
var spaceship
var sun

function preload()
{
  alien_img=loadImage("alien.jpg")
  bg_img=loadImage("bg.jpg")
  earth_img=loadImage("earth.jpg")
  lamborgini_img=loadImage("lamborgini.jpg")
  moon_img=loadImage("moon.jpg")
  spaceship_img=loadImage("spaceship.jpg")
  sun_img=loadImage("sun.jpg")
}

function setup(){
  createCanvas(1000,700)

  alien=createSprite(900,500,50,50)
}

function draw(){
  background(51);
  image(bg_img,0,0);
  drawSprites();
}
























