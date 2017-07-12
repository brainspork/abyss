'use strict';

$('#main-nav').on('click', 'li', function(){
  let $chosen = $(this).text().toLowerCase();
  $('.tab').hide();
  $('#' + $chosen).show();
});

$('#over-menu').on('click','li', function() {
  let $chosen = $(this).text().toLowerCase();
  $('.tab').hide();
  $('#' + $chosen).show();
});
