var ww,wh;
function preload(){

}
function setup(){
    ww = window.innerWidth-10;
    wh = window.innerHeight-10;
    createCanvas(ww,wh);
}
function draw(){
    background("black");
    text(ww,100,100)
    text(wh,200,100)
    drawSprites();
}