'use strict';
// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando  template literal

const bikes = [
    {
        name: 'super-bike',
        weight: 10
    },
    {
        name: 'super-cross',
        weight: 25
    },
    {
        name: 'roars-bike',
        weight: 42
    },
    {
        name: 'heavy-bike',
        weight: 23
    },
    {
        name: 'BMX',
        weight: 8
    },
    {
        name: 'classic-bike',
        weight: 6
    },
]

const weightBikes = bikes.map(wBikes => wBikes.weight);
console.log(weightBikes);

const minWeight = Math.min(...weightBikes);
console.log(minWeight);

const minWbikes = weightBikes.filter(wBikes => wBikes.weight < minWeight)
console.log(minWbikes);

// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine  creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


const team = [
    {

    }
]