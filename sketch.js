var background0,background1,background2;
var ground,state=0;
var char0,char1,char2,char3=0;
var mon0,mon1,mon2,mon3;
var sco0,sco1,sco2,sco3;
var imp0,imp1,imp2=0;
var score=0;
var jj,ee,jjj,eee;
var s00,s01,s02,s03,s04,s05,s06,s07,s08,s09,s10,s11,s12,s13,s14,s15,s16,s17,s18,s19,s20;
var score0,score1,score2;
function preload(){
    background0 = loadImage("background.png");
    char0 = loadAnimation("ash/1.png","ash/2.png","ash/3.png")
    char2 = loadAnimation("ash/1.png")
    sco2 = loadAnimation("ball2/1.png","ball2/7.png","ball2/11.png","ball2/15.png","ball2/20.png","ball2/25.png","ball2/28.png","ball2/34.png")
    mon2 = loadAnimation("ball1/1.png","ball1/10.png","ball1/17.png","ball1/22.png","ball1/26.png","ball1/32.png","ball1/34.png","ball1/39.png")
    jjj = loadImage("jj.png")
    eee = loadImage("ee.png")
    score0 = loadImage("ss.png")
    s00 = loadImage("score/0.png");
    s01 = loadImage("score/1.png");
    s02 = loadImage("score/2.png");
    s03 = loadImage("score/3.png");
    s04 = loadImage("score/4.png");
    s05 = loadImage("score/5.png");
    s06 = loadImage("score/6.png");
    s07 = loadImage("score/7.png");
    s08 = loadImage("score/8.png");
    s09 = loadImage("score/9.png");
    s10 = loadImage("score/10.png");
    s11 = loadImage("score/11.png");
    s12 = loadImage("score/12.png");
    s13 = loadImage("score/13.png");
    s14 = loadImage("score/14.png");
    s15 = loadImage("score/15.png");
    s16 = loadImage("score/16.png");
    s17 = loadImage("score/17.png");
    s18 = loadImage("score/18.png");
    s19 = loadImage("score/19.png");
    s20 = loadImage("score/20.png");
}
function setup(){
    createCanvas(910,1740);
    alert("File has been created by Shresth Sharma and "+"All the copyrights are reserved");
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
    ee.addImage("A",eee)
    jj.addImage("a",jjj)
    score1 = createSprite(100,1070,200,500)
    score1.addImage("a",score0)
    score2 = createSprite(100,570,200,200)
}
function draw(){
    background("black");
    char1.collide(ground)
    if(score===0){
        score2.addImage("A",s00);
    }
    if(score===1){
        score2.addImage("A",s01);
    }
    if(score===2){
        score2.addImage("A",s02);
    }
    if(score===3){
        score2.addImage("A",s03);
    }
    if(score===4){
        score2.addImage("A",s04);
    }
    if(score===5){
        score2.addImage("A",s05);
    }
    if(score===6){
        score2.addImage("A",s06);
    }
    if(score===7){
        score2.addImage("A",s07);
    }
    if(score===8){
        score2.addImage("A",s08);
    }
    if(score===9){
        score2.addImage("A",s09);
    }
    if(score===10){
        score2.addImage("A",s10);
    }
    if(score===11){
        score2.addImage("A",s11);
    }
    if(score===12){
        score2.addImage("A",s12);
    }
    if(score===13){
        score2.addImage("A",s13);
    }
    if(score===14){
        score2.addImage("A",s14);
    }
    if(score===15){
        score2.addImage("A",s15);
    }
    if(score===16){
        score2.addImage("A",s16);
    }
    if(score===17){
        score2.addImage("A",s17);
    }
    if(score===18){
        score2.addImage("A",s18);
    }
    if(score===19){
        score2.addImage("A",s19);
    }
    if(score===20){
        score2.addImage("A",s20);
    }
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
            sco1 = createSprite(855,-50,100,100);
            sco1.collide(ground);
            sco1.velocityY=78;
            //sco1.velocityX=5;
            sco0.add(sco1);
            sco1.addAnimation("im",sco2)
            sco1.scale = 0.4;
        }
        if(imp0===2){
            mon1 = createSprite(855,-50,100,100);
            mon1.collide(ground);
            mon1.velocityY=78;
            //sco1.velocityX=5;
            mon0.add(mon1);
            mon1.addAnimation("im",mon2)
            mon1.scale = 0.4;
           // mon1.debug=true;
        }
        if(imp0===3){
            mon1 = createSprite(855,-50,100,100);
            mon1.collide(ground);
            mon1.velocityY=78;
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