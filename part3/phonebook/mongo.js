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

const person = new Person({
  name: 'David Ivanov',
  number: '0888888888',
});

person.save().then((result) => {
  console.log('person saved!');
  mongoose.connection.close();
});
