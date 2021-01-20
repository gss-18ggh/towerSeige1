const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var G1;
var box1, box2, box3, box4, box5, box6, box7, box8, box9;
var box10, box11, box12, box13, box14, box15
var polygon1
var sling1

function setup() {

    engine = Engine.create();
    world = engine.world;

    createCanvas(1000, 500);
G1 = new Ground(700, 400, 250, 20);
box1 = new Box(600, 370, 25, 35);
box2 = new Box(625, 370, 25, 35);
box3 = new Box(650, 370, 25, 35);
box4 = new Box(675, 370, 25, 35);
box5 = new Box(700, 370, 25, 35);
box6  = new Box(725, 370, 25, 35);
box7 = new Box(750, 370, 25, 35);
box14 =  new Box(725, 335, 25, 35);
box15 = new Box(625, 335, 25, 35);

box8 = new Box(650, 335, 25, 35);
box9 = new Box(675, 335, 25, 35);
box10 = new Box(700, 335, 25, 35);

box11 = new Box(665, 300, 25, 35);
box12 = new Box(690, 300, 25, 35);
box13 = new Box(680, 265, 25, 35);

polygon1 = new Polygon(300, 250, 50, 50);

sling1 = new Sling(polygon1.body, {x: 300, y: 220});

Engine.run(engine);

}

function draw() {
    
background(203, 246, 244);
Engine.update(engine);
G1.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();

box8.display();
box9.display();
box10.display();

box11.display();
box12.display();

box13.display();
box14.display();
box15.display();

polygon1.display();

sling1.display();

keyPressed();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
 
 
    sling1.fly();


}
function keyPressed(){
    if (keyCode===32){
        
        sling1.attach(polygon1.body);

    }
}
