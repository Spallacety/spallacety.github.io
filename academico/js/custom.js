$( window ).on( "load", function() {
  $('#navbar-index').load("common/navbar-index.html");
  $('#navbar-aluno').load("common/navbar-aluno.html");
  $('#footer').load("common/footer.html");
  var res = window.location.pathname.split("/");
  var activeClass = res.pop().split(".");
  document.getElementById(activeClass.reverse().pop()).className = 'active';
  $('.tooltipped').tooltip({delay: 50});
  $(".dropdown-button").dropdown({
    inDuration: 300,
    outDuration: 225,
    constrainWidth: false,
    hover: false,
    gutter: 0,
    belowOrigin: true,
    alignment: 'left',
    stopPropagation: false
  });
  $('.datepicker').pickadate({
    selectMonths: false,
    selectYears: 1
  });
});

$(document).ready(function() {
  $('.modal').modal({
    dismissible: false
  });
  $('select').material_select();
});

$(document).click(function(event) {
  $(document).click(function(event) {
    if(document.getElementById("notificacoes.html").classList.contains('active')){
      document.getElementById("notificacoes.html").className = '';
    }
  });
});

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

function abrirModalArquivo(){
  $('#arquivo-modal').modal('open');
  document.getElementById("nome-arquivo").value = "";
}

function enviarAviso(){
  $('#aviso-modal').modal('open');
}

function aulaRegistrada(){
  $('#aula-modal').modal('open');
}

function clickNotificacao(){
  if(!document.getElementById("notificacoes.html").classList.contains('active')){
    document.getElementById("notificacoes.html").className = 'active';
  }
}

function login(){
  document.getElementById('login-form').style.display = 'block';
  document.getElementById('button').style.display = 'none';
}

function escolherTurma(){
  var conceptVal = $("#selecionar-turma option:selected").val();

  switch(conceptVal){
    case "ads":
      document.getElementById("nome-turma").innerHTML = "Enviar para turma de IHC (ADS IV)";
      document.getElementById('escolher-turma').style.display = 'none';
      document.getElementById('material').style.display = 'block';
      break;
    case "tecnico":
      document.getElementById("nome-turma").innerHTML = "Enviar para turma de IHC (Técnico)";
      document.getElementById('escolher-turma').style.display = 'none';
      document.getElementById('material').style.display = 'block';
      break;
    default:
      $('#turma-modal').modal('open');
      break;
  }
}

function escolherTurmaNota(){
  var conceptVal = $("#selecionar-turma option:selected").val();

  switch(conceptVal){
    case "ads":
      document.getElementById("nome-turma").innerHTML = "Turma de IHC (ADS IV)";
      document.getElementById('tabela-nota').style.display = 'block';
      document.getElementById('edit-btn').style.display = 'block';
      document.getElementById('escolher-turma').style.display = 'none';
      break;
    default:
      $('#turma-modal').modal('open');
      break;
    }
}

function mostrarMatriz(){
  var conceptVal = $("#selecionar-turma option:selected").val();

  switch(conceptVal){
    case "ads":
      document.getElementById('matriz').style.display = 'block'
      break;
    default:
      $('#curso-modal').modal('open');
      break;
    }
}

function editarNotas(){
    document.getElementById('tabela-nota').style.display = 'none';
    document.getElementById('tabela-edit-nota').style.display = 'block';
    document.getElementById('edit-btn').style.display = 'none';
    document.getElementById('save-btn').style.display = 'block';
}

function salvarNotas(){
    document.getElementById('tabela-nota').style.display = 'block';
    document.getElementById('tabela-edit-nota').style.display = 'none';
    document.getElementById('edit-btn').style.display = 'block';
    document.getElementById('save-btn').style.display = 'none';
    $('#boletim-modal').modal('open');
}

function escolherDia(){
  var conceptVal = $("#selecionar-turma option:selected").val();

  switch(conceptVal){
    case "ads":
      document.getElementById("nome-turma").innerHTML = "IHC (ADS IV) - Março";
      document.getElementById('mes-chamada').style.display = 'block';
      document.getElementById('reposicao').style.display = 'block';
      document.getElementById('escolher-turma').style.display = 'none';
      break;
    default:
      $('#turma-modal').modal('open');
      break;
  }

}

function aulaNormal(){
  document.getElementById("nome-turma").innerHTML = "Turma de IHC (ADS IV) - DD/MM/AAAA";
  document.getElementById('aula').style.display = 'block';
  document.getElementById('edit-btn').style.display = 'block';
  document.getElementById('mes-chamada').style.display = 'none';
}

function aulaReposicao(){
  aulaNormal();
  document.getElementById("nome-turma").innerHTML = "Turma de IHC (ADS IV) - Aula de Reposição";
  document.getElementById('reposicao-aula').style.display = 'block';
}