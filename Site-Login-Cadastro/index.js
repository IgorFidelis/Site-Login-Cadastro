function entrar(){
    let nome = document.querySelector('.nome')
    let senha = document.querySelector('.senha')
    if (nome.value.length == 0 && senha.value.length == 0){
        window.alert('[ERRO] Preencha os dados!')
    } else {
        window.alert('Tudo certo!')
    }
}