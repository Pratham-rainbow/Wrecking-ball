const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12;
var box13, box14, box15, box16, box17, box18, box19, box20;

var ground;


var gameState = "remain";

var ball;
var score = 0;
var rope;

function setup() {
  createCanvas(3000, 800);


  engine = Engine.create();
  world = engine.world;

  box1 = new Box(900, 300, 70, 70);
  box2 = new Box(900, 300, 70, 70);
  box3 = new Box(900, 300, 70, 70);
  box4 = new Box(900, 300, 70, 70);
  box5 = new Box(900, 300, 70, 70);
  box6 = new Box(900, 300, 70, 70);

  box7 = new Box(800, 300, 70, 70);
  box8 = new Box(800, 300, 70, 70);
  box9 = new Box(800, 300, 70, 70);
  box10 = new Box(800, 300, 70, 70);
  box11 = new Box(800, 300, 70, 70);
  box12 = new Box(800, 300, 70, 70);

  box13 = new Box(700, 300, 70, 70);
  box14 = new Box(700, 300, 70, 70);
  box15 = new Box(700, 300, 70, 70);
  box16 = new Box(700, 300, 70, 70);
  box17 = new Box(700, 300, 70, 70);
  box18 = new Box(700, 300, 70, 70);
  box19 = new Box(700, 300, 70, 70);
  box20 = new Box(700, 300, 70, 70);

  ball = new Ball(500, 400, 40);

  rope = new Rope(ball.body, {x:500, y:50});

  ground = new Ground();

  Engine.run(engine);
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY});
  gameState = "moved";
}

function draw() {
  background(220);  
  Engine.update(engine);

  push();
  fill(0);
  textSize(25);
  text("Score: " + score, 20, 50);
  pop();

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

  rope.display();

  ball.display();
  ground.display();

}