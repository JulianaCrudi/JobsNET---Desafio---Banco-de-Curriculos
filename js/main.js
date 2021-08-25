'use strict';

/*CONSULTA CEP*/
const preencherFormulario = (endereco) =>{
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('uf').value = endereco.uf;
}

const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep);
 
const pesquisarCep = async() => {
    const cep = document.getElementById('cep').value;
    const url = `http:/viacep.com.br/ws/${cep}/json/`
   if(cepValido(cep)){
        const dados = await fetch(url)
        const endereco = await dados.json()
      if(endereco.hasOwnProperty('erro')){
        alert('CEP NÃO ENCONTRADO')
      } else{
         preencherFormulario(endereco) 
      }
    } else{
    alert('CEP INCORRETO! TENTE NOVAMENTE')
   }
}
document.getElementById('cep').addEventListener('focusout',pesquisarCep)

/*VALIDAÇÃO CPF*/

const validaCPF = async() =>{
  const cpf = document.getElementById('cpf').value
    if (cpf.length != 11) {
      alert('CPF INVALIDO! POR FAVOR DIGITE UM CPF VÁLIDO COM 11 DIGITOS (APENAS NÚMEROS)')
  } else{
    return true
  }
}
document.getElementById('cpf').addEventListener('focusout',validaCPF)

/*VALIDAÇÃO DO RG*/

const validaRG = async() => {
  const rg = document.getElementById('rg').value;
  if (rg.length != 9) {
     alert('RG INVALIDO! POR FAVOR DIGITE UM RG VÁLIDO COM 9 DIGITOS (APENAS NÚMEROS)')
  }
  else{
    return true;
  }
}
document.getElementById('rg').addEventListener('focusout',validaRG)