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

const filterWeight = bikes.filter((lowWeight) => {
    if (lowWeight.weight < 42) {
        return true
    }
})
filterWeight.forEach(lowWeight => {
    console.log(`${lowWeight.weight}kg`);
})