# Part 2

[Exercises 2.6 - 2.10](https://fullstackopen.com/en/part2/forms#exercises-2-6-2-10)
[Exercise 2.11](https://fullstackopen.com/en/part2/getting_data_from_server#exercise-2-11)
[Exercises 2.12 - 2.15](https://fullstackopen.com/en/part2/altering_data_in_server#exercises-2-12-2-15)
[Exercises 2.16 - 2.17](https://fullstackopen.com/en/part2/adding_styles_to_react_app#exercises-2-16-2-17)

## 2.6: The Phonebook, step 1

Let's create a simple phonebook. In this part, we will only be adding names to the phonebook.

Let us start by implementing the addition of a person to the phonebook.

You can use the code below as a starting point for the App component of your application:

```javascript
import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...
    </div>
  );
};

export default App;
```

The newName state is meant for controlling the form input element.

Sometimes it can be useful to render state and other variables as text for debugging purposes. You can temporarily add the following element to the rendered component:

It's also important to put what we learned in the debugging React applications chapter of part one into good use. The React developer tools extension is incredibly useful for tracking changes that occur in the application's state.

## 2.7: The Phonebook, step 2

Prevent the user from being able to add names that already exist in the phonebook. JavaScript arrays have numerous suitable methods for accomplishing this task. Keep in mind how object equality works in Javascript.

## 2.8: The Phonebook, step 3

Expand your application by allowing users to add phone numbers to the phone book. You will need to add a second input element to the form (along with its own event handler).

## 2.9\*: The Phonebook, step 4

Implement a search field that can be used to filter the list of people by name.

You can implement the search field as an input element that is placed outside the HTML form. The filtering logic shown in the image is case insensitive, meaning that the search term arto also returns results that contain Arto with an uppercase A

## 2.10: The Phonebook, step 5

If you have implemented your application in a single component, refactor it by extracting suitable parts into new components. Maintain the application's state and all event handlers in the App root component.

It is sufficient to extract three components from the application. Good candidates for separate components are, for example, the search filter, the form for adding new people to the phonebook, a component that renders all people from the phonebook, and a component that renders a single person's details.

## 2.11: The Phonebook, step 6

We continue with developing the phonebook. Store the initial state of the application in the file db.json, which should be placed in the root of the project.

```
{
  "persons":[
    {
      "name": "Arto Hellas",
      "number": "040-123456",
      "id": 1
    },
    {
      "name": "Ada Lovelace",
      "number": "39-44-5323523",
      "id": 2
    },
    {
      "name": "Dan Abramov",
      "number": "12-43-234345",
      "id": 3
    },
    {
      "name": "Mary Poppendieck",
      "number": "39-23-6423122",
      "id": 4
    }
  ]
}
```

Start json-server on port 3001 and make sure that the server returns the list of people by going to the address http://localhost:3001/persons in the browser.

## 2.12: The Phonebook, step 7

Let's return to our phonebook application.

Currently, the numbers that are added to the phonebook are not saved to a backend server. Fix this situation.

## 2.13: The Phonebook, step 8

Extract the code that handles the communication with the backend into its own module by following the example shown earlier in this part of the course material.

## 2.14: The Phonebook, step 9

Make it possible for users to delete entries from the phonebook. The deletion can be done through a dedicated button for each person in the phonebook list. You can confirm the action from the user by using the window.confirm method.

The associated resource for a person in the backend can be deleted by making an HTTP DELETE request to the resource's URL. If we are deleting e.g. a person who has the id 2, we would have to make an HTTP DELETE request to the URL localhost:3001/persons/2. No data is sent with the request.

You can make an HTTP DELETE request with the axios library in the same way that we make all of the other requests.

## 2.15\*: The Phonebook, step 10

Why is there a star in the exercise? See here for the explanation.

Change the functionality so that if a number is added to an already existing user, the new number will replace the old number. It's recommended to use the HTTP PUT method for updating the phone number.

If the person's information is already in the phonebook, the application can ask the user to confirm the action.

## 2.16: The Phonebook, step 11

Use the improved error message example from part 2 as a guide to show a notification that lasts for a few seconds after a successful operation is executed (a person is added or a number is changed).

## 2.17\*: The Phonebook, step 12

Open your application in two browsers. If you delete a person in browser 1 a short while before attempting to change the person's phone number in browser 2, you will get the following error messages.

Fix the issue according to the example shown in promise and errors in part 2. Modify the example so that the user is shown a message when the operation does not succeed. The messages shown for successful and unsuccessful events should look different:
