
const homeButton = document.getElementById('home')
const hometext = document.getElementById('hometext')
const homeicon = document.getElementById('homeicon')
const genreButton = document.getElementById('genre')
const genretext = document.getElementById('genretext')
const genre_triangle = document.getElementById('genre_triangle')
const accountButton = document.getElementById('account')
const accounttext = document.getElementById('accounttext')
const search = document.getElementById('search')

const whatlanguage = window.navigator.language
console.log(whatlanguage)
let whichButton=0
let t = 0
let first = 0 

if (whatlanguage == "ja"){

}else if (whatlanguage == "en"){
   hometext.textContent = 'Home'
   genretext.textContent = 'Genre'
   accounttext.textContent = 'Sign in'
}else if (whatlanguage == "zh"){
    hometext.textContent = '首页'
    genretext.textContent = '类型'
    accounttext.textContent = '登录'
}

homeButton.addEventListener('mouseover', () =>{
       whichButton = 1
       mouseoverEV(hometext);
       mouseoverEV(homeicon);
})
homeButton.addEventListener('mouseleave', () =>{
       whichButton = 1
       mouseleaveEV(hometext);
       mouseleaveEV(homeicon);
})
genreButton.addEventListener('mouseover', () =>{
    whichButton = 2
    mouseoverEV(genretext);
    mouseoverEV(genre_triangle);
})

genreButton.addEventListener('mousedown', () =>{
    if (first == 0 ){
        showGenres();
        first = 1
    }else if (t == 0){
            showGenres_false();
            t = 1
    }else{
            showGenres();
            t = 0
    }
});

genreButton.addEventListener('mouseleave', () =>{
    whichButton =2
    mouseleaveEV(genretext);
    mouseleaveEV(genre_triangle);
})

accountButton.addEventListener('mouseover', () =>{
    whichButton = 3
    mouseoverEV(accounttext);
})
accountButton.addEventListener('mouseleave', () =>{
    whichButton = 3
    mouseleaveEV(accounttext);
})



