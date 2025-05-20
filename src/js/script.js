var botaoEntrar  = document.getElementById("submit")

function login() {
  var campoEmail = document.getElementById("email").value

  var campoSenha = document.getElementById("password").value


  if( campoEmail == "teste@teste.com" && campoSenha == "teste" ) {
   window.location.replace("dashboard.html")

 } else {

   alert("Email ou senha incorretos")

 }
  
  
    console.log("Entrou na função login")
}

botaoEntrar.addEventListener("click", login )