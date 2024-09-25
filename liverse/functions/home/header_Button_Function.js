function mouseoverEV(who){

let start = Date.now(); 

if (whichButton == 1){
  Button = homeButton
}else if (whichButton == 2){
  Button = genreButton
}else if (whichButton == 3){
  Button = accountButton
}

       let timer = setInterval(function() {
       
         let timePassed = Date.now() - start;
       
         if (timePassed >= 100) {
           clearInterval(timer); 
           return;
         }

         Button.addEventListener('mouseleave',() =>{
           clearInterval(timer); 
           return;
         })
       
         draw(timePassed);
       
       }, 1);
       
       function draw(timePassed) {
         if ( who == genre_triangle){
          who.style.borderLeftColor = `rgb(${255-timePassed/2},${255-timePassed/2},${255-timePassed/2})`
         }
         if ( who == homeicon){
          who.style.filter = `invert(${100-timePassed/4}%)`
         }
         who.style.color = `rgb(${255-timePassed/2},${255-timePassed/2},${255-timePassed/2})`
       }
}

function mouseleaveEV(who){
  if (whichButton == 1){
    Button = homeButton
  }else if (whichButton == 2){
    Button = genreButton
  }else if (whichButton == 3){
    Button = accountButton
  }
       
       let start = Date.now(); 

       let timer = setInterval(function() {
       
         let timePassed = Date.now() - start;
       
         if (timePassed >= 100) {
           clearInterval(timer); 
           return;
         }

         Button.addEventListener('mouseover',() =>{
              clearInterval(timer); 
              return;
            })
       
         draw(timePassed);
       
       }, 10);
       
       function draw(timePassed) {
        if ( who == genre_triangle){
          who.style.borderLeftColor = `rgb(${205+timePassed/2},${205+timePassed/2},${205+timePassed/2})`
         }
         if ( who == homeicon){
          who.style.filter = `invert(${75+timePassed/4}%)`
         }
         who.style.color = `rgb(${205+timePassed/2},${205+timePassed/2},${205+timePassed/2})`
       }
}



