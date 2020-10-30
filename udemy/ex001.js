/*
01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
*/

function soma(a, b) {
    let soma = a + b
    let subtracao = a - b
    let multiplicacao = a * b
    let divisao = a / b

    console.log(`A soma entre ${a} e ${b} = ${soma}`)
    console.log(`A subtração entre ${a} e ${b} = ${subtracao}`)
    console.log(`A multiplicação entre ${a} e ${b} = ${multiplicacao}`)
    console.log(`A divisão entre ${a} e ${b} = ${divisao}`)
}

soma(22, 2)