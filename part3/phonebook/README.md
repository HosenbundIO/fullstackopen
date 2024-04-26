# Part 3

[Exercises 3.1 - 3.6](https://fullstackopen.com/en/part3/node_js_and_express#exercises-3-1-3-6)

## 3.1: Phonebook Backend, step 1

Implement a Node application that returns a hardcoded list of phonebook entries from the address http://localhost:3001/api/persons.

```javascript
[
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
```

Notice that the forward slash in the route api/persons is not a special character, and is just like any other character in the string.

The application must be started with the command npm start.

The application must also offer an npm run dev command that will run the application and restart the server whenever changes are made and saved to a file in the source code.
