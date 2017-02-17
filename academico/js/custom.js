$(document).ready(function(){
  $('.modal').modal();
});

/*  $(document).ready(function(){
    $('.tooltipped').tooltip({delay: 50});
    $(".dropdown-button").dropdown();
  });*/

$(window).on("load", function() {
  document.getElementById(''+ location.pathname'').className = 'active';
});


$('#navbar-aluno').load("common/navbar-aluno.html");
$('#footer').load("common/footer.html");

function verificarLogin() {
  if(document.getElementById("matricula").value == 'aluno'){
    open("https://spallacety.github.io/academico/boletim", "_self");
  }
  else if(document.getElementById("matricula").value == 'professor'){
    open("https://spallacety.github.io/academico/professor", "_self");
  }
  else{
    $('#error').modal('open');
    document.getElementById("senha").value = "";
  }
}