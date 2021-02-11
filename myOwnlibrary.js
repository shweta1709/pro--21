function isTouching(){

    if(surface1.isTouching(box) ){
        box.shapeColor = "red";
    }
 
    if(surface2.isTouching(box) ){
     box.shapeColor = "red";
 }
 
 if(surface3.isTouching(box) ){
     box.shapeColor = "red";
 }
 
 if(surface4.isTouching(box) ){
     box.shapeColor = "red";

     return true;
 }
 else {
     return false;
 }

}

function bounceOff(){

    if(box.bounceOff(syrface1) ){
        box.shapeColor = "red";
        
    }
    
    if(box.bounceOff(surface2) ){
        box.shapeColor = "blue";
        
    }
    
    if(box.bounceOff(surface3) ){
        box.shapeColor = "orange";
        
    }
    
    if(box.bounceOff(surface4) ){
        box.shapeColor ="yellow" ;
       
    }
        
    
    box.bounceOff(edge1);
    box.bounceOff(edge2);
    box.bounceOff(edge3);
    box.bounceOff(edge4);
}
  




    


