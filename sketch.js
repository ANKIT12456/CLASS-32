const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot ,score=0;
var gameState="onsling";

function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
    getTime();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,90,90);
    box2 = new Box(920,320,90,90);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,90,90);
    box4 = new Box(920,240,90,90);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    if(backgroundImg){
    background(backgroundImg);
    }

    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display(); 
    textSize(30);
    fill ("black"); 
    text ("SCORE= "+score,1000,50);  
}

function mouseDragged(){
    if(gameState=="onsling"){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    gameState="fly";
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        gameState="onsling";
        slingshot.attach(bird.body);
    }
}

async function getTime(){
    var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
    var responseType=await response.json();

    var dt=responseType.datetime;

    var hr= dt.slice(11,13);

    if(hr>=06 && hr<=18){
        bg="sprites/bg.png";
    }
    else{
        bg="sprites/bg2.jpg";
    }

    backgroundImg=loadImage(bg);

}