// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

const zucchine = [
    {
        varieta: "zucchina 1",
        peso: 1,
        lunghezza: "1cm",
    },
    {
        varieta: "zucchina 2",
        peso: 2,
        lunghezza: "2cm",
    },
    {
        varieta: "zucchina 3",
        peso: 3,
        lunghezza: "3cm",
    },
    {
        varieta: "zucchina 4",
        peso: 4,
        lunghezza: "4cm",
    },
    {
        varieta: "zucchina 5",
        peso: 5,
        lunghezza: "5cm",
    },
    {
        varieta: "zucchina 6",
        peso: 6,
        lunghezza: "6cm",
    },
    {
        varieta: "zucchina 7",
        peso: 7,
        lunghezza: "7cm",
    },
    {
        varieta: "zucchina 8",
        peso: 8,
        lunghezza: "8cm",
    },
    {
        varieta: "zucchina 9",
        peso: 9,
        lunghezza: "9cm",
    },
    {
        varieta: "zucchina 10",
        peso: 10,
        lunghezza: "10cm",
    },
];

let pesoZucchine = 0;
for (let i = 0; i < zucchine.length; i++) {
    pesoZucchine += zucchine[i].peso;
}

console.log(pesoZucchine);