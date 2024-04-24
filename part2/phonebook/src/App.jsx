import { useState, useEffect } from "react";
import personsService from "./services/persons";
import Heading from "./components/Heading";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notifaction";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState(null);

  useEffect(() => {
    personsService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();

    const personObject = {
      name: newName,
      number: newNumber,
    };

    const checkName = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );

    if (checkName && checkName.number === personObject.number) {
      window.alert(`${newName} is already added to the phonebook`);
    } else if (checkName && checkName.number !== personObject.number) {
      if (
        window.confirm(
          `${newName} is already added to the phonebook, replace the old number with a new one?`
        )
      ) {
        personsService
          .update(checkName.id, personObject)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== checkName.id ? person : returnedPerson
              )
            );
            setNewName("");
            setNewNumber("");
            setMessage(`Updated ${returnedPerson.name}`);
            setTimeout(() => {
              setMessage(null);
            }, 5000);
          })
          .catch(() => {
            setMessage({
              text: `Information of ${checkName.name} has already been removed from the server`,
              type: "error",
            });
            setPersons(persons.filter((person) => person.id !== checkName.id));
          });
      }
    } else {
      personsService
        .create(personObject)
        .then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson));
          setNewName("");
          setNewNumber("");
          setMessage({ text: `Added ${returnedPerson.name}`, type: "success" });
          setTimeout(() => {
            setMessage(null);
          }, 5000);
        })
        .catch((error) => {
          console.log(error.response.data);
          setMessage(error.response.data.error);
        });
    }
  };

  const deletePerson = (id) => {
    const person = persons.find((person) => person.id === id);
    if (window.confirm(`Delete ${person.name}`)) {
      personsService
        .deleteResource(person.id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id));
        })
        .catch(() => {
          setMessage({
            text: `Information of ${person.name} has already been removed from the server`,
            type: "error",
          });
          setPersons(persons.filter((person) => person.id !== id));
        });
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <Heading text="Phonebook" />
      <Notification message={message} />
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <Heading text="Add a new" />
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <Heading text="Numbers" />
      <Persons filter={filter} persons={persons} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
