$( window ).on( "load", function() {
  var res = window.location.pathname.split("/");
  document.getElementById(res.pop()).className = 'active';
  $('.tooltipped').tooltip({delay: 50});
  $(".dropdown-button").dropdown({
    inDuration: 300,
    outDuration: 225,
    constrainWidth: false, // Does not change width of dropdown to that of the activator
    hover: false, // Activate on hover
    gutter: 0, // Spacing from edge
    belowOrigin: true, // Displays dropdown below the button
    alignment: 'left', // Displays dropdown with edge aligned to the left of button
    stopPropagation: false // Stops event propagation
  });

   var tela = $(window).height();
   var conteudo = $('navbar-professor').height + $('#content').height();

   if ( conteudo < tela ) {
      $('#footer').css({'position':'absolute','bottom':'0'});
   }
});

$(document).ready(function() {
  $('.modal').modal();
  $('select').material_select();
});

$('#navbar-aluno').load("common/navbar-aluno.html");
$('#navbar-professor').load("common/navbar-professor.html");
$('#footer').load("common/footer.html");

function verificarLogin() {
  if(document.getElementById("matricula").value == 'aluno'){
    open("boletim.html", "_self");
  }
  else if(document.getElementById("matricula").value == 'professor'){
    open("chamada.html", "_self");
  }
  else{
    $('#error').modal('open');
    document.getElementById("senha").value = "";
  }
}

function abrirModalSair(){
  $('#logout-modal').modal('open');
}


function abrirModalMatricula(){
  $('#matricula-modal').modal('open');
}