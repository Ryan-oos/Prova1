const readline = require('readline-sync');

function criarMatriz3x3() {
    let matriz = [];
    for (let i = 0; i < 3; i++) {
        matriz[i] = [];
        for (let j = 0; j < 3; j++) {
            let valor = Number(readline.question(`Digite o valor para a posição [${i+1}][${j+1}]: `));
            matriz[i][j] = valor;
        }
    }
    return matriz;
}

function exibirMatriz(matriz) {
    console.log("Matriz 3x3:");
    for (let i = 0; i < 3; i++) {
        console.log(matriz[i].join(" "));
    }
}

function somarLinha1(matriz) {
    return matriz[0].reduce((a, b) => a + b, 0);
}

function multiplicarDiagonal(matriz) {
    return matriz[0][0] * matriz[1][1] * matriz[2][2];
}

function contarPares(matriz) {
    let pares = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (matriz[i][j] % 2 === 0) pares++;
        }
    }
    return pares;
}

let matriz = criarMatriz3x3();

while (true) {
    exibirMatriz(matriz);
    console.log("\nEscolha uma opção:");
    console.log("1 - Somatório da linha 1");
    console.log("2 - Multiplicação da diagonal principal");
    console.log("3 - Quantidade de números pares");
    console.log("4 - Encerrar o programa");
    let opcao = readline.question("Opção: ");

    if (opcao === "1") {
        console.log("Somatório da linha 1:", somarLinha1(matriz));
    } else if (opcao === "2") {
        console.log("Multiplicação da diagonal principal:", multiplicarDiagonal(matriz));
    } else if (opcao === "3") {
        console.log("Quantidade de números pares:", contarPares(matriz));
    } else if (opcao === "4") {
        console.log("Programa encerrado.");
        break;
    } else {
        console.log("Opção inválida.");
    }
    console.log();
}



