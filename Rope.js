class Rope{
  constructor(body1,body2,offsetX,offsetY){
      this.offsetX=offsetX
      this.offsetY=offsetY
      var options={
          bodyA:body1,
          bodyB:body2,
          pointB:{x:this.offsetX,y:this.offsetY}
            }
      this.Rope=Matter.Constraint.create(options)
      World.add(world,this.Rope)
  }
display(){
var pointA = this.Rope.bodyA.position;
var pointB = this.Rope.bodyB.position;
strokeWeight(4);
var Anchor1X=pointA.x
var Anchor1Y=pointA.y
var Anchor2X=pointB.x+this.offsetX
var Anchor2Y=pointB.y+this.offsetY
line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
}
}
//hey
//can u see or is smtg wrong
//yeah i am
//check it and tell me
//what is not working can you describe a little
//i hve changed a lot of things just wait a bit 
//ok
//nope its not working
//now check
//open console and send me a pic of the error after 8
//Coz ill hve lunch now
// you can end the session now ill text u at 8
//ok?
// ok tnx btw 

//the up arrow key when i press it its not working
//no