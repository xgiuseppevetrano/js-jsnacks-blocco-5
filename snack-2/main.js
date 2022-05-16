// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

const zucchine = [
    {
        varieta: "zucchina 1",
        peso: 1,
        lunghezza: 12,
    },
    {
        varieta: "zucchina 2",
        peso: 2,
        lunghezza: 22,
    },
    {
        varieta: "zucchina 3",
        peso: 3,
        lunghezza: 43,
    },
    {
        varieta: "zucchina 4",
        peso: 4,
        lunghezza: 5,
    },
    {
        varieta: "zucchina 5",
        peso: 5,
        lunghezza: 76,
    },
    {
        varieta: "zucchina 6",
        peso: 6,
        lunghezza: 11,
    },
    {
        varieta: "zucchina 7",
        peso: 7,
        lunghezza: 9,
    },
    {
        varieta: "zucchina 8",
        peso: 8,
        lunghezza: 57,
    },
    {
        varieta: "zucchina 9",
        peso: 9,
        lunghezza: 1,
    },
    {
        varieta: "zucchina 10",
        peso: 10,
        lunghezza: 14,
    },
];

const zucchinePiccole = [];
const zucchineLunghe = [];

for (let i = 0; i < zucchine.length; i++) {
    if (zucchine[i].lunghezza < 15) {
        zucchinePiccole.push(zucchine[i]);
    } else {
        zucchineLunghe.push(zucchine[i]);
    }
}

console.log(zucchinePiccole, zucchineLunghe);