import Button from './Button';

const Person = ({ person, deletePerson }) => {
  return (
    <p>
      {person.name} {person.number} <Button text="delete" type="submit" onClick={() => deletePerson(person.id)} />
    </p>
  );
};

export default Person;
