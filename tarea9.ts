export function heroesThatStartsWith( lista: string[], letra: string ) {
   
    letra = letra.toUpperCase();
    let nuevaLista: string[] = [];

    for( let name of lista ) {
        if ( name.startsWith(letra) ) {
            nuevaLista.push( name );
        }
    }
    return nuevaLista;
}

let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel']; 
let herosWithLetterS = heroesThatStartsWith( heroes, 'D' );
console.log( herosWithLetterS ); // She Hulk, Spiderman
