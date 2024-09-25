
let start = Date.now(); 

let timer = setInterval(function() {
       
    let timePassed = Date.now() - start;
  
    if (timePassed >= 100) {
      clearInterval(timer); 
      return;
    }
  
    draw(timePassed);
  
  }, 1);
  
  function draw(timePassed) {
    genretext.style.opacity = `${100-(timePassed+2)}%`
    genre_triangle.style.opacity = `${100-(timePassed+2)}%`
  }

  genretext.remove();
  genre_triangle.remove();