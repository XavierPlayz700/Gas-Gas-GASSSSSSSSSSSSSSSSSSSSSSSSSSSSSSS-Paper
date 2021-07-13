class ThrowPaper {

    constructor (x, y) {
        
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0,
            density : 1.2
        }

        this.body = Bodies.circle(x, y, 10, options);
        this.image = loadImage("paper.png");
        this.radius = 25;

        World.add(world, this.body);

    }

    display () {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
        
    }

}