
//Dark/Light theme
// var r = document.querySelector(':root');

// function dark() {
//   r.style.setProperty('--bg-color', '#292929');
//   r.style.setProperty('--bg-color-b', '#f4f4f4');
// }
// function light() {
//   r.style.setProperty('--bg-color', '#f4f4f4');
//   r.style.setProperty('--bg-color-b', '#292929');
// }

// let button = document.getElementById("bttn");
// function change()
// {
//     if (button.innerHTML=="DARK"){
//       button.innerHTML = "LIGHT"
//     }
//     else{
//       button.innerHTML = "DARK";
//     } 
// }

// button.addEventListener("click", () => {
//   change();
//   if(button.innerHTML=="DARK"){
//     light()
//   }
//   else{
//     dark()
//   }
// });

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

  
function disableScroll() {
  document.body.classList.add("stop-scrolling");
}
function enableScroll() {
  document.body.classList.remove("stop-scrolling");
}
//loading animation
$(document).ready(function(e) {
  var UD_h1_string = $("h1").text();
  $("h1").empty();

  function ud_create_span(Objekt, Class, Target) {
    $("<span>", {
      class: Class,
      text: Objekt
    }).appendTo(Target);
  }

  for (i = 0; i < UD_h1_string.length; i++) {
    $("h1").html(
      ud_create_span(UD_h1_string.charAt(i), "ud_bounce ud_" + i, "h1")
    );
  }

  var UD_h1_spans = $("h1").children("span");
  var UD_h1_span_width = 0;

  for (i = 0; i <= UD_h1_spans.length; i++) {
    for (p = 0; p < i; p++) {
      UD_h1_span_width = UD_h1_span_width + $(UD_h1_spans[p]).width();
    }

    $(UD_h1_spans[i]).css("left");
    UD_h1_span_width = 0;
  }

  ud_animation(
    $("h1")
      .children("span")
      .first()
  );

  function ud_animation(Objekt) {
    $(Objekt).animate({ bottom: 8 }, 100, function(e) {
      if (
        $(Objekt)
          .next()
          .hasClass("ud_bounce")
      ) {
        ud_animation($(Objekt).next(".ud_bounce"));
      } else {
        ud_animation(
          $("h1")
            .children("span")
            .first()
        );
      }
      $(Objekt).animate({ bottom: 15 }, 100, function(e) {
        $(Objekt).animate({ bottom: 0 }, 150);
      });
    });
  }
});

function disableScroll() {
  document.body.classList.add("stop-scrolling");
}

function enableScroll() {
  document.body.classList.remove("stop-scrolling");
}

function topScroll() {
  // Get the current page scroll position
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  window.scrollTo(scrollLeft, scrollTop);
}

$(window).on("load",function(){
     $(".loader-wrapper").fadeOut("slow");
});

// navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos | currentScrollPos < 60) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-3.5em";
    document.getElementById("menu-btn").checked = false;
  }
  prevScrollpos = currentScrollPos;
}

const link = document.getElementById('link')

link.addEventListener("click",() =>{
  document.getElementById("menu-btn").checked = false;
})

disableScroll()