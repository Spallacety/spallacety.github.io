$(document).ready(function(){
  $('.modal').modal();
  $('.tooltipped').tooltip({delay: 50});
  //$('.custom-nav .light-green .nav-wrapper ul li a[href="/' + location.pathname + '"]').closest('li').addClass('active'); 
  $.each($('#navbar-aluno').find('li'), function() {
    $(this).toggleClass('active', 
      window.location.pathname.indexOf($(this).find('a').attr('href')) > -1);
  }); 
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