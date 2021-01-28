const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var dropes,dropes2,dropes3,dropes4,dropes5,dropes6,dropes7,dropes8;
var boy;
var ground;
function preload(){
    
    
}

function setup(){
   createCanvas(500,800);
    engine = Engine.create();
    world = engine.world;
    ground=createSprite(200,100,500,10)

    boy = new Boy(100,200);

    dropes = new Dropes(500,100);
    dropes2= new Dropes(300,200);
    dropes3 = new Dropes(200,200);
    dropes4 = new Dropes(200,200);
    dropes5 = new Dropes(200,200);
    dropes6 = new Dropes(200,200);
    dropes7 = new Dropes(200,200);
    dropes8 = new Dropes(200,200);

   

    
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    
    boy.display();

    dropes.display();
    dropes2.display();
    dropes3.display();
    dropes4.display();
    dropes5.display();
    dropes6.display();
    dropes7.display();
    dropes8.display();


}   
function rain(){
    if(this.body.position.y>height){
    Matter.Body.setPosition(this.body, {x:random(0,500), y:random(0,800)})
    

    }
}
