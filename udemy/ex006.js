/* 
06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

// j  = juros 
// c  = capital
// i  = taxa de juros
// t  = tempo

function jurosSimpes(capitalInicial, juros, tempoAplicacao) {
    // m = c + j * t
    return capitalInicial + (capitalInicial * juros * tempoAplicacao)    
}

function jurosComposto(capitalInicial, juros, tempoAplicacao) {
    // m = c(1+i)**t
    return capitalInicial * (1 + juros) ** tempoAplicacao
}


//console.log(jurosSimples(100, 10/100, 2));
console.log(jurosComposto(100, 0.1, 2));
console.log(jurosComposto(2000, 0.03, 4))
