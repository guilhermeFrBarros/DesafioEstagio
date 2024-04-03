//2)-----------------------------------------------------
const NUMEROINFORMADO = 2111485077978050;  // 75°,depois disso excede a representação de numero

let numFibonaciAnterior = 1;
let numFibonaci = 0;
let isNumFibonacci = false;
while (numFibonaci <= NUMEROINFORMADO) {

    if (numFibonaci === NUMEROINFORMADO) {
        isNumFibonacci = true;
    }
    let auxAnt = numFibonaci;
    numFibonaci = numFibonaciAnterior + numFibonaci;
    numFibonaciAnterior = auxAnt;

}

console.log(`É ${isNumFibonacci} que o numero ${NUMEROINFORMADO} Pertence a sequencia de fibonacci`)