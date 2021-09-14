let beerCount = 100;
let vineCount = 50;
let vinePrice = 70;
let pepsiPrice = 30;
let pepsiCount = 100;
let beerPrice = 45;
let bank = 1000;
let sum = 0;

function sellBeer(count) {
    if (count <= beerCount) {
        let total = beerPrice * count
        sum += total
        bank += total
        beerCount -= count
        return ` Пиво: ${count} шт`
    } else {
        return `На скалді недостатньо пива`
    }
}

function getBeerCount() {
    return `${beerCount} шт.`
}

function selVine(count) {
    if (count <= vineCount) {
        let total = vinePrice * count
        sum += total
        bank += total
        vineCount -= count
        return `Вино: ${count} шт.`
    } else {
        return `На складі не достатньо вина`
    }
}

function getVineCount() {
    return `${vineCount} шт.`
}

function sellPepsi(count) {
    if (count <= pepsiCount) {
        let total = pepsiPrice * count
        sum += total
        bank += total
        pepsiCount -= count
        return `Пепсі: ${count} шт.`
    } else {
        return `На складі не достатньо пепсі`
    }
}

function getPepsiCount() {
    return `${pepsiCount} шт.`
}

function getBank() {
    return `${bank} грн`

}

function getSUM() {
    return `Всього ${sum} грн`
}

function newSum() {
    return sum = 0
}

export {
    getBank as bank, getBeerCount as storageBeer, sellBeer as sellB, getVineCount as storageVine, selVine as sellV, getPepsiCount as storagePepsi,
    sellPepsi as sellP, getSUM as sum, newSum as emptySum
}