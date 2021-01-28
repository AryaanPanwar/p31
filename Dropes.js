class Dropes{

    constructor(x,y){
       var options={
        isStatic:false,
        friction:0.1,
         density:1
       }
        this.x=x;
        this.y=y;
        this.r=10;
        this.body=Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);
    }
    display(){
   super.display();
    if()
   var 

    push();
    translate(this.body.position.x ,this.body.position.y);
    fill("blue");
    stroke("black");
    strokeWeight(4);
    ellipse(0,0,this.r,this.r);
    pop();
    
    
    }
    
  
}