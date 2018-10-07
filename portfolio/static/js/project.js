$(document).ready(function() {
  "use strict";

  // auto scroll to top after reload
    history.scrollRestoration = "manual";
    window.scrollTo(0,0);

  // remove # URL fragments on reload
  window.location.replace("#");
  if (typeof window.history.replaceState === 'function') {
    history.replaceState({}, '', window.location.href.slice(0, -1));
  }

  // smooth anchor scrolling
  $("a.smooth-scroll").on('click', function(e) {
    e.preventDefault();
    // Store hash
    var hash = this.hash;
    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function() {
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    }); // animate
  }); // scroll-down click

  $('.scroll-to-top').on('click', function(e) {
    e.preventDefault();
    window.scrollTo(0,0);
  });

  // console msg
  console.log('%c Hi, I could be working for you! hi@zilongli.com ', 'background: #0059FF; color: #FFFFFF');

}); // dom ready
