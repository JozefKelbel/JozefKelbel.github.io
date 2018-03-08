/*
document.getElementById("november").addEventListener("click", function(){
   document.getElementById("fact1").style.opacity = 1; 
});

document.getElementById("soldier").addEventListener("click", function(){
   document.getElementById("fact2").style.opacity = 1; 
});

document.getElementById("airplanes").addEventListener("click", function(){
   document.getElementById("fact3").style.opacity = 1; 
});

document.getElementById("poppies").addEventListener("click", function(){
   document.getElementById("fact4").style.opacity = 1; 
});

document.getElementById("truce").addEventListener("click", function(){
   document.getElementById("fact5").style.opacity = 1; 
});

document.getElementById("poem").addEventListener("click", function(){
   document.getElementById("fact6").style.opacity = 1; 
}); */
/*
document.getElementById("november").addEventListener("click", function(){
   document.getElementById("fact1").style.display = "block";
});
document.getElementById("soldier").addEventListener("click", function(){
   document.getElementById("fact2").style.display = "block";
});
document.getElementById("airplanes").addEventListener("click", function(){
   document.getElementById("fact3").style.display = "block";
});
document.getElementById("poppies").addEventListener("click", function(){
   document.getElementById("fact4").style.display = "block";
});
document.getElementById("truce").addEventListener("click", function(){
   document.getElementById("fact5").style.display = "block";
});
document.getElementById("poem").addEventListener("click", function(){
   document.getElementById("fact6").style.display = "block";
}); */


//vars and facts
var soldier = document.getElementById("soldier");
var november = document.getElementById("november");
var airplanes = document.getElementById("airplanes");
var poppies = document.getElementById("poppies");
var  truce = document.getElementById("truce");
var poem = document.getElementById("poem");
var nurse = document.getElementById("nurse");
var silence = document.getElementById("silence");
var title = document.getElementById("title");

soldier.addEventListener("click", function(){
   document.getElementById("fact2").style.display = "block"; 
});

document.getElementById("fact2").addEventListener("click", function(){
   document.getElementById("fact2").style.display = "none"; 
});

november.addEventListener("click", function(){
   document.getElementById("fact1").style.display = "block"; 
});

document.getElementById("fact1").addEventListener("click", function(){
   document.getElementById("fact1").style.display = "none"; 
});

airplanes.addEventListener("click", function(){
   document.getElementById("fact3").style.display = "block"; 
});

document.getElementById("fact3").addEventListener("click", function(){
   document.getElementById("fact3").style.display = "none"; 
});

poppies.addEventListener("click", function(){
   document.getElementById("fact4").style.display = "block"; 
});

document.getElementById("fact4").addEventListener("click", function(){
   document.getElementById("fact4").style.display = "none"; 
});

truce.addEventListener("click", function(){
   document.getElementById("fact5").style.display = "block"; 
});

document.getElementById("fact5").addEventListener("click", function(){
   document.getElementById("fact5").style.display = "none"; 
});

poem.addEventListener("click", function(){
   document.getElementById("fact6").style.display = "block"; 
});

document.getElementById("fact6").addEventListener("click", function(){
   document.getElementById("fact6").style.display = "none"; 
});

nurse.addEventListener("click", function(){
   document.getElementById("fact7").style.display = "block"; 
});

document.getElementById("fact7").addEventListener("click", function(){
   document.getElementById("fact7").style.display = "none"; 
});

silence.addEventListener("click", function(){
   document.getElementById("fact8").style.display = "block"; 
});

document.getElementById("fact8").addEventListener("click", function(){
   document.getElementById("fact8").style.display = "none"; 
});

title.addEventListener("click", function(){
   document.getElementById("fact9").style.display = "block"; 
});

document.getElementById("fact9").addEventListener("click", function(){
   document.getElementById("fact9").style.display = "none"; 
});

document.getElementById("mainfact").addEventListener("click", function(){
   document.getElementById("fact10").style.display = "block"; 
});

document.getElementById("fact10").addEventListener("click", function(){
   document.getElementById("fact10").style.display = "none"; 
});

//animations
document.getElementById("november").animate([
  // keyframes
  { transform: 'translateX(0px)' }, 
  { transform: 'translateX(-1290px)' }
], { 
  // timing options
  duration: 8500,
  iterations: Infinity
});

document.getElementById("airplanes").animate([
  // keyframes
  { transform: 'translateX(0px)' }, 
  { transform: 'translateX(1290px)' }
], { 
  // timing options
  duration: 10000,
  iterations: Infinity
});

document.getElementById("nurse").animate([
  // keyframes
  { transform: 'translateY(0px)' }, 
  { transform: 'translateX(1290px)' }
], { 
  // timing options
  duration: 17500,
  iterations: Infinity
});

window.onload = function() {
    document.getElementById("audio").play();
    vid.volume = 0.02;
}