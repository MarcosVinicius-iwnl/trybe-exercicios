// Exercício 1

let a = 20;
let b = 10;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);


// Exercício 2

let number1 = 33;
let number2 = 44;

if (number1 > number2) {
  console.log(number1)
} else {
  console.log(number2)
}


// Exercício 3

let number1 = 33;
let number2 = 44;
let number3 = 55;

if (number1 > number2 && number3) {
  console.log(number1)
} else if (number2 > number3) {
  console.log(number2)
} else {
  console.log(number3)
}


// Exercício 4

let number = -1;

if (number > 0) {
  console.log('Positive')
} else if (number < 0) {
  console.log('Negative')
} else {
  console.log('Zero')
}


// Exercício 5

let angulo1 = 0;
let angulo2 = 45;
let angulo3 = 90;
let validador;

if (angulo1 <= 0 || angulo2 <= 0 || angulo3 <= 0) {
  console.log('Erro: Ângulo inválido.')
} else if ((angulo1 + angulo2 + angulo3) == 180) {
  validador = true
  console.log(validador)
} else {
  validador = false
  console.log(validador)
}


// Exercício 6

let chessPiece = "Pawn";
let pieceMovement;

switch (chessPiece.toLowerCase()) {
  case "pawn":
    pieceMovement = "If it is a pawn's first move, it can move forward one or two squares. If a pawn has already moved, then it can move forward just one square at a time. It attacks (or captures) each square diagonally to the left or right."
    break;
  case "bishop":
    pieceMovement = "A bishop can move diagonally as many squares as it likes, as long as it is not blocked by its own pieces or an occupied square."
    break
  case "knight":
    pieceMovement = "The knight is the only piece in chess that can jump over another piece! It moves one square left or right horizontally and then two squares up or down vertically, OR it moves two squares left or right horizontally and then one square up or down vertically—in other words, the knight moves in an 'L-shape.'"
    break
  case "rook":
    pieceMovement = "The rook is considered a major piece (like the queen) and is worth five points. It can move as many squares as it likes left or right horizontally, or as many squares as it likes up or down vertically (as long as it isn't blocked by other pieces)."
    break
  case "queen":
    pieceMovement = "The queen is considered a major piece (like a rook) and is worth nine points. It can move as many squares as it likes left or right horizontally, or as many squares as it likes up or down vertically (like a rook). The queen can also move as many squares as it likes diagonally (like a bishop)."
    break
  case "king":
    pieceMovement = "The king is not a very powerful piece, as it can only move (or capture) one square in any direction. Please note that the king cannot be captured! When a king is attacked, it is called 'check.'"

}

console.log(pieceMovement)


// Exercício 7

const nota = 80;

if (nota < 0 || nota > 100) {
  console.log("Erro: Valor inválido.")
} else if (nota >= 90) {
  console.log("A")
} else if (nota >= 80) {
  console.log("B")
} else if (nota >= 70) {
  console.log("C")
} else if (nota >= 60) {
  console.log("D")
} else if (nota >= 50) {
  console.log("E")
} else {
  console.log("F")
}


// Exercício 8

const numero1 = 11;
const numero2 = 15;
const numero3 = 31;

if (numero1 % 2 == 0 || numero2 % 2 == 0 || numero3 % 2 == 0) {
  console.log(true)
} else {
  console.log(false)
}


// Exercício 9

const A = 11;
const B = 15;
const C = 31;

if ((A % 2) !== 0 || (B % 2) !== 0 || (C % 2) !== 0) {
  console.log(true)
} else {
  console.log(false);
}


// Exercício 10

let valorCusto = 100;
let impostoSobreOCusto = 0.2 * valorCusto
let valorCustoTotal = valorCusto + impostoSobreOCusto;
let valorVenda = valorCustoTotal + (0.2 * valorCustoTotal);
let lucro = valorVenda - valorCustoTotal;
let lucroTotal = 0;
let numeroDeVendas = 0;

do {
  lucroTotal = lucroTotal + lucro;
  numeroDeVendas += 1
} while (numeroDeVendas < 1000)

console.log(lucroTotal)


// Exercício 11

let salarioBruto = 0;
let salarioLiquido = 0

let inss1 = 0.08 * salarioBruto;
let inss2 = 0.09 * salarioBruto;
let inss3 = 0.11 * salarioBruto;
let inss4 = 570.88;


if (salarioBruto <= 0) {
  console.log("Erro: Salário inválido.")
} else if (salarioBruto > 0 && salarioBruto <= 1556.94) {
  salarioLiquido = salarioBruto - inss1;
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
  salarioLiquido = salarioBruto - inss2;
} else if ( salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
  salarioLiquido = salarioBruto - inss3;
} else {
  salarioLiquido = salarioBruto - inss4;
}

let impostoDeRenda1 = (0.075 * salarioLiquido) - 142.80;
let impostoDeRenda2 = (0.15 * salarioLiquido) - 354.80;
let impostoDeRenda3 = (0.225 * salarioLiquido) - 636.13;
let impostoDeRenda4 = (0.275 * salarioLiquido) - 869.36;

if (salarioLiquido <= 0) {
  console.log("Erro: Salário inválido.")
} else if (salarioLiquido > 1903.98 && salarioLiquido <= 2826.65) {
  salarioLiquido = salarioLiquido - impostoDeRenda1;
} else if (salarioLiquido <= 3751.05) {
  salarioLiquido = salarioLiquido - impostoDeRenda2;
} else if (salarioLiquido <= 4664.68) {
  salarioLiquido = salarioLiquido - impostoDeRenda3;
} else if (salarioLiquido > 4664.68) {
  salarioLiquido = salarioLiquido - impostoDeRenda4;
}