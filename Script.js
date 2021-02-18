var vidBtn = document.getElementById('vidBtn');
var soundBtn = document.getElementById('soundIcon');
var vid = document.getElementById('video');
// var hamburger = document.getElementById('hamburger');

vidBtn.addEventListener('click', startVid);
soundBtn.addEventListener('click', startVid);
// hamburger.addEventListener('click', showMenu);
// document.addEventListener('mouseout', onMouseOut)

// Funtion To Start Video From Beginning
function startVid() {
    vid.muted = !vid.muted;
    vid.loop = false;
    vid.currentTime = 0;
    vid.controls = true;
    vidBtn.style.display = 'none';
    soundBtn.style.display = 'none';
    vid.style.pointerEvents = 'all';
}

// Function To Show The Menu



$(document).ready(function() {

  $('.menu').on('click', () => {
    $('.nav-menu').toggleClass('hide');
  });

    //Advisor Firm Images Fade In On Scroll
  $(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade-in-section").each(function() {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight();
        
        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
          if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
        } else { //object goes out of view (scrolling up)
          if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
        }
      });
    }).scroll(); //invoke scroll-handler on page-load
  });

});