
//Dark/Light theme
var r = document.querySelector(':root');

function dark() {
  r.style.setProperty('--bg-color', '#292929');
  r.style.setProperty('--bg-color-b', '#f4f4f4');
}
function light() {
  r.style.setProperty('--bg-color', '#f4f4f4');
  r.style.setProperty('--bg-color-b', '#292929');
}

let button = document.getElementById("bttn");
function change()
{
    if (button.innerHTML=="DARK"){
      button.innerHTML = "LIGHT"
    }
    else{
      button.innerHTML = "DARK";
    } 
}

button.addEventListener("click", () => {
  change();
  if(button.innerHTML=="DARK"){
    light()
  }
  else{
    dark()
  }
});

//scrolling
$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function(){
          window.location.hash = hash;
        });
      }
    });
  });
