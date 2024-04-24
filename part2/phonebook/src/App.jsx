import { useState, useEffect } from "react";
import personsService from "./services/persons";
import Heading from "./components/Heading";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    console.log("effect");
    personsService.getAll().then((initialPersons) => {
      console.log("promise fulfilled");
      setPersons(initialPersons);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);
    console.log("newName", newName);

    if (
      persons.filter(
        (person) => person.name.toLowerCase() === newName.toLowerCase()
      ).length > 0
    ) {
      alert(`${newName} is already added to phonebook`);
      return;
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      };

      personsService.create(personObject).then((returnedPerson) => {
        console.log("returnedPerson", returnedPerson);
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const deletePerson = (id) => {
    console.log("deletePerson", id);
    const person = persons.find((person) => person.id === id);
    if (window.confirm(`Delete ${person.name}`)) {
      console.log("Delete confirmed");
      console.log("person", person);
      personsService.deleteResource(person.id).then((deletedPerson) => {
        console.log("Deleted:", deletedPerson);
        setPersons(persons.filter((person) => person.id !== id));
      });
    }
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    console.log(event.target.value);
    setFilter(event.target.value);
  };

  return (
    <div>
      <Heading text="Phonebook" />
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
