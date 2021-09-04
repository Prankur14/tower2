class Slingshot {
    constructor(bodyA, pointB) {
            var options = {
                bodyA: bodyA,
                pointB: pointB,
                stiffness: 0.04,
                length: 1
            }
            this.sling = Constraint.create(options);
            this.pointB = pointB;
            World.add(world, this.sling);

        }
        //write code for attach( ) here

    fly() {
        this.sling.bodyA = null;

    }
    display() {
        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            strokeWeight(0);
            stroke("turquoise");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

    attach(body) {

            this.sling.bodyA = body;
            // body.position(this.pointB);
        }
        // reset() {
        //     if (keyIsDown(32)) {

    //     }
    // }

}