const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,800 );
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,720,70,70);
    box2 = new Box(920,720,70,70);
    ground = new Ground(600,height,1200,20)
    log1 = new Log(810,660,300,PI/2)
    pig1 = new Pig(810,720); 
    pig2 = new Pig(810,640); 
    box3 = new Box(700,640,70,70);
    box4 = new Box(920,640,70,70);
    log2 = new Log(810,620,300,PI/2); 
    box5 = new Box(810,560,70,70);
    log4 = new Log(760,520,150,PI/7);
    log5 = new Log(870,520,150,-PI/7);
    bird = new Bird(600,400); 

    
}

function draw(){
    background(0);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    console.log(mouseX + "  " +mouseY )
    ground.display();
    box1.display();
    box2.display();
    log1.display(); 
    pig1.display();
    box3.display(); 
    box4.display(); 
    log2.display(); 
    pig2.display();
    box5.display();
    log4.display(); 
    log5.display();
    bird.display();    
}