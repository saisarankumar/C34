class Ball {
    constructor(x, y, w, h, angle){
        var options = {
            frictionAir: 0.05,
            density: 1
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipse(0, 0, this.width, this.height);
        pop();
    }
}