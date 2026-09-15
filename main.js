let user = prompt("Digite seu nome: ")
alert(`Olá, bem vindo ${user}!`)

    let num_one = Number(prompt("Digite o primeiro número: "))
        let num_two = +prompt("Digite o segundo número: ")

        console.log(typeof num_one)
        console.log(typeof num_two)

        let sum = num_one + num_two
        let sub = num_one - num_two
        let mul = num_one * num_two
        let div = num_one / num_two
        
        alert(`A soma é ${sum}`)
        alert(`A subtração é ${sub}`)
        alert(`A multiplicação é ${mul}`)
        alert(`A divisão é ${div}`)
        
        let idade = +prompt("Informe sua idade: ")
        
        if(idade >= 18){
            alert("Maior de idade ")
        }
        else {
            alert("Menor de idade ")
        }
        
    alert("Informe um número pra descobrir se ele é ímpar ou par:")
    
    let numero = +prompt("Informe um número: ")
    
    if (numero % 2 === 0){
        alert("O número é par")
    }
    else {
        alert("O número é impar")
    }
    
    alert("Informe três números para ver qual é o maior:")
    
    let prim_numero = +prompt("Informe o primeiro número: ")
    let segun_numero = +prompt("Informe o segundo número: ")
    let terc_numero = +prompt("Informe o terceiro número: ")
    
    let maior = Math.max(prim_numero, segun_numero, terc_numero)
    
    alert(`O maior número é ${maior}`)
    
    alert("Critério de avaliação: \n Maior que 6 = aprovado \n Maior que 4 = Recuperação \n Menos que 4 = Reprovado")
    let nota = +prompt("Informe sua nota: ")
    
    if (nota >= 6){
        alert("Aprovado")
    }
    else if (nota >= 4){
        alert("Recuperação")
    }
    else{
        alert("Reprovado")
    }
    
    const LIMITE_PARA_DESCONTO = 5
    const PORCENTAGEM_DESCONTO = 0.10
    
    
    let preco = parseFloat(prompt("Digite o preço do produto:"))
    let quantidade = parseInt(prompt("Digite a quantidade desejada:"))
    
    let valorTotal = preco * quantidade
    
    if (quantidade > LIMITE_PARA_DESCONTO) {
        let valorDoDesconto = valorTotal * PORCENTAGEM_DESCONTO;
        valorTotal = valorTotal - valorDoDesconto
        
        alert(`Oba! Como você comprou mais de ${LIMITE_PARA_DESCONTO} unidades, ganhou 10% de desconto.\nO valor final a pagar é: R$ ${valorTotal.toFixed(2)}`)
    }
    else {
        alert(`O valor final a pagar é: R$ ${valorTotal.toFixed(2)}`)
    }
    
  alert("Digite dois números e o operador pra ver o resultado")
  
  let primeiro_numero = +prompt("Informe o primeiro número: ")
  let segundo_numero = +prompt("Informe o segundo número: ")
  let operador = prompt("Informe o operador (+, -, *, /): ")
  
  let total
  
  if (operador === '+') {
    total = primeiro_numero + segundo_numero
    
} else if (operador === '-') {
    total = primeiro_numero - segundo_numero
    
} else if (operador === '*') {
    total = primeiro_numero * segundo_numero
    
} else if (operador === '/') {
    
    if (segundo_numero === 0) {
        total = "Erro: não é possível dividir por zero!"
    } else {
        total = primeiro_numero / segundo_numero
    }
    
} else {
    
    total = "Operador inválido!"
}

alert(`Resultado: ${total}`)

alert("Informe seu ano de nascimento, para saber se vc pode tirar carteira de motorista")
let nascimento = +prompt("Seu ano de nascimento:")
let anoAtual = new Date().getFullYear();
let idadesla = anoAtual - nascimento

if (idadesla >= 18){
    alert("Você já pode tirar sua carteira de motorista")
}
else {
    alert("Você ainda não pode tirar sua carteira de motorista")
}

alert("Coloque a temperatura em graus Celsius pra saber o clima: \n Mais de 30°C = Calor \n Até 29°C = Ameno \n Abaixo de 20°C = Frio")
let clima = +prompt("Informe a atual temperatura em graus Celsius:")
if (clima >= 30){
    alert("O clima está Calor")
}
else if (clima >= 20){
    alert("O clima está Ameno")
}
else {
    alert("O clima está Frio")
}

alert("Informe dois números pra saber qual deles é maior, ou se são iguais:")
let sla1 = +prompt("Informe o primeiro número:")
let sla2 = +prompt("Informe o segundo número:")

if(sla1 > sla2){
    alert(`O primeiro número é o maior: ${sla1}`)
}
else if (sla1 === sla2){
    alert("Os dois números são iguais")
}
else {
    alert(`O segundo número é o maior: ${sla2}`)
}