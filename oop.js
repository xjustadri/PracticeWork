//Part One //

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  honk() {
    return "Beep.";
  }
  toString() {
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
  }
}

let myFirstVehicle = new Vehicle ("Honda", "Monster Truck", 1999);
myFirstVehicle.honk();
myFirstVehicle.toString();

//Part Two //

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

let myFirstCar = new Car("Toyota", "Corolla", 2005);
myFirstCar.toString();
myFirstCar.honk();
myFirstCar.numWheels;

//Part Three //

class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);   // call Vehicle constructor
    this.numWheels = 2;
  }

  revEngine() {
    return "VROOM!!!";
  }
}

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

myFirstMotorcycle.toString();

myFirstMotorcycle.honk();
myFirstMotorcycle.revEngine();
myFirstMotorcycle.numWheels;

//Part Four //

class Garage {
  constructor(capacity) {
    this.capacity = capacity;
    this.vehicles = [];
  }

  add(newVehicle) {
    // Check if it's a Vehicle instance
    if (!(newVehicle instanceof Vehicle)) {
      return "Only vehicles are allowed in here!";
    }

    // Check capacity
    if (this.vehicles.length >= this.capacity) {
      return "Sorry, we're full.";
    }

    // Add vehicle
    this.vehicles.push(newVehicle);
    return "Vehicle added!";
  }
}

let garage = new Garage(2);
garage.vehicles;
garage.add(new Car("Hyundai", "Elantra", 2015));
garage.vehicles;
garage.add("Taco");

garage.add(new Motorcycle("Honda", "Nighthawk", 2000));
garage.vehicles;

garage.add(new Motorcycle("Honda", "Nighthawk", 2001));