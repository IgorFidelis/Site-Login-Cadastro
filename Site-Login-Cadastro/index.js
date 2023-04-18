const nome = document.querySelector('.nome');
const senha = document.querySelector('.senha');
const btn = document.querySelector('.btn');
const inputsIS = document.querySelectorAll('input');

const validar = (a)=>{
    console.log(a);
}



const entrar = (e)=> {

    inputsIS.forEach(input => {
        validar(input);
    });
    console.log(e);
    if(!nome.value){
        let span = document.querySelector('.nome + span')
        span.style.display = 'inline';
        setInterval(() => {
            span.style.display = 'none';
        }, 5000);
        return
    }

    if(!senha.value){
        let span = document.querySelector('.senha + span')
        span.style.display = 'inline';
        setInterval(() => {
            span.style.display = 'none';
        }, 5000);
        return
    }

  
}

btn.addEventListener('click', entrar);