var canvas;
var music;
var surface1;
var surface2;
var surface3;
var surface4;
var box;
var edge1;
var edge2;
var edge3;
var edge4;




function preload(){
    music = loadSound("music.mp3");
    

}


function setup(){
    canvas = createCanvas(800,600);
    


    //create 4 different surfaces

    

    surface1= createSprite(100, 590, 100, 20);
    surface1.shapeColor = "red";
    surface1.velocityX = 0;

    surface2 = createSprite(300,590,100,20);
    surface2.shapeColor = "blue";

    surface3 = createSprite(500,590,100,20);
    surface3.shapeColor = "orange";

    surface4 = createSprite(700,590,100,20);
    surface4.shapeColor = "yellow";


    box = createSprite(random(20,750));
    box.shapeColor = "purple";
    box.velocityX = 4;
    box.velocityY = 4;

    edge1 = createSprite(1,300,2,600);
    edge1.shapeColor = "black";
    
    edge2 = createSprite(400,1,800,2);
    edge2.shapeColor = "black";

    edge3 = createSprite(799,300,2,600);
    edge3.shapeColor = "black";

    edge4 = createSprite(400,599,800,2);
    edge4.shapeColor = "black";



    //create box sprite and give velocity

}

function draw() {
    background(0,0,0);
  

   

   
  isTouching() ;
 bounceOff();
   
drawSprites();


    //add condition to check if box touching surface and make it box
}

function isTouching(){

    if(surface1.isTouching(box)){
        box.shapeColor = "red";
    }
 
    if(surface2.isTouching(box) ){
     box.shapeColor = "blue";
 }
 
 if(surface3.isTouching(box) ){
     box.shapeColor = "orange";
 }
 
 if(surface4.isTouching(box) ){
     box.shapeColor = "yellow";

     return true;
 }
 else {
     return false;
 }

}


function bounceOff(){

    if(box.bounceOff(surface1) ){
        box.shapeColor = "red";
      
    }
    
    if(box.bounceOff(surface2) ){
        box.shapeColor = "blue";
       
    }
    
    if(box.bounceOff(surface3) ){
        box.shapeColor = "orange";
       
    }
    
    if(box.bounceOff(surface4) ){
        box.shapeColor = "yellow";
        
    }


        box.bounceOff(edge1);


        box.bounceOff(edge2);
    
        box.bounceOff(edge3);
    
        box.bounceOff(edge4);
    
   
    
    
}


   
    




    
