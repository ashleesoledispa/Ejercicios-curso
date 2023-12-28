for( let i = 1; i <= 5; i++ ) {
    
    let linea = '';

    for( let j = 1; j <= 5; j++ ) {
        linea += ` ${ j * i }`
    }

    console.log( linea );
}
