var ball;
var r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21,r22,r23,r24,r25,r26,r27,r28,r29,r30,r31,r32,r33,r34,r35,r36,r37,r38,r39,r40,r41;
var exit;
var ball_img, exit_img;
function preload(){
ball_img=loadImage("PLAYER.png");
exit_img=loadImage("reward.png");
}
function setup() {
  createCanvas(1200,800);
  ball = createSprite(150,270,20,20);
 

  exit = createSprite(850,470,30,30);
  r1=createSprite(20,200,180,20);
  r1.shapeColor="red";

  r2=createSprite(20,300,180,20);
  r2.shapeColor="red";

  r3=createSprite(20,200,20,120);
  r3.shapeColor="red";

  r4=createSprite(200,50,20,70);
  r4.shapeColor="red";

  r5=createSprite(200,200,20,100);
  r5.shapeColor="red";

  r6=createSprite(200,10,1200,20);
  r6.shapeColor="red";

  r7=createSprite(200,600,1200,20);
  r7.shapeColor="red";

  r8=createSprite(800,545,20,130);
  r8.shapeColor="red";

  r9=createSprite(800,200,20,400);
  r9.shapeColor="red";

  r10=createSprite(200,300,250,20);
  r10.shapeColor="red";

  r11=createSprite(200,200,80,20);
  r11.shapeColor="red";

  r12=createSprite(250,270,20,100);
  r12.shapeColor="red";

  r13=createSprite(330,160,20,70);
  r13.shapeColor="red";

  r14=createSprite(330,210,70,20);
  r14.shapeColor="red";

  r15=createSprite(380,160,20,70);
  r15.shapeColor="red";

  r16=createSprite(380,160,70,20);
  r16.shapeColor="red";

  r17=createSprite(440,100,20,80);
  r17.shapeColor="red";

  r18=createSprite(450,250,20,70);
  r18.shapeColor="red";

  r19=createSprite(620,70,20,100);
  r19.shapeColor="red";

  r20=createSprite(680,180,20,80);
  r20.shapeColor="red";

  r21=createSprite(600,300,200,20);
  r21.shapeColor="red";

  r22=createSprite(710,360,90,20);
  r22.shapeColor="red";

  r23=createSprite(600,300,20,70);
  r23.shapeColor="red";

  r24=createSprite(530,360,90,20);
  r24.shapeColor="red";

  r25=createSprite(520,360,20,120);
  r25.shapeColor="red";

  r26=createSprite(390,480,150,20);
  r26.shapeColor="red";

  r27=createSprite(450,430,20,120);
  r27.shapeColor="red";

  r28=createSprite(200,420,120,20);
  r28.shapeColor="red";

  r29=createSprite(300,360,20,80);
  r29.shapeColor="red";

  r30=createSprite(320,360,150,20);
  r30.shapeColor="red";

  r31=createSprite(300,480,20,70);
  r31.shapeColor="red";

  r32=createSprite(300,540,70,20);
  r32.shapeColor="red";

  r33=createSprite(350,540,20,80);
  r33.shapeColor="red";

  r34=createSprite(650,300,20,100);
  r34.shapeColor="red";

  r35=createSprite(600,400,130,20);
  r35.shapeColor="red";

  r36=createSprite(650,550,170,20);
  r36.shapeColor="red";

  r37=createSprite(710,400,20,80);
  r37.shapeColor="red";

  r38=createSprite(650,500,20,70);
  r38.shapeColor="red";

  r39=createSprite(590,500,80,20);
  r39.shapeColor="red";

  r40=createSprite(580,500,20,70);
  r40.shapeColor="red";

  r41=createSprite(520,550,80,20);
  r41.shapeColor="red";

}

function draw() {
  background(0);
  textSize(80) ;
  fill("green");
  textFont("Georgia");
  text("M",950,150);
  text("A",960,260);
  text("Z",960,360);
  text("E",960,460);

  text("G",1050,360);
  text("A",1050,460);
  text("M",1040,560);
  text("E",1050,660);

  
  createEdgeSprites();
  ball.addImage("PLAYER.png",ball_img);
  ball.scale = 0.05;
  
  exit.addImage("reward.png",exit_img);
  exit.scale = 0.09;
  

  
  if(keyDown(UP_ARROW)){
    ball.velocityX=0;
    ball.velocityY=-5;
  }
  if(keyDown(DOWN_ARROW)){
    ball.velocityX=0;
    ball.velocityY=5;
  }
  if(keyDown(RIGHT_ARROW)){
    ball.velocityX=5;
    ball.velocityY=0;
  }
  if(keyDown(LEFT_ARROW)){
    ball.velocityX=-5;
    ball.velocityY=0;
  }
  ball.bounceOff(r1);
  ball.bounceOff(r2);
  ball.bounceOff(r3);
  ball.bounceOff(r4);
  ball.bounceOff(r5);
  ball.bounceOff(r6);
  ball.bounceOff(r7);
  ball.bounceOff(r8);
  ball.bounceOff(r9);
  ball.bounceOff(r10);
  ball.bounceOff(r11);
  ball.bounceOff(r12);
  ball.bounceOff(r13);
  ball.bounceOff(r14);
  ball.bounceOff(r15);
  ball.bounceOff(r16);
  ball.bounceOff(r17);
  ball.bounceOff(r18);
  ball.bounceOff(r19);
  ball.bounceOff(r20);
  ball.bounceOff(r21);
  ball.bounceOff(r22);
  ball.bounceOff(r23);
  ball.bounceOff(r24);
  ball.bounceOff(r25);
  ball.bounceOff(r26);
  ball.bounceOff(r27);
  ball.bounceOff(r28);
  ball.bounceOff(r29);
  ball.bounceOff(r30);
  ball.bounceOff(r31);
  ball.bounceOff(r32);
  ball.bounceOff(r33);
  ball.bounceOff(r34);
  ball.bounceOff(r35);
  ball.bounceOff(r36);
  ball.bounceOff(r37);
  ball.bounceOff(r38);
  ball.bounceOff(r39);
  ball.bounceOff(r40);
  ball.bounceOff(r41);
  
touch();
  

  
  drawSprites();

}
 function touch(){
  if(ball.bounceOff(exit)){

    text("YOU WIN",600,400);
    
  }
 }
