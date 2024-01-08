class Vehiculo {
  constructor(ruedas, capacidad) {
    this.ruedas = ruedas;
    this.capacidad = capacidad;
  }

  detallesGenerales() {
    return `Este vehículo tiene ${this.ruedas} ruedas. Puede transportar ${this.capacidad} pasajeros.`;
  }
}

class Motorcycle extends Vehiculo {
  constructor(ruedas, capacidad, tipo, marca) {
    super(ruedas, capacidad);
    this.tipo = tipo;
    this.marca = marca;
  }
  detallesBike() {
    return `Este vehículo tiene ${this.ruedas} ruedas, puede transportar ${this.capacidad} pasajeros, es tipo: ${this.tipo} y es marca: ${this.marca}.`;
  }
}

class Bicicleta extends Vehiculo {
  constructor(ruedas, capacidad, tipo) {
    super(ruedas, capacidad);
    this.tipo = tipo;
  }

  detallesBicicleta() {
    return `Este vehículo tiene ${this.ruedas} ruedas, puede transportar ${this.capacidad} pasajero y es tipo: ${this.tipo}.`;
  }
}

const vehiculo1 = new Vehiculo(4, 5);
const motorcycle1 = new Motorcycle(2, 2, "Scrambler", "BMW");
const bicicleta1 = new Bicicleta(2, 1, "Montaña");

console.log(vehiculo1, vehiculo1.detallesGenerales());
console.log(motorcycle1, motorcycle1.detallesBike());
console.log(bicicleta1, bicicleta1.detallesBicicleta());
