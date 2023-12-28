export function max( a: number, b: number, c: number ) {

    if ( a > b ) {
        return ( a > c ) ? a : c;
    }

    if ( b > c ) {
        return b;
    }

    return ( a > c ) ? a : c;
}


let valorMaximo = max( 10, 200, 123); 
console.log( valorMaximo ); 
