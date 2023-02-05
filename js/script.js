var btn = document.getElementById('btn');
var modal = document.getElementById('modal');
var content = document.getElementById('modal-content');
var span = document.getElementById('tutup');

btn.onclick = function () {
    modal.style.backgroundColor = 'rgb(0, 0, 0)';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    modal.style.zIndex = '0';
    content.style.top = '0';
  }

span.onclick = function () { 
    modal.style.removeProperty('background-color');
    modal.style.zIndex = '-1';
    content.style.top = '-100%';  
 }

window.onclick = function (e) { 
     if (e.target == modal) {
      console.log(e.target);
         modal.style.removeProperty('background-color');
         modal.style.zIndex = '-1';
        content.style.top = '-100%';
     }
  }

const hexColor = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const color = document.querySelector('#color');
const bttn = document.getElementById('btnc');

bttn.addEventListener('click' , function() {
  let hex = '#';
  for ( let i = 0 ; i < 6 ; i++ ) {
    hex += hexColor[getNumberHex()];
    
    console.log(getNumberHex());
  }

  color.textContent = hex;
  document.body.style.backgroundColor = hex;
})

function getNumberHex() { 
  return Math.floor(Math.random()* hexColor.length);
  // return Math.random()* hexColor.length;
 }