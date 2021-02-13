class Paper{
    constructor(x, y, height, angle) {
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2;
        }
        this.body = Bodies.paper(x, y, height, options);
        World.add(world, this.body);

        this.image = loadImage("sprites/paper.png");
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        super.display(); 
      }
}