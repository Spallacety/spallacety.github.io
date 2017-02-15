//para abrir modals
$(document).ready(function(){
  $('.modal').modal();
  document.getElementById("boletim").classList.add("active");
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

function swapBoletimHorario() {
  var display = document.getElementById('boletim').style.display;
  var botao = document.getElementById("swap");

  if(display == "none") {
    document.getElementById('boletim').style.display = 'block';
    document.getElementById('horario').style.display = 'none';
    botao.innerHTML = "Mostrar horário";
  }

  else {
    document.getElementById('boletim').style.display = 'none';
    document.getElementById('horario').style.display = 'block';
    botao.innerHTML = "Mostrar boletim";
  }
}