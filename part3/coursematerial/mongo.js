const mongoose = require('mongoose');

if (process.argv.length < 3) {
  console.log('give password as argument');
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://davidivanov10:${password}@cluster0.iiwfjg4.mongodb.net/notesApp`;

mongoose.set('strictQuery', false);

mongoose.connect(url);

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

const Note = mongoose.model('Note', noteSchema);

let notes = [
  {
    id: 1,
    content: 'HTML is easy',
    important: true,
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    important: false,
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    important: true,
  },
];

let promiseChain = Promise.resolve();

notes.forEach((note) => {
  promiseChain = promiseChain.then(() => {
    const newNote = new Note({
      content: note.content,
      important: note.important,
    });

    return newNote.save().then((result) => {
      console.log('note saved!');
    });
  });
});

promiseChain
  .then(() => {
    mongoose.connection.close();
  })
  .catch((error) => {
    console.log('error:', error);
  });

// const note = new Note({
//   content: 'HTML is easy',
//   important: true,
// });

// note.save().then((result) => {
//   console.log('note saved!');
//   mongoose.connection.close();
// });

// Note.find({}).then((result) => {
//   result.forEach((note) => {
//     console.log(note);
//   });
//   mongoose.connection.close();
// });
