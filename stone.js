class Stone{
constructor(x,y){

    var myOpt={
        isStatic:true,
        restitution:0,
        friction:1,
        density:1.2
    }


    this.body=Bodies.circle(x,y,30,myOpt)
    this.radius=30

    this.image=loadImage("images/stone.png")

    World.add(world,this.body)
}

display(){
    var pos=this.body.position

    imageMode(CENTER)
    image(this.image,pos.x,pos.y,this.radius,this.radius)


    
}




}