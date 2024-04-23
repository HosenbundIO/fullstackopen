import Person from "./Person";

const Persons = ({ persons, filter }) => {
  console.log('persons', persons)
  return (
    <div>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map((person, i) => (
          <Person key={i} person={person} />
        ))}
    </div>
  );
};

export default Persons;
