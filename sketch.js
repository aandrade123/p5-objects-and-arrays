var allMyBubbles = [];
var numOfBubbles = 1000;
var sizeOfBubble = 25;

function setup(){
    createCanvas(600,400);
    for(var i = 0; i < numOfBubbles; i++){
        allMyBubbles[i] = new Bubble(random(0,600),random(0,400));
    }
} 

function draw(){
    background(255,255,255);
    for(var i = 0; i < allMyBubbles.length; i++){
        allMyBubbles[i].display();
        allMyBubbles[i].move();
    }
}

function Bubble(x,y){
    this.x = x;
    this.y = y;
    fill(255, 0, 50, 125);
    this.display = function(){
        stroke(255);
        ellipse(this.x, this.y, sizeOfBubble, sizeOfBubble )
    }
    this.move = function(){
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
    }
}