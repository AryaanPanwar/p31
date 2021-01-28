class Boy{
    constructor(x,y){
    this.x=x;
    this.y=y;
    this.w=300;
    this.h=300;
    this.image=loadImage("walking/walking_1.png");
    this.body=Bodies.rectangle(this.x,this.y,this.w,this.y,{isStatic:true});
    World.add(world,this.body);

    }
    display(){
        var boypos = this.body.position;

        push();
        translate(boypos.x,boypos.y);
        fill("blue");
        
        image(this.image,0,0,this.w,this.h);
        pop();
    }
}