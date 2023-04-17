const nome = document.querySelector('.nome');
const senha = document.querySelector('.senha');
const btn = document.querySelector('.btn');

btn.addEventListener('click', entrar);

const entrar = ()=>{
    if (nome.value.length == 0 || senha.value.length == 0){
        window.alert('[ERRO] Preencha os dados!')
    } else {
        window.alert('Tudo certo!')
    }
}
