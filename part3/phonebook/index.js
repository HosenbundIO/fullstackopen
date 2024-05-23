require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const Person = require('./models/person');

const app = express();
app.use(express.json());

morgan.format('myformat', (tokens, req, res) => {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'),
    '-',
    tokens['response-time'](req, res),
    'ms',
    req.method === 'POST' ? JSON.stringify(req.body) : '',
  ].join(' ');
});

app.use(morgan('myformat'));
app.use(express.static('dist'));
app.use(cors());

app.get('/api/persons', (request, response) => {
  Person.find({}).then((person) => {
    response.json(person);
  });
});

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id);

  if (person) {
    response.json(person);
  } else {
    response.status(404).send('404 Not Found');
  }
});

app.get('/info', (request, response) => {
  const date = new Date();
  response.send(
    `<p>Phonebook has info for ${persons.length} people </p>  <p>${date}</p>`
  );
});

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);

  response.status(204).end();
});

// generateId = () => {
//   const maxId = persons.length > 0 ? Math.max(...persons.map((n) => n.id)) : 0;
//   return maxId + 1;
// };

app.post('/api/persons', (request, response) => {
  const body = request.body;
  console.log('body:', body);

  if (!body.name || !body.number) {
    return response.status(400).json({ error: 'name or number is missing' });
  }
  // else if (Person.find((person) => person.name === body.name)) {
  //   return response.status(400).json({ error: 'name must be unique' });
  // }
  else {
    const person = new Person({
      name: body.name,
      number: body.number,
    });

    person.save().then((savedPerson) => {
      response.json(savedPerson);
    });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
