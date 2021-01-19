
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	


	} 

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground=new Ground(400,695,800,10);
//	boy=new Boy(100,615,50,150);
	tree=new Tree(650,540,50,300);
	mango1=new Mango(640,520,50,50);
    mango2=new Mango(650,540,50,50);
	mango3=new Mango(660,543,50,50);

	Engine.run(engine);
  
}


function draw() {
  




  rectMode(CENTER);
  background(0);
  
  drawSprites();

  ground.display();
 // boy.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();

}



