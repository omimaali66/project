let stars1 = document.getElementById('stars1');
 
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river5 = document.getElementById('river5');
let boat6 = document.getElementById('boat6');
let Omima = document.querySelector('.Omima');

window.onscroll = function(){
    let value = scrollY;
    stars1.style.left = value + 'px';
    
    mountains3.style.top= value*2 + 'px';
    mountains4.style.top= value*1.5 + 'px';
    river5.style.top= value  + 'px';
    boat6.style.top= value  + 'px';
    boat6.style.left= value * 3 + 'px';
    
    Omima.style.fontSizeontSize = value + 'px';
    if (screenY >= 67 ){
        Omima.style.fontSize = 67 + 'px';
        Omima.style.position = 'fixed';
     if (screenY >= 478 ){
      Omima.style.display = 'none' ;  
    }else{
   Omima.style.display = 'block'; 
    }
    if (screenY >= 127 ){
        document.querySelector('.main').style.background = 'linear-gradient(#376281 , #10001f)'
    }
     
      }
}





 