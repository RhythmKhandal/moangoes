class Rope{
constructor(bodyA,pointB){
 var Opt={
    bodyA:bodyA,
    length:10,
    poitnB:pointB
 }

 this.pointB=pointB
 this.rope=Constraint.create(Opt)
 World.add(world,this.rope)

}

display(){


    line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.pointB.x,this.rope.pointB.y) 

}



}