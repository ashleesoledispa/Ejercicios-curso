export function nombresmasLargos( nombreArray: string[] ) {

    let nombreLargo = '';

    for( let i = 0; i < nombreArray.length; i ++ ) {

        let nombre = nombreArray[i];

        if ( nombre.length > nombreLargo.length ) {
            nombreLargo = nombre;
        }

    }

    return nombreLargo;
}

let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier']; 
let hero = nombresmasLargos( heroes );
console.log( hero );
