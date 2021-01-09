const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
    createCanvas(1200,500);
    
    ground = new Ground(width/2, 480, width, 20)




}


function draw() {

    ground.display();
}