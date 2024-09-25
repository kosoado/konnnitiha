function showGenres(){
  let start = Date.now(); 
  
         let timer = setInterval(function() {
         
           let timePassed = Date.now() - start;
         
           if (timePassed >= 90) {
             clearInterval(timer); 
             if (`${genre_triangle.style.transform}` || 'rotate'+90+ 'deg'){
                 genre_triangle.style.transform = `rotate(90deg)`
             }
             showGenreEV()
             return;
           }

           draw(timePassed);
         
         }, 1);
         
         function draw(timePassed) {
           genre_triangle.style.transform = `rotate(${timePassed}deg)`
  }
}
function showGenres_false(){
  let start = Date.now(); 
  
         let timer = setInterval(function() {
         
           let timePassed = Date.now() - start;
         
           if (timePassed >= 90) {
            if (`${genre_triangle.style.transform}` || 'rotate'+0+ 'deg'){
              genre_triangle.style.transform = `rotate(0deg)`
          }
             clearInterval(timer); 
             return;
           }
  
         
           draw(timePassed);
         
         }, 1);
         
         function draw(timePassed) {
           genre_triangle.style.transform = `rotate(${90-timePassed}deg)`
  }
}