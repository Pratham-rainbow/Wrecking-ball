class Box{
    constructor(x, y, w, h){
        var options = {
            'restitution': 0.8,
            'friction': 1.0,
            'density' : 0.04
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        //console.log(this.body.speed);
        if(this.body.speed > 4 && gameState==="moved"){
            score++;
        }
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(255, 0, 255);
        stroke(0);
        strokeWeight(2);
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        pop();
    }
}