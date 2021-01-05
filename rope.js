class Rope{
    constructor(BodyA,BodyB){
        var options = {
            bodyA:BodyA,
            bodyB: BodyB,
            stiffness:0.05,
            length: 20
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

        display(){
          var pointA = this.rope.bodyA.position;
          var pointB = this.rope.bodyB.position; 
          push();   
strokeWeight(10);
stroke(random(1,255), random(1,255), random(1,255));
line(pointA.x,pointA.y,pointB.x,pointB.y);
pop();
        }
    

    
}
    