export class Carro{

  static className = 'Carro';

  public readonly brand: string;
  public puertas: number;
  public tanque: number;
  public isRunning: boolean;
  public type: sring;

  public readonly createdAt: number;

  constructor(brand: string, type: string){
    this.brand = brand;
    this.puertas = 0;
    this.tanque = 100;
    this.isRunning = false;
    this.type = type;

    this.createdAt = 12345;
  }
  
public turnOn(){
    if (this.isRunning) {
      console.log('El carro ya esta encendido.');
      return;
    }

    if ( this.fullTanque <= 0 ){
      console.log('El carro no tiene gasolina.');
      return;
    }
    this.isRunning = true;
    console.log('El carro está encendido');
}
    
  fillTank( gas: number ) {
    if (gas <= 0){
      console.log('El gas debe ser positivo.');
      return;
    }

    let newFullTanque = this.fullTanque + gas;
    if( newFullTanque >= 100 ) {
      newFullTanque = 100;
    } 
    this.fullRanque = newFullTanque;
  }
}

let myMazda = new Carro();

console.log( myMazda );
myMazda.fillTank(100);
myMazda.turnOn();
console.log( myMazda );
