const person = {
  name: 'Rick',
  age: 77,
  country: 'US',
}

const clone1 = {...person};
const clone2 = {...person};
const samePerson = person;

person.age+1 ;
person.country = "FR";


console.log(samePerson.country)
console.log(clone1.country)
