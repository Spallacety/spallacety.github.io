(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.modal').modal();
    $('.tooltipped').tooltip();

    new ClipboardJS('.copy-btn');

  }); // end of document ready
})(jQuery); // end of jQuery name space
