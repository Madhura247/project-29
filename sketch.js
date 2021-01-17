const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var polygon, polygon_img;

function preload() {
    polygon_img = loadImage("polygon.png")
}

function setup() {
    createCanvas(1200,500);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, 480, 1200, 20);

    polygon = Bodies.circle(50, 200, 20);
    World.add(world,polygon);




}


function draw() {

    background("rgb(58, 45, 35)")
    ground.display();

    image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);
}
