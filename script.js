//TODO
//Black/white theme
//Ostylować zdjęcie grupowe
//Ostylować zdjęcia pojedyńczych osób i je opisać
  


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
