const nome = document.querySelector('.nome');
const senha = document.querySelector('.senha');
const btn = document.querySelector('.btn');
const inputsIS = document.querySelectorAll('input');

const validar = (a)=>{
    if(!a.value){
        let span = document.querySelector(`.${a.className} + span`)
        span.style.display = 'inline';
        let time = setTimeout(() => {
            span.style.display = 'none';
        }, 2000);

        
    }
}



const entrar = ()=> {
    
    if(!nome.value || !senha.value){
        inputsIS.forEach(inputs => validar(inputs))
        return
    }
    
    alert('Login feito!')
  
}

btn.addEventListener('click', entrar);