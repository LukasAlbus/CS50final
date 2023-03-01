var cursor = document.getElementById('follow');

document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
    
})

let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 0;

loadMoreBtn.onclick = () =>{
   let boxes = [...document.querySelectorAll('.see_more')];
   for (var i = currentItem; i < currentItem + 3; i++){
      boxes[i].style.display = 'inline-block';
   }
   currentItem += 3;

   if(currentItem >= boxes.length){
      loadMoreBtn.style.display = 'none';
   }
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "17px";
  } else {
    document.getElementById("header").style.top = "-90px";
  }
  prevScrollpos = currentScrollPos;
}

//dark-mode

// LIGHT THEME COLOR VARIABLES
var lightBase = '#e5e7eb69';
var lightBackground = '#FFFFFF';
var lightBackgroundTransparent = 'rgba(255,255,255,0)';
var lightShadow = 'rgba(18, 18, 18, .3)';
var lightPrimary = '#000000';
var lightPrimaryText = 'rgb(0, 0, 0)';
var lightSecondary = '#03DAC6';
var lightSecondaryDark = '#018786';
var lightErrorColor = '#B00020';
// DARK THEME COLOR VARIABLES
var darkBase = '#1d1d1d';
var darkBackground = '#181818';
var darkBackgroundTransparent = 'rgba(24,24,24,0)';
var darkShadow = 'rgba(255, 255, 255, .1)'
var darkPrimary = '#FFFFFF';
var darkPrimaryText = '#b5b5b5';
var darkSecondary = '#03DAC6';
var darkErrorColor = '#CF6679';

// GLOBAL VARIABLES
var darkModeSwitch = document.querySelector('#Dark-Mode-Switch');
var darkModetoggleIsOn = false;

// CHANGES LIGHT THEME COLORS TO DARK THEME COLORS
function turnOnDarkModeColors() {
    if (darkModetoggleIsOn === true) {
        document.body.style.transition = 'color 1s, background-color 1s';
        document.getElementById('blog').style.transition = 'color 1s, background-color 1s';
        document.documentElement.style.setProperty('--light-theme-base', darkBase);
        document.documentElement.style.setProperty('--light-theme-background', darkBackground);
        document.documentElement.style.setProperty('--light-theme-background-transparent', darkBackgroundTransparent);
        document.documentElement.style.setProperty('--light-theme-primary', darkPrimary);
        document.documentElement.style.setProperty('--light-theme-primary-text', darkPrimaryText);
        document.documentElement.style.setProperty('--light-theme-secondary', darkSecondary);
        document.documentElement.style.setProperty('--light-theme-secondary-dark', darkSecondary);
        document.getElementById('fibonnaci_img').src="./svg/Fibonacci_spiral.png"; 
        document.getElementById('blog').style.backgroundImage="url(./img/20160628_142252.jpeg)"; 
        document.body.style.color = lightBackground;
    } else {
        document.body.style.transition = 'color 1s, background-color 1s';
        document.getElementById('blog').style.transition = 'color 1s, background-color 1s';
        document.documentElement.style.setProperty('--light-theme-base', lightBase);
        document.documentElement.style.setProperty('--light-theme-background', lightBackground);
        document.documentElement.style.setProperty('--light-theme-background-transparent', lightBackgroundTransparent);
        document.documentElement.style.setProperty('--light-theme-primary', lightPrimary);
        document.documentElement.style.setProperty('--light-theme-primary-text', lightPrimaryText);
        document.documentElement.style.setProperty('--light-theme-secondary', lightSecondary);
        document.documentElement.style.setProperty('--light-theme-secondary-dark', lightSecondaryDark);
        document.getElementById('fibonnaci_img').src="./svg/Fibonacci_spiral_dark.png"; 
        document.getElementById('blog').style.backgroundImage="url(./img/chilliwack_lake.jpeg)"; 
        document.body.style.color = 'black';
    }
}

// DARK MODE TOGGLE FUNCTIONALITY


darkModeSwitch.addEventListener('click', function() {
    if (darkModetoggleIsOn === false) {
        darkModeSwitch.style.justifyContent = 'flex-end';
        darkModetoggleIsOn = true;
    } else {
        darkModeSwitch.style.justifyContent = 'flex-start';
        darkModetoggleIsOn = false;
    }
    turnOnDarkModeColors();
    return darkModetoggleIsOn;
});



