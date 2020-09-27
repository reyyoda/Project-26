class Plinko {
constructor(x,y,r){
var options = {

    isStatic: true
}
   this.r = r;
   this.body = Bodies.circle(x,y,r, options);
   World.add(world, this.body);
   }
   display(){
   fill(150);
   stroke(100);
   var pos = this.body.position;
   push();
   translate(pos.x,pos.y);
   ellipse(0,0,this.r * 2);
    pop();
   }
}