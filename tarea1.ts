/* 
Realizar un programa que muestre la nota
del alumno como: A, B, C, D, F
donde:
A >= 90
B >= 80
C >= 70
D >= 60
F < 60
*/

export let nota: number = 95;
let letraNota: string;

if ( nota >= 90 ) {
    letraNota = 'A';
} else if ( nota >= 80 ) {
    letraNota = 'B';
} else if ( nota >= 70 ) {
    letraNota = 'C';
} else if ( nota >= 60 ) {
    letraNota = 'D';
} else {
    letraNota = 'F';
}

console.log('La nota del alumno es:', letraNota )
