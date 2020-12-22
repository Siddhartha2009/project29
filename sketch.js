const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  box1 = new BlueBox(400,360,30,30);
  box2 = new YellowBox(420,360,30,30);
  box3 = new GreenBox(440,360,30,30);
 

  
  box4 = new YellowBox(460,360,30,30);
  box5 = new BlueBox(480,360,30,30);
  box6 = new GreenBox(500,360,30,30);
 

  box7 = new YellowBox(520,350,30,30);
  box8 = new BlueBox(540,350,30,30);
  box9 = new GreenBox(580,350,30,30);

  box10 = new YellowBox(530,350,30,30);
  box11 = new GreenBox(570,280,30,30);

  box12 = new BlueBox(540,250,30,30);


  box13 = new GreenBox(550,220,30,30);

  box14 = new GreenBox(500,135,30,30);
  box15 = new BlueBox(520,135,30,30);
  box16 = new YellowBox(540,135,30,30);
  box17 = new GreenBox(560,135,30,30);
  box18 = new YellowBox(580,135,30,30);

  box19 = new BlueBox(600,105,30,30);
  
  box20 = new YellowBox(550,105,30,30);
  box21 = new GreenBox(570,105,30,30);
  

  box22 = new YellowBox(520,75,30,30);
  box23 = new BlueBox(540,75,30,30);
 
  box24 = new GreenBox(580,75,30,30);
  
  box25 = new YellowBox(530,45,30,30);
  box26 = new BlueBox(550,45,30,30);
  box27 = new GreenBox(570,45,30,30);

  ball = new Ball(0,0,50);

  spring = new Projectile(ball.body,{x:200,y:200});

  ground = new Platform(400,390,800,20);

  groundHovering = new Platform(550,160,200,20);
  
}

function draw() {
  background(255,165,0);
  Engine.update(engine);  

  debug:true;

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();

  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();

  box12.display();
  box13.display();
  box14.display();
  box15.display();

  box16.display();
  box17.display();
  box18.display();

  box19.display();
  box20.display();

  box21.display();
  
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();

  

  ball.display();
  spring.display();
  ground.display();
  groundHovering.display();
  
} 

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  spring.release();
}