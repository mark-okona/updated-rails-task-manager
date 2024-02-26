// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "jquery"
// window.$ = jquery
import "@hotwired/turbo-rails"
import "controllers"
//= require jquery


$(document).ready(function() {
  $('.toggle-button').on('click', function() {
    var linkId = $(this).data('link-id');
    $('#' + linkId).toggleClass('completed');
    $(this).toggleClass('icon-completed');
  });
});
