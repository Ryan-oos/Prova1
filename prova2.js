const readlineSync = require('readline-sync');

function main() {
    let matriz = [];

    while (true) {
        console.log("Escolha uma opção:");
        console.log("1 - Informar valores para o array 3x3");
        console.log("2 - Operações no array");
        console.log("3 - Exibir array");
        console.log("4 - Encerrar o programa");
        
        let escolha = readlineSync.questionInt("Digite a opção (1-4): ");
        
        if (escolha === 1) {
            matriz = [];
            for (let i = 0; i < 3; i++) {
                let linha = [];
                for (let j = 0; j < 3; j++) {
                    let valor = readlineSync.questionInt(`Informe o valor da posição (${i+1},${j+1}): `);
                    linha.push(valor);
                }
                matriz.push(linha);
            }
            console.log("\nMatriz inserida com sucesso!");
        }
        
        else if (escolha === 2) {
            if (matriz.length === 0) {
                console.log("Primeiro, você precisa informar os valores para o array 3x3.");
                continue;
            }
            
            console.log("\nEscolha a operação que deseja realizar:");
            console.log("1 - Somatório da linha 1");
            console.log("2 - Multiplicação da diagonal");
            console.log("3 - Quantidade de números pares");
            console.log("4 - Voltar");
            let operacao = readlineSync.questionInt("Digite a operação (1-4): ");

            if (operacao === 1) {
                let somatorio = matriz[0].reduce((a, b) => a + b, 0);
                console.log("Somatório da linha 1:", somatorio);
            } else if (operacao === 2) {
                let multiplicacao = matriz[0][0] * matriz[1][1] * matriz[2][2];
                console.log("Multiplicação da diagonal:", multiplicacao);
            } else if (operacao === 3) {
                let quantidadePares = matriz.flat().filter(num => num % 2 === 0).length;
                console.log("Quantidade de números pares:", quantidadePares);
            } else if (operacao === 4) {
                continue;
            } else {
                console.log("Operação inválida.");
            }
        }
    }
}

main();