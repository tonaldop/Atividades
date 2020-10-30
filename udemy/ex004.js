/*
04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/

function divisor(dividendo, divisor) {
    let divisao = dividendo / divisor
    let restoDivisao = dividendo % divisor

    console.log(`A divisão real: ${divisao}`)
    console.log(`O resto da divisão: ${restoDivisao}`)

    // fazendo um arredondamento p/ cima
    console.log(`Com arredondamento p/ cima: ${Math.floor(dividendo/divisor)}`)

    // fazendo um arredondamento p/ baixo
    console.log(`Com arredondamento p/ baixo: ${Math.ceil(dividendo/divisor)}`)
}

divisor(11, 4)