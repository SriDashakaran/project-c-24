class Paper{
   constructor(x,y,){
     var option={
         isStatic:false,
         restitution:0.3,
         friction:0.5,
         density:1.2,
     }

    this.body.=Bodies.circle(x,y,40,option)
    World.add(world,this.body)
   }
   display(){
       var paperpos=this.body.position;
       Push()
    ellipseMode(CENTRE)
    translate(paperpos.x,paperpos.y)
    strokeWeight(3)
    Fill(255,0,255)
   
   }
}