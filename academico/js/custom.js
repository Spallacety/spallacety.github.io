$(document).ready(function(){
  $('.modal').modal();
  $('.tooltipped').tooltip({delay: 50});
  $('a[href="academico/' + location.pathname + '"]').closest('li').addClass('active'); 
});

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