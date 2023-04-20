const nome = document.getElementById('nome')
const senha = document.getElementById('senha')
const email = document.getElementById('email')
const termos = document.getElementById('aceito')  
const btn = document.querySelector('.btn');
const dadosIs = document.querySelectorAll('.dados');
const termoIs = document.querySelector('.termo');


const validar = (dados)=>{
    console.log(dados);
    if(dados.target.className === 'btn'){
        console.log('btn');
        return true
    }

    if(!dados.target.value){
        alert(`[ERRO] falta dados no: ${dados.target.name}`)
    }
    return
    
}



dadosIs.forEach(dados =>{
    dados.addEventListener('blur', validar);
})

btn.addEventListener("click", criar)

function criar(e){
    console.log(e);

   if(!validar(e)){
       return
    }
    
    console.log('chegou');


    let sexo1 = document.querySelector('.sexo:checked');
    if(!sexo1){
        let spanGeneroIS = document.querySelector(`.radio  span`);
        console.log(spanGeneroIS);
        spanGeneroIS.style.display = 'block'
        setInterval(() => {
            spanGeneroIS.style.display = "none"
        }, 3000);
        return
    }

    if(!termoIs.checked){
        let spanTemosIS = document.querySelector(`.termos  span`);
        console.log(spanTemosIS);
        spanTemosIS.style.display = 'block'
        setInterval(() => {
            spanTemosIS.style.display = "none"
        }, 3000);
        return
    }


        alert('Conta Criada!')
    
}