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

## 3.2: Phonebook Backend, step 2

The page has to show the time that the request was received and how many entries are in the phonebook at the time of processing the request.

There can only be one response.send() statement in an Express app route. Once you send a response to the client using response.send(), the request-response cycle is complete and no further response can be sent.

To include a line space in the output, use <br/> tag, or wrap the statements in <p> tags.

## 3.3: Phonebook Backend, step 3

Implement the functionality for displaying the information for a single phonebook entry. The url for getting the data for a person with the id 5 should be http://localhost:3001/api/persons/5

If an entry for the given id is not found, the server has to respond with the appropriate status code.

## 3.4: Phonebook Backend, step 4

Implement functionality that makes it possible to delete a single phonebook entry by making an HTTP DELETE request to the unique URL of that phonebook entry.

Test that your functionality works with either Postman or the Visual Studio Code REST client.

## 3.5: Phonebook Backend, step 5

Expand the backend so that new phonebook entries can be added by making HTTP POST requests to the address http://localhost:3001/api/persons.

Generate a new id for the phonebook entry with the Math.random function. Use a big enough range for your random values so that the likelihood of creating duplicate ids is small.

## 3.6: Phonebook Backend, step 6

Implement error handling for creating new entries. The request is not allowed to succeed, if:

<ul>
  <li>The name or number is missing</li>
  <li>The name already exists in the phonebook</li>
</ul>

Respond to requests like these with the appropriate status code, and also send back information that explains the reason for the error, e.g.:

```javascript
{
  error: 'name must be unique';
}
```
