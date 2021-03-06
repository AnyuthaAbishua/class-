const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var pig1, pig2;
var log1, log2, log3, log4 ;
var bird1 ;
var ground1;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320);
    box2 = new Box(920,320 );
    box3 = new Box(700,240);
    box4= new Box(920,240 );
    box5=new Box(810, 180);
    ground1=new ground(600, 780,1200,30);
    pig1=new Pig(810, 320);
    pig2= new Pig (810, 240);
    log1=new Log (810,300,340,PI/2);
    log2=new Log (800, 230,340, PI/2);
    log3=new Log (760,120, 150, PI/7 );
    log4=new Log (870,120,150,-PI/7 );


    bird1=new Bird (50, 60);

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground1.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();
}