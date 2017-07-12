'use strict';

$('#over-menu').on('click','li', function() {
  let $chosen = $(this).text().toLowerCase();
  $('.tab').hide();
  console.log('#' + $chosen);
  $('#' + $chosen).show();
});
