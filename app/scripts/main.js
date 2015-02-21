(function setRange(){
  'use strict';
  var valueAmt = 80;
  $('#js-range-1').attr('value', valueAmt);
  $('#js-range-result-1').text(valueAmt);
})();

$(function(){
  'use strict';
  var menuMorph = function() {
    $('.icon-menu_atom--top').toggleClass('icon-menu_atom--rotatedown');
    $('.icon-menu_atom--middle').toggleClass('icon-menu_atom--hide-middle');
    $('.icon-menu_atom--bottom').toggleClass('icon-menu_atom--rotateup');
  };

  $('#js-nav-trigger, .site-overlay').on('click', function() {
    menuMorph();
  });

  var headerHeight = $('header').height();

  $('.pushy, .site-overlay').css('top', headerHeight);
});
