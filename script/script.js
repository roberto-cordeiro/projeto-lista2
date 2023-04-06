/*  PRIMEIRA QUESTÂO  */
let numero
function numero10() {
    numero = document.getElementById("numero10Info").value
    numero = parseInt(numero)
    if (numero === 10) {
        document.getElementById("result1").value = "o número " + [numero] + " é igual á 10!"
    } else if (numero < 10) {
        document.getElementById("result1").value = "o número " + [numero] + " é menor que 10!"
    } else if (numero > 10) {
        document.getElementById("result1").value = "o número " + [numero] + " é maior á 10!"
    } else {
        document.getElementById("result1").value = "FAVOR, insira os dados!"
    }
}
/* LIMPAR campos */
function limparNumero10() {
    document.getElementById("numero10Info").value = ""
    document.getElementById("result1").value = ""
}
/*   /PRIMEIRA QUESTÂO  */


/*  SEGUNDA QUESTÂO  */
let pessoa = Array
let nome
let nacionalidade
function verificaPessoaBra() {
    for (i = 0; i < 1; i++) {
        nome = prompt("Qual é o seu nome?")
        nacionalidade = prompt("Qual a sua nacionalidade?")
        pessoa = { nome, nacionalidade }
    }
    if (pessoa.nacionalidade === "brasileiro" || pessoa.nacionalidade === "brasileira" || pessoa.nacionalidade === "Brasileira" || pessoa.nacionalidade === "Brasileiro") {
        document.getElementById("result2").value = pessoa.nome + " É Brasileiro(a)"
    } else if (pessoa.nome === "" || pessoa.nacionalidade === "") {
        document.getElementById("result2").value = "Dados inválidos, tente novamente!"
    } else if (pessoa.nacionalidade !== "brasileiro" || pessoa.nacionalidade !== "brasileira" || pessoa.nacionalidade !== "Brasileira" || pessoa.nacionalidade !== "Brasileiro") {
        document.getElementById("result2").value = pessoa.nome + " NÃO é Brasileiro(a)"
    }
}
/* LIMPAR campos */
function limparPessoaBra() {
    document.getElementById("result2").value = ""
}
/*  /SEGUNDA QUESTÂO  */


/*  TERCEIRA QUESTÂO  */
let sorteio
let sorte
function numeroSorteio() {
    sorte = Math.floor(Math.random() * (10 - 1) + 1)
    document.getElementById("numeroSorteio").value = "Número da sorte (" + [sorte] + ")"
    if (sorte !== null) {
        sorteio = Math.floor(Math.random() * (10 - 1) + 1)
        document.getElementById("numeroSorteado").value = "Número sorteado (" + [sorteio] + ")"
    }
    if (sorte === sorteio) {
        document.getElementById("resultSorteio").value = "Parabéns o número " + [sorteio] + " GANHOU!"
    } else {
        document.getElementById("resultSorteio").value = "O número " + [sorteio] + " não foi o ganhador!"
    }
}
/* LIMPAR campos */
function limparNumeroSorteio() {
    document.getElementById("numeroSorteio").value = ""
    document.getElementById("numeroSorteado").value = ""
    document.getElementById("resultSorteio").value = ""
}
/*  /TERCEIRA QUESTÂO  */


/*  QUARTA QUESTÂO  */
let num1
let num2
let num3
let troca
function numeroMaior() {
    num1 = prompt("Digite o primeiro número: ")
    num1 = parseInt(num1)
    num2 = prompt("Digite o segundo número: ")
    num2 = parseInt(num2)
    num3 = prompt("Digite o terceiro número: ")
    num3 = parseInt(num3)
    if (num1 > num2 && num1 > num3 && num2 > num3) {
    } if (num1 > num2 && num1 > num3 && num3 > num2) {
        troca = num3
        num3 = num2
        num2 = troca
    } if (num2 > num3 && num2 > num1 && num3 > num1) {
        troca = num1
        num1 = num2
        num2 = num3
        num3 = troca
    } if (num2 > num3 && num2 > num1 && num1 > num3) {
        troca = num1
        num1 = num2
        num2 = troca
    } if (num3 > num1 && num3 > num2 && num1 > num2) {
        troca = num3
        num3 = num2
        num2 = num1
        num1 = troca
    } if (num3 > num2 && num3 > num1 && num2 > num1) {
        troca = num3
        num3 = num1
        num1 = troca
    }
    document.getElementById("result4").value = " Maior (" + [num1] + ") - Medio (" + [num2] + ") - Menor (" + [num3] + ")"
}
/* LIMPAR campos */
function limparNumeroMaior() {
    document.getElementById("result4").value = ""
}
/*  /QUARTA QUESTÂO  */


/*  QUINTA QUESTÂO  */
let teste = []
let nomes
let idade
let sexo
let ensino
let nacionalidades
function testeAprova(){
    nomes = prompt("Qual é o seu nome?")
    idade = parseInt(prompt("Qual é a sua idade?"))
    sexo = prompt("Qual é o seu sexo? 'Ex: Masculino, Feminino").toLowerCase()
    ensino = prompt("Informe o seu grau de ensino: 'Ex: Medio, Superior, Mestrado, Doutorado").toLowerCase()
    nacionalidades = prompt("Qual a sua nacionalidade? 'Ex: Brasileiro'")
    teste = {nomes, idade, sexo, ensino, nacionalidades}
    
    if(sexo === "masculino" || sexo === "m" || sexo === "homem"){
        if(idade >= 18 && idade <= 25 && ensino === "medio"){
            document.getElementById("result5").value = [nomes]+" ,APROVADO, 65 pontos! Critérios mínimos alcançados"
        }if(idade >= 18 && idade <= 25 && ensino === "superior"){
            document.getElementById("result5").value = [nomes]+" ,APROVADO, 85 pontos! Critérios médios alcançados"
        }if(idade >= 18 && idade <= 25 && ensino === "mestrado" || ensino === "doutorado"){
            document.getElementById("result5").value = [nomes]+" ,APROVADO, 100 pontos! Critérios máximo alcançados"
        }if(idade < 18 || idade > 25){
            document.getElementById("result5").value = [nomes]+" ,REPROVADO, fora da faixa de idade!"
        }
    }else if(sexo === "feminino" || sexo === "f" || sexo === "mulher"){
        if(idade >= 18 && idade <= 25 && ensino === "medio"){
            document.getElementById("result5").value = [nomes]+" ,APROVADA, 65 pontos! Critérios mínimos alcançados"
        }if(idade >= 18 && idade <= 25 && ensino === "superior"){
            document.getElementById("result5").value = [nomes]+" ,APROVADA, 85 pontos! Critérios médios alcançados"
        }if(idade >= 18 && idade <= 25 && ensino === "mestrado" || ensino === "doutorado"){
            document.getElementById("result5").value = [nomes]+" ,APROVADA, 100 pontos! Critérios máximo alcançados"
        }if(idade < 18 || idade > 25){
            document.getElementById("result5").value = [nomes]+" ,REPROVADA, fora da faixa de idade!"
        } 
    }else{
        document.getElementById("result5").value = "Dados inválidos, favor insira os dados corretamente!"
    }
}
/* LIMPAR campos */
function limparTesteAprova() {
    document.getElementById("result5").value = ""
}
/*  /QUINTA QUESTÂO  */


/*  SEXTA QUESTÂO  */
function numeroParImpar(){
    let num1 = document.getElementById("numeroParOuImpar").value
    let result = num1 % 2
    if(result === 1){
        document.getElementById("result6").value = "O número "+[num1]+" é Ímpar"
    }else if(result === 0){
        document.getElementById("result6").value = "O número "+[num1]+" é Par"
    }
}
/* LIMPAR campos */
function limparNumeroParImpar() {
    document.getElementById("numeroParOuImpar").value = ""
    document.getElementById("result6").value = ""
}
/*  /SEXTA QUESTÂO  */


/*  SÉTIMA QUESTÂO  */
function numeroParImparPrimo(){
    let numero = document.getElementById("numeroParImparPrimo").value
    let contador = 0
        if(numero === ""){ /*TESTE VALOR NEGATIVO */
            document.getElementById("result7").value = " Dados inválidos, por favor, insira os dados!"
        }
    for (let i = 1; i <= numero; i++) {
        numero = parseInt(numero)
        if(numero % i === 0){
            contador++
        }
        if(contador === 2 ){
            document.getElementById("result7").value = "O número "+[numero]+" É primo "
        }else{
            document.getElementById("result7").value = "O número "+[numero]+" NÃO é primo "
        }
        if(numero % 2 === 1){
            document.getElementById("result7").value += "e é ÍMPAR!"
        }if(numero % 2 === 0){
            document.getElementById("result7").value += "e é PAR!"
        }
        if(numero % 5 === 0){
            document.getElementById("result7").value += " Divisível por 5!"
        }
    }
}
/* LIMPAR campos */
function limparnumeroParImparPrimo() {
    document.getElementById("numeroParImparPrimo").value = ""
    document.getElementById("result7").value = ""
}
/*  /SÉTIMA QUESTÂO  */

/*  OITAVA QUESTÂO  */
    function quartoNomes(){
        let par = 0
        let impar = 0
        let zero = 0
        for(i = 0; i < 4; i++){
            let num = parseInt(prompt("Informe um número: "))
            if(num % 2 === 0){
                par ++
            }if(num % 2 === 1){
                impar ++
            }
        }
        if( par === 0 || par === null || par >= 1 && impar < 1){    
            document.getElementById("result8").value = "Todos os números são PARES!"
        }if(par >= 1 && impar >= 1 ){
            document.getElementById("result8").value = "Há números pares e ímpares"
        }if(par < 1 && impar >= 1){
            document.getElementById("result8").value = "Todos os números são IMPARES!"
        }
    }
/* LIMPAR campos */
function limparQuatroNomes() {
    document.getElementById("result8").value = ""
}   
/*  /OITAVA QUESTÂO  */