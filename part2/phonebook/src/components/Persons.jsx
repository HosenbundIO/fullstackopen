import Person from "./Person";

const Persons = ({ persons, filter, deletePerson }) => {
  console.log('persons', persons)
  return (
    <div>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map((person, i) => (
          <Person key={i} person={person} deletePerson={deletePerson} />
        ))}
    </div>
  );
};

export default Persons;
