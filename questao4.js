// Questão 4
// Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  

const dadosEstados = [
    {
        "estado": "SP",
        "faturamento": 67836.43,
    },
    {
        "estado": "RJ",
        "faturamento": 36678.66,
    },
    {
        "estado": "MG",
        "faturamento": 29229.88,
    },
    {
        "estado": "ES",
        "faturamento": 27165.48,
    },
    {
        "estado": "Outros",
        "faturamento": 19849.53,
    },
]

function getFaturamentoTotal(dadosEstados) {
    var faturamentoTotal = 0;
    Object.entries(dadosEstados).forEach(([_, dados]) => {
        faturamentoTotal += parseFloat(dados.faturamento);
    });
    return faturamentoTotal;
}


function regraDeTres(a, b, c) {
    return (b * c) / a;
}


function getPercentualEstadual(dadosEstados) {
    var faturamentoTotal = getFaturamentoTotal(dadosEstados)
    Object.entries(dadosEstados).forEach(([_, dados]) => {
        console.log("O percentual do estado " + dados.estado + ' foi de: ' + regraDeTres(faturamentoTotal, 100, dados.faturamento) + "%")
    });
}
getPercentualEstadual(dadosEstados)