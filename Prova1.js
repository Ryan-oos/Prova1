const readline = require('readline-sync');
// 
let cinema = [
  ['L', 'L', 'L', 'L'],
  ['L', 'L', 'L', 'L'],
  ['L', 'L', 'L', 'L'],
  ['L', 'L', 'L', 'L']
];

while (true) {
  console.clear();

  console.log("Cinema:");
  for (let i = 0; i < 4; i++) {
    console.log(cinema[i].join(' '));
  }

  let linha = readline.questionInt("Escolha a linha (0 a 3): ");
  let coluna = readline.questionInt("Escolha a coluna (0 a 3): ");

  if (
    linha >= 0 && linha < 4 &&
    coluna >= 0 && coluna < 4 &&
    cinema[linha][coluna] === 'L'
  ) {
    cinema[linha][coluna] = 'X';
    console.log("Cadeira comprada com sucesso");
  } else {
    console.log("Cadeira invalida ou ja ocupada.");
  }

  readline.question("Pressione ENTER para continuar...");
}
