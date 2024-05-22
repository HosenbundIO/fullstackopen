const mongoose = require('mongoose');

if (process.argv.length < 3) {
  console.log('give password as argument');
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://davidivanov10:${password}@cluster0.iiwfjg4.mongodb.net/personApp`;

mongoose.connect(url);

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model('Person', personSchema);

console.log('args.length:', process.argv.length);

let persons = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '040-123456',
  },
  {
    id: 2,
    name: 'Ada Lovelace',
    number: '39-44-5323523',
  },
  {
    id: 3,
    name: 'Dan Abramov',
    number: '12-43-234345',
  },
  {
    id: 4,
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
  },
];

// let promiseChain = Promise.resolve();

// persons.forEach((person) => {
//   promiseChain = promiseChain.then(() => {
//     const newPerson = new Person({
//       name: person.name,
//       number: person.number,
//     });

//     return newPerson.save().then((result) => {
//       console.log('person saved!');
//     });
//   });
// });

getArgs = () => {
  if (process.argv.length === 3) {
    console.log('phonebook:');
    Person.find({}).then((result) => {
      result.forEach((person) => {
        console.log(person.name, person.number);
      });
      mongoose.connection.close();
    });
  } else if (process.argv.length == 5) {
    console.log('args:', process.argv[3], process.argv[4]);
    const person = new Person({
      name: process.argv[3],
      number: process.argv[4],
    });

    person.save().then((result) => {
      console.log(`added ${person.name} number ${person.number} to phonebook`);
      mongoose.connection.close();
    });
  } else {
    console.log('Invalid number of arguments');
    mongoose.connection.close();
    process.exit(1);
  }
};

getArgs();
