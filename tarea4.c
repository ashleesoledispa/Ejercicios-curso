export let numeros = [1, 6, 8, -14, 2, 7, -10, 3, 5 ];
let maxNumber = -9999999;

for( let i = 0; i < numeros.length; i++ ) {
    if ( numeros[i] >= maxNumber ) {
        maxNumber = numeros[i];
    }
}

console.log('El número mayor es:', maxNumber );
