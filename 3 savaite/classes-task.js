class House {
  #address; // # - private
  #city;
  #owners;

  constructor(address, city, owners) {
    this.address = address;
    this.city = city;
    this.owners = owners; // Bus iškvietas -> set owners(value) {...}
  }

  set owners(value) {
    if (!(value instanceof Array)) {
      console.error(`Klaida: House.setOwners argumentas privalo būti masyvas.\n\tGauta: ${value}`);
      return; // return; - nutraukia funkciją;
    }
    if (!value.every((owner) => owner instanceof Object)) {
      console.error(`Klaida: House.setOwners masyvo visi elementai turi būti objektai.\n\tGauta: ${value}`);
      return; // return; - nutraukia funkciją;
    }
    if (!value.every((owner) => typeof owner.name === 'string')) {
      console.error(`Klaida: House.setOwners masyvo visi elementai turi turėti savybę 'name' .\n\tGauta: ${value}`);
      return; // return; - nutraukia funkciją;
    }

    this.#owners = value;
  }

  get owners() {
    // TODO: Atliekamos duomenų pasiekimo apsaugos...
    return this.#owners;
  }

  set address(address){
    if (typeof address !== 'string') {
      console.error(`Klaida: House.setAddress argumentas privalo būti string'as.\n\tGauta: ${address}`);
      return; // return; - nutraukia funkciją;
    }

    this.#address = address;
  }

  get address() {
    return this.#address;
  }

  set city(city) {
    if (typeof city !== 'string') {
      console.error(`Klaida: House.setCity argumentas privalo būti string'as.\n\tGauta: ${city}`);
      return; // return; - nutraukia funkciją;
    }

    this.#city = city;
  }

  get city() {
    return this.#city;
  }

  printOwners() {
    const ownersRows = '\t' + this.#owners.map(({ name }) => name).join('\n\t');
    console.log(`${this.#address}, ${this.#city}. Owners:\n${ownersRows}`);
  }
}

const houses = [
  new House('Kimano g. 7', 'Kaunas', [{ name: 'Blakas Kojinskas' }]),
  new House('Aliejų g. 121', 'Kaunas', [{ name: 'Sensas Jautimantas' }, { name: 'Rekė Jautimantė' }]),
  new House('Sustenų g. 7', 'Vilnius', [{ name: 'Groja Blanienė' }, { name: 'Fartas Blanys' }]),
  new House('Varkatkų g. 7', 'Klaipėda', [{ name: 'Faryja Mirgaitė' }]),
];

console.group('1. HouseInstance.owners savybės inkapsuliacija');
{
  houses[0].owners = 5; // Bus iškvietas -> set owners(value) {...}
  houses[0].owners = [77, 65]; // Bus iškvietas -> set owners(value) {...}
  houses[0].owners = [{ name: 'Verslioras Eurikas' }, 7]; // Bus iškvietas -> set owners(value) {...}
  houses[0].owners = [{ name: 'Verslioras Eurikas' }, { name: 'Biznė Eurikienė' }]; // Bus iškvietas -> set owners(value) {...}
  console.log(houses[0].owners); // Bus iškvietas -> get owners() {...}
  houses.forEach(house => house.printOwners());
}
console.groupEnd();

console.groupCollapsed('2. Perrašykite HouseInstance.address savybės inkapsuliaciją naudojant naują sintaksę');
{
  houses[0].address = 5;
  houses[0].address = [1231, 213]
  houses[0].address = [{ name: 'Verslioras Eurikas' }, 7];
  console.log(houses[0].address)
  houses.forEach(house => house.printOwners());
}
console.groupEnd();

console.groupCollapsed('3. Perrašykite HouseInstance.city savybės inkapsuliaciją naudojant naują sintaksę');
{
  houses[0].city = 5;
  houses[0].city = [12313, 1231];
  houses[0].city = [{ name: 'Verslioras Eurikas' }, 7];
  console.log(houses[0].city)
  houses.forEach(house => house.printOwners());
}
console.groupEnd();