const nome = document.querySelector('.nome');
const senha = document.querySelector('.senha');
const btn = document.querySelector('.btn');


const entrar = ()=> {
    if (nome.value.length == 0 || senha.value.length == 0){
        window.alert('[ERRO] Preencha os dados!')
    } else {
        window.alert('Tudo certo!')
    }
}

btn.addEventListener('click', entrar);