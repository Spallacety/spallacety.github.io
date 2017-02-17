$( window ).on( "load", function() {
  document.getElementById('calendario').className = 'active';
  $('.modal').modal();
  $('.tooltipped').tooltip({delay: 50});
  $(".dropdown-button").dropdown();
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