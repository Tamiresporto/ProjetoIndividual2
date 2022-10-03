function base64() {
    var entrada = document.querySelector(".mensagemRecebida64").value;
    var resultado = document.querySelector("#resultado64");
    if (document.querySelector("#criptografar").checked)
      resultado.innerHTML = btoa(entrada);
    else resultado.innerHTML = atob(entrada);
    }