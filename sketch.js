
var arr=[1,12,3,14,5]
console.log(arr);
var arr2=[[1,0,12],[7,-3,2],[-5,2,1]]
console.log(arr2[0][1]);
arr.push(9);
console.log(arr);
arr.pop();
console.log(arr);
console.log(arr.length);


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;


function preload() {
    backgroundImg = loadImage("sprites/bacImg.jpg");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    //platform = new Ground(556, 110, 200, 20);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
    pig4 = new Pig(939, 179);
    pig2 = new Pig(679, 179);
    bird = new Bird(200,50);
    box6 = new Box(510,270,70,70);
    
    log6 = new Log(512,309,200, PI/2);
    log7 = new Log(456,250,125, PI/7);
    log8 = new Log(552,263,125, -PI/7);
    log9 = new Log(432,374,65, PI);
    log10 = new Log(590,374,65, PI);
    pig5 = new Pig(510, 360);

    box7 = new Box(1095,270,70,70);
    log11 = new Log(1092,309,200, PI/2);
    log12 = new Log(1041,250,125, PI/7);
    log13 = new Log(1137,263,125, -PI/7);
    log14 = new Log(1017,374,65, PI);
    log15 = new Log(1175,374,65, PI);
    pig6 = new Pig(1090, 360);
    pig7 = new Pig(504, 221);
    pig8 = new Pig(1091, 209);
    
    slingshot = new SlingShot(bird.body,{x:200, y:270});

    
}

function draw(){
    
    background(backgroundImg);
    
    Engine.update(engine);
    //text(mouseX + ',' + mouseY,40,40)
    
    //strokeWeight(4);
    box1.display();
    box2.display();
    fill("brown")
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    pig4.display();
    pig2.display();
    box6.display();
    pig5.display();

    log6.display();
    log7.display();
    log8.display();
    log9.display();
    log10.display();
    box7.display();
    pig6.display();
    log11.display();
    log12.display();
    log13.display();
    log14.display();
    log15.display();
    pig7.display();
    pig8.display();
        slingshot.display();    
    bird.display();
    //image(enemyc,fish1.position.x,fish1.position.y,50,50);
}


function mouseDragged(){
    
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
   
}


function mouseReleased(){
    slingshot.fly();
   
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(bird.body);
    }}


    