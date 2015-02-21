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
});
