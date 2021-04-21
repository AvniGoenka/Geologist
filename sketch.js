const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,stone,plane,rubber;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    hammer = new Hammer(10,100);
    stone= new Stone(600,300,40,40);
    rubber= new Rubber(500,200,60,60);
    iron= new Iron(200,80,50,80);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    stone.display();   
    iron.display(); 
 
}