const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;



 var particles = [];
 var plinkos = [];
 var divisions = [];
 var _divisions
 var ground;
var _particles;
var cols = 5;
var rows = 5;



function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(780,390,1500,20);
  var p = new Particle(300,50,10);
  var spacing = width / cols;
    particles.push(p);
    for ( var j = 0; j < rows; j++){
      for (var i = 0; i < cols; i++){
        var p2 = new Plinko(i * spacing, j * spacing, 4);
        plinkos.push(p2);
      }


    }
 for(var k= 0; k < plinkos.length; k ++){
        plinkos[k].display();
        console.log(k)
    }
   
}
var divisionHeight = 300;

function draw() {

  if(frameCount %60===0){
    var p = new Particle(300,50,10);
    particles.push(p);
  }

  background(255,255,255);  
   Engine.update(engine);
   for(var i = 0; i < particles.length; i++) {
     particles[i].display();

   }
  

 
  createDivisions();

  

//ground.display();
//_particles.display();
 // drawSprites();
// plinkos.display();

}

function createDivisions(){
  for(var k = 0; k <= width; k = k+80) {
   divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight));
   divisions.forEach(x=>x.display());
 } 
}
