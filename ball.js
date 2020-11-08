class Ball{
    constructor(x, y, r, angle){
        var options = {
            'density': 1,
            'frictionAir' : 0.005
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(0, 0, 255);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r);
        pop();
    }
}