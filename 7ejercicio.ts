let person ={
  nombre: 'Ashlee',
  edad: 20,
  isActive: true,
  hobbies: ['basquet','futbol']
  toString() {
    let objectString = this.nombre + ' ' + this.edad + ' ' + this.hobbies;
    console.log( objectString );
  }
}

person.toString();
