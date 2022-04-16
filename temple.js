let message='this is my new message';
let another="hello 'shilpa' \n this is my another message";
console.log(message);
console.log(another);

let name='shakkal';

console.log('hi my name is ${name}');
let person = {
  firstName: `Ryan`,
  lastName: `Christiani`,
  sayName() {
      return `Hi my name is ${this.firstName} ${this.lastName}`;
  }
};

console.log(person.sayName());