var background0,background1,background2;
var ground,state=0;
var char0,char1,char2,char3=0;
var mon0,mon1,mon2,mon3;
var sco0,sco1,sco2,sco3;
var imp0,imp1,imp2=0;
var score=0;
var jj,ee;
function preload(){
    background0 = loadImage("background.png");
    char0 = loadAnimation("ash/1.png","ash/2.png","ash/3.png")
    char2 = loadAnimation("ash/1.png")
    sco2 = loadAnimation("ball2/1.png","ball2/7.png","ball2/11.png","ball2/15.png","ball2/20.png","ball2/25.png","ball2/28.png","ball2/34.png")
    mon2 = loadAnimation("ball1/1.png","ball1/10.png","ball1/17.png","ball1/22.png","ball1/26.png","ball1/32.png","ball1/34.png","ball1/39.png")
}
function setup(){
    createCanvas(910,1740);
    char0.frameDelay = 2;
    sco2.frameDelay = 0.5;
    mon2.frameDelay = 0.5;
    background1 = createSprite(455,870,910,1766);
    background1.addImage("image",background0);
    background1.scale = 6;
    background2 = createSprite(455,-870,910,1766);
    background2.addImage("image",background0);
    background2.scale = 6;
    background1.velocityY = 38;
    background2.velocityY = 38;
    char1 = createSprite(850,1550,100,50);
    char1.addAnimation("image",char0);
    char1.scale = 3;
    ground = createSprite(910,870,10,1740);
    sco0 = createGroup();
    mon0 = createGroup();
    ee = createSprite(100,1640,200,200)
    jj = createSprite(100,100,200,200)
}
function draw(){
    background("black");
    char1.collide(ground)
    //char1.debug=true;
    if(background1.y>2610){
        background1.y=-850;
    }
    if(background2.y>2610){
        background2.y=-850;
    }
    char1.velocityX = char1.velocityX + 15;
    if(state===0){
    background1.velocityY = 0;
    background2.velocityY = 0;
    char1.addAnimation("image",char2)
    if(keyDown("ENTER")){
        state = 1;
        score =0;
        char3=0
        imp2=0
    }
   
    }
    if(state===1){
    if(keyDown("space")&&char1.x>728){
        char1.velocityX = -100;
    }
    
    background1.velocityY = 38;
    background2.velocityY = 38;
    if(char3===0){
        char1.addAnimation("image",char0);
        char3=1;
    }
    
    if(frameCount%50===0){
        imp0 = Math.round(random(1,3))
        if(imp0===1){
            sco1 = createSprite(840,-50,100,100);
            sco1.collide(ground);
            sco1.velocityY=98;
            //sco1.velocityX=5;
            sco0.add(sco1);
            sco1.addAnimation("im",sco2)
            sco1.scale = 0.4;
        }
        if(imp0===2){
            mon1 = createSprite(840,-50,100,100);
            mon1.collide(ground);
            mon1.velocityY=98;
            //sco1.velocityX=5;
            mon0.add(mon1);
            mon1.addAnimation("im",mon2)
            mon1.scale = 0.4;
           // mon1.debug=true;
        }
        if(imp0===3){
            mon1 = createSprite(840,-50,100,100);
            mon1.collide(ground);
            mon1.velocityY=98;
            //sco1.velocityX=5;
            mon0.add(mon1);
            mon1.addAnimation("im",mon2)
            mon1.scale = 0.4;
           // mon1.debug=true;
        }
    }
    if(char1.isTouching(mon0)){
        state=2;
        mon0.destroyEach();
    }
    if(char1.isTouching(sco0)){
        score=score+1;
        sco0.destroyEach();
    }
    }
    if(state===2){
        if(imp2===0){
            alert("Gameover");
            
            imp2=1
        }
        mon0.destroyEach();
        sco0.destroyEach();
        char1.addAnimation("img",char2);
        background1.velocityY=0;
        background2.velocityY=0;
    }
    if(score>=20){
        state=3
    }
    if(state===3){
        mon0.destroyEach();
        sco0.destroyEach();
        char1.addAnimation("img",char2);
        background1.velocityY=0;
        background2.velocityY=0;
        alert("You win");
    }
    drawSprites();
}
function mouseReleased(){
    if(mouseButton === LEFT){
        if(mouseX>0&&mouseX<200&&mouseY>0&&mouseY<200){
            if(state===1&&char1.x>728){
                char1.velocityX = -100;
            }
        }
        if(mouseX>0&&mouseX<200&&mouseY>1540&&mouseY<1740){
            state = 1;
        score =0;
        char3=0
        imp2=0
        }
    }
}