const nome = document.getElementById('nome');
const senha = document.getElementById('senha');
const email = document.getElementById('email');
const btn = document.querySelector('.btn');
const dadosIs = document.querySelectorAll('.dados');
const termoIs = document.querySelector('.termo');

const ValidarTermoIs = ()=>{
    if(!termoIs.checked){
        let spanTemosIS = document.querySelector(`.termos  span`);
        spanTemosIS.style.display = 'block'
        setInterval(() => {
            spanTemosIS.style.display = "none"
        }, 3000); 
        return true
    }
}

const ValidarSexoIs = ()=>{
   let sexo = document.querySelector('.sexo:checked')
   if(!sexo){
        let spanGeneroIS = document.querySelector(`.radio  span`);
        spanGeneroIS.style.display = 'block'
        setInterval(() => {
            spanGeneroIS.style.display = "none"
        }, 3000);
        return true
   }
}

const ValidarDadosIs = ()=>{
    if(!nome.value||!senha.value||!email.value){
        const spanISS = document.querySelector('.area > span');
        spanISS.style.display = 'inline';
        setInterval(() => {
            spanISS.style.display = 'none';
        }, 3000);
        return true
    }
}

const criarContaIs = ()=>{
     if(ValidarTermoIs()||ValidarSexoIs()||ValidarDadosIs()){
        return
    }

    alert("conta criada!!")
    
}

const validarBlur = (dados)=>{ 
    if(!dados.target.value){
            const spanISS = document.querySelector('.area > span');
            spanISS.style.display = 'inline';
            setInterval(() => {
                spanISS.style.display = 'none';
            }, 6000);
    }
    return
    
}
dadosIs.forEach(dados =>{
    dados.addEventListener('blur', validarBlur);
})

btn.addEventListener("click", criarContaIs)

