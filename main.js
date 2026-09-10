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

        console.log("A soma é", sum)
        console.log("A subtração é", sub)
        console.log("A multiplicação é", mul)
        console.log("A divisão é", div)

    let idade = +prompt("Informe sua idade: ")
    
    if(idade >= 18){
        alert("Maior de idade ")
    }
    else {
        alert("Menor de idade ")
    }
    
    let numero = +prompt("Informe um número: ")

    if (numero % 2 === 0){
        alert("O número é par")
    }
    else {
        alert("O número é impar")
    }