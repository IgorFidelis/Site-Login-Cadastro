const nome = document.getElementById('nome')
const senha = document.getElementById('senha')
const email = document.getElementById('email')
const sexo = document.getElementsByName('genero')
const termos = document.getElementById('aceito')  
const btn = document.querySelector('.btn');
const dadosIs = document.querySelectorAll('.dados');
const sexoIs = document.querySelectorAll('.sexo');
const termoIs = document.querySelector('.termo');


// console.log(sexoIs);
// console.log(termoIs);



const validar = (dados)=>{
    if(dados.className == 'sexo'){
        if(!dados.checked ){
            
            return
        }
        return
    }

    if(dados.target.className == 'dados'){
        if(!dados.target.value){
            alert(`[ERRO] falta dados no: ${dados.target.name}`)
            
        }
        console.log('sim');
        return
    };

    console.log(dados.className);
    // if(dados.target === 'sexo'){
    //     console.log(dados);
    // }
    // console.log('outro dados');
    // console.log('continuou');
}

sexoIs.forEach(sexos =>{
    if(!sexos.checked){
        alert(`[ERRO] confirmar o sexo.`)
        return
    }
})


dadosIs.forEach(dados =>{
    dados.addEventListener('blur', validar);
})

btn.addEventListener("click", criar)

function criar(){
    let valido1 = false
    let valido2 = false
    let valido3 = false
    let genero = ''
    let aceita = false
    if(nome.value.length == 0 || senha.value.length == 0 || email.value.length == 0){
        window.alert('[ERRO] Falta dados!');
    } else {
        valido1 = true
    }

    if(sexo[0].checked){
        genero = 'masculino'
         valido2 = true
    } else if(sexo[1].checked){
        genero = 'feminino'
        valido2 = true
    } else if(sexo[2].checked){
        genero = 'outro'
        valido2 = true
    } else {
        window.alert('[ERRO] Informe seu Genero!')
    }
    
    if(termos.checked){
        aceita = true
        valido3 = true
    } else {
        window.alert('[ERRO] Termos não aceitos!')
    }

    if(valido1 === true && valido2 === true && valido3 === true)  {
        alert('Conta Criada!')
    }
}