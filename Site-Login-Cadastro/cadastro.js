let nome = document.getElementById('nome')
let senha = document.getElementById('senha')
let email = document.getElementById('email')

let sexo = document.getElementsByName('genero')

let termos = document.getElementById('aceito')  

function criar(){
    let valido1 = false
    let valido2 = false
    let valido3 = false
    let genero = ''
    let aceita = false
    if(nome.value.length == 0 || senha.value.length == 0 || email.value.length == 0){
        window.alert('[ERRO] Falta dados!')
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