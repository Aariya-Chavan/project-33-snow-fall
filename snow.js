class Snow{
    constructor(x,y,r){
        var options = {
            'restitution' : 0.4,
            //'friction' : 0.9,
            }
    this.r=r ;     
    this.image= loadImage("snow4.webp");
    this.body = Bodies.circle(x,y,this.r,options);

    World.add (world,this.body);
    }
    
    
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate();
        fill("white");
        imageMode(CENTER);
        image(this.image,0,0,this.r*2,this.r*2);
    pop();
    }
}